# pocketjs-roll/chain

<p align="center" width="100%">
    <img height="90" src="https://avatars.githubusercontent.com/u/33689860?s=200&v=4" />
</p>

<p align="center" width="100%">
   <a href="https://github.com/cosmology-tech/stargazejs/blob/main/LICENSE"><img height="20" src="https://img.shields.io/badge/license-MIT-blue.svg"></a>
</p>


Chain Registry info for Stargaze, including asset lists.

```
npm install @stargaze-zone/chain
```

```js
import { chain, assets, asset_list } from '@stargaze-zone/chain';
```

### assets

```js
console.log(assets);
{
  '$schema': '../assetlist.schema.json',
  description: 'The native token of Pocket Network',
    denomUnits: [
  {
    denom: 'upokt',
    exponent: 0
  },
  {
    denom: 'pokt',
    exponent: 6
  }
],
  base: 'upokt',
  name: 'POKT',
  display: 'pokt',
  symbol: 'POKT',
  logoURIs: {
  svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pocket/images/pokt-icon.svg'
},
  keywords: ['rpc', 'api'],
    images: [
  {
    svg: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pocket/images/pokt-icon.svg'
  },
  {
    png: 'https://raw.githubusercontent.com/cosmos/chain-registry/master/pocket/images/pokt-icon.png'
  }
],
  socials: {
  website: 'https://pocket.network/',
    twitter: 'https://twitter.com/POKTnetwork'
},
  typeAsset: 'sdk.coin'
}
```

### chain

```js
console.log(chain);
{
  $schema: '../chain.schema.json',
    chainName: 'pocket',
  status: 'live',
  networkType: 'mainnet',
  website: 'https://pocket.network/',
  prettyName: 'Pocket Network',
  chainType: 'cosmos',
  chainId: 'pocket',
  bech32Prefix: 'pokt',
  daemonName: 'pocketd',
  nodeHome: '$HOME/.pocket',
  keyAlgos: ['secp256k1'],
  slip44: 118,
  description:
  'Pocket Network is a decentralized infrastructure protocol that incentivizes a global network of node operators to provide reliable and cost-effective data access for applications across multiple platforms, including blockchains, AI services, and other APIs.',
    fees: {
  feeTokens: [
    {
      denom: 'upokt',
      fixedMinGasPrice: 0.001,
      lowGasPrice: 0.001,
      averageGasPrice: 0.002,
      highGasPrice: 0.0025
    }
  ]
},
  staking: {
    stakingTokens: [
      {
        denom: 'upokt'
      }
    ]
  }
...
}
```

## Credits


Code built with the help of these related projects:

* [chain-registry](https://github.com/cosmology/chain-registry) an npm module for the official Cosmos chain-registry
