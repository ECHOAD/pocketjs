import { getAssetLists } from '@chain-registry/utils';
import {  Chain} from '@chain-registry/types';
import { assetLists, chains, ibcData } from 'chain-registry';
import { writeFileSync } from 'fs';
import path from 'path';

const chainName = 'pocket';

// Get full asset list for the mainnet chain
const asset_list = assetLists.reduce((acc, { chainName }) => {
  if (chainName !== chainName) return acc;
  return [...acc, ...getAssetLists(chainName, ibcData, assetLists)];
}, []);

// Find mainnet/testnet chain and asset info
const assetList = assetLists.find((list) => list.chainName === chainName);
const chain = chains.find((c) => c.chainName === chainName);
const testnet = chains.find((c) => c.chainName === `${chainName}testnet`);
const testnetAssetList = assetLists.find(
  (list) => list.chainName === `${chainName}testnet`
);

function toCamelCase(str: string): string {
  return str.replace(/_([a-z])/g, (_, char) => char.toUpperCase());
}
function convertKeysToCamel(obj: any): any {
  if (Array.isArray(obj)) {
    return obj.map(convertKeysToCamel);
  } else if (obj !== null && typeof obj === 'object') {
    return Object.entries(obj).reduce((acc, [key, value]) => {
      acc[toCamelCase(key)] = convertKeysToCamel(value);
      return acc;
    }, {} as any);
  }
  return obj;
}


// Write TypeScript file
function write(
  file: string,
  json: any,
  typeName: string,
  isArray = false
): void {
  if (!json) return;
  const outputDir = path.resolve(__dirname, '../src');
  const exportType = isArray ? `${typeName}[]` : typeName;

  const camelJson = convertKeysToCamel(json);
  const content = `import { ${typeName} } from '@chain-registry/types';

const ${file}: ${exportType} = ${JSON.stringify(camelJson, null, 2)};
export default ${file};
`;

  writeFileSync(path.join(outputDir, `${file}.ts`), content);
}

// Write all outputs
write('chain', chain, 'Chain');
write('testnet', testnet, 'Chain');
write('assets', assetList, 'AssetList');
// write('testnet_assets', testnetAssetList, 'AssetList');
// write('asset_list', asset_list[0], 'AssetList');
