import { getAssetLists } from '@chain-registry/utils';
import {  assetLists, chains, ibcData } from 'chain-registry';
import { writeFileSync } from 'fs';

const chainName = 'pocket';

const asset_list = assetLists.reduce((m, { chain_name }) => {
  if (chain_name !== chainName) return m;
  return [...m, ...getAssetLists(chain_name, ibcData, assetLists)];
}, []);

const assetList = assetLists.find((list) => list.chainName === chainName);
const chain = chains.find((chain) => chain.chainName === chainName);
const testnet = chains.find(
  (chain) => chain.chainName === chainName + 'testnet'
);
const testnetAssetList = assetLists.find(
  (list) => list.chainName === chainName + 'testnet'
);

const write = (file, json, TypeName, isArray = false) => {
  const strfy = JSON.stringify(json, null, 2);
  const exportType = isArray ? TypeName + '[]' : TypeName;
  writeFileSync(
    `${__dirname}/../src/${file}.ts`,
    `import { ${TypeName} } from '@chain-registry/types';
const ${file}: ${exportType} = ${strfy};
export default ${file};
    `
  );
};

write(`chain`, chain, 'Chain');
// write(`testnet`, testnet, 'Chain');
write(`assets`, assetList, 'AssetList');
// write(`testnet_assets`, testnetAssetList, 'AssetList');
write(`asset_list`, asset_list[0], 'AssetList');
