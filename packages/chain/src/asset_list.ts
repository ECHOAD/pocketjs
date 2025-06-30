import { AssetList } from '@chain-registry/types';

const asset_list: AssetList = {
  "chainName": "ethereum",
  "assets": [
    {
      "description": "Picasso is a blockchain project within the IBC ecosystem that focuses on providing modular and interoperable solutions for decentralized finance (DeFi) and other blockchain applications.",
      "extendedDescription": "Picasso is part of the IBC network and aims to offer modular, interoperable solutions tailored for DeFi and other blockchain applications. Picasso enables IBC-based bridging between Cosmos, Solana, Ethereum, and Polkadot. Picasso's commitment to innovation and interoperability makes it a significant player in the evolving blockchain landscape, providing tools and infrastructure that cater to diverse blockchain use cases.",
      "denomUnits": [
        {
          "denom": "ibc/6517CF990493C8F3D6AE1E03FA1B5167B1E40345061104F07296D883379B4A08",
          "exponent": 0,
          "aliases": [
            "ppica"
          ]
        },
        {
          "denom": "pica",
          "exponent": 12
        }
      ],
      "base": "ibc/6517CF990493C8F3D6AE1E03FA1B5167B1E40345061104F07296D883379B4A08",
      "name": "Pica",
      "display": "pica",
      "symbol": "PICA",
      "coingeckoId": "picasso",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channelId": "channel-52",
            "baseDenom": "ppica",
            "chainName": "composable"
          },
          "chain": {
            "channelId": "channel-2"
          }
        }
      ],
      "images": [
        {
          "imageSync": {
            "chainName": "picasso",
            "baseDenom": "ppica"
          },
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/composable/images/pica.svg"
        }
      ],
      "logoURIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/composable/images/pica.svg"
      },
      "socials": {
        "website": "https://picasso.network/",
        "twitter": "https://twitter.com/picasso_network"
      },
      "typeAsset": "sdk.coin"
    },
    {
      "description": "The native staking and governance token of Kusama Relay Chain.",
      "denomUnits": [
        {
          "denom": "ibc/50B4539D139DB6EAB7C6E82AC25F9E6EFBB50CB72093F58225A90043427D1EEA",
          "exponent": 0,
          "aliases": [
            "ibc/EE9046745AEC0E8302CB7ED9D5AD67F528FB3B7AE044B247FB0FB293DBDA35E9"
          ]
        },
        {
          "denom": "ksm",
          "exponent": 12
        }
      ],
      "typeAsset": "ics20",
      "base": "ibc/50B4539D139DB6EAB7C6E82AC25F9E6EFBB50CB72093F58225A90043427D1EEA",
      "name": "KSM",
      "display": "ksm",
      "symbol": "KSM",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channelId": "channel-52",
            "baseDenom": "ibc/EE9046745AEC0E8302CB7ED9D5AD67F528FB3B7AE044B247FB0FB293DBDA35E9",
            "chainName": "composable"
          },
          "chain": {
            "channelId": "channel-2"
          }
        }
      ],
      "images": [
        {
          "imageSync": {
            "chainName": "picasso",
            "baseDenom": "4"
          },
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/kusama/images/ksm.svg"
        }
      ],
      "logoURIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/kusama/images/ksm.svg"
      }
    },
    {
      "description": "The native staking and governance token of Polkadot Relay Chain.",
      "denomUnits": [
        {
          "denom": "ibc/2BD2C021C7F5443562734B277ADBE0177EF7F6B20BC00D0505079D784B9A0C98",
          "exponent": 0,
          "aliases": [
            "ibc/3CC19CEC7E5A3E90E78A5A9ECC5A0E2F8F826A375CF1E096F4515CF09DA3E366"
          ]
        },
        {
          "denom": "dot",
          "exponent": 10
        }
      ],
      "typeAsset": "ics20",
      "base": "ibc/2BD2C021C7F5443562734B277ADBE0177EF7F6B20BC00D0505079D784B9A0C98",
      "name": "DOT",
      "display": "dot",
      "symbol": "DOT",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channelId": "channel-52",
            "baseDenom": "ibc/3CC19CEC7E5A3E90E78A5A9ECC5A0E2F8F826A375CF1E096F4515CF09DA3E366",
            "chainName": "composable"
          },
          "chain": {
            "channelId": "channel-2"
          }
        }
      ],
      "images": [
        {
          "imageSync": {
            "chainName": "picasso",
            "baseDenom": "79228162514264337593543950342"
          },
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polkadot/images/dot.svg",
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polkadot/images/dot.png",
          "theme": {
            "primaryColorHex": "#e4047c"
          }
        }
      ],
      "logoURIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polkadot/images/dot.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polkadot/images/dot.svg"
      }
    },
    {
      "description": "USDT issued by the Kusama Asset Hub.",
      "denomUnits": [
        {
          "denom": "ibc/380D20B31D216A36B5153FE212BFF378DB1422B8A837521B0A145DBE1D4E634B",
          "exponent": 0,
          "aliases": [
            "ibc/F3EC9F834E57DF704FA3AEAF14E8391C2E58397FE56960AD70E67562990D8265"
          ]
        },
        {
          "denom": "usdt",
          "exponent": 6
        }
      ],
      "typeAsset": "ics20",
      "base": "ibc/380D20B31D216A36B5153FE212BFF378DB1422B8A837521B0A145DBE1D4E634B",
      "name": "USDT",
      "display": "usdt",
      "symbol": "USDT",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channelId": "channel-52",
            "baseDenom": "ibc/F3EC9F834E57DF704FA3AEAF14E8391C2E58397FE56960AD70E67562990D8265",
            "chainName": "composable"
          },
          "chain": {
            "channelId": "channel-2"
          }
        }
      ],
      "images": [
        {
          "imageSync": {
            "chainName": "picasso",
            "baseDenom": "130"
          }
        }
      ]
    },
    {
      "description": "The native fee, staking and governance token of the Tinkernet Parachain.",
      "denomUnits": [
        {
          "denom": "ibc/3DE46D1124A42C747DD3C76DF7C78C5AD3B4FABD9A2A765F18DB89E36B40B63E",
          "exponent": 0,
          "aliases": [
            "ibc/C58E5D2571042137CB68B1B9851C4E7211C05F7C2C79E21E0966AF0F063961F8"
          ]
        },
        {
          "denom": "tnkr",
          "exponent": 12
        }
      ],
      "typeAsset": "ics20",
      "base": "ibc/3DE46D1124A42C747DD3C76DF7C78C5AD3B4FABD9A2A765F18DB89E36B40B63E",
      "name": "TNKR",
      "display": "tnkr",
      "symbol": "TNKR",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channelId": "channel-52",
            "baseDenom": "ibc/C58E5D2571042137CB68B1B9851C4E7211C05F7C2C79E21E0966AF0F063961F8",
            "chainName": "composable"
          },
          "chain": {
            "channelId": "channel-2"
          }
        }
      ],
      "images": [
        {
          "imageSync": {
            "chainName": "picasso",
            "baseDenom": "2125"
          },
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/tinkernet/images/tnkr.svg"
        }
      ],
      "logoURIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/tinkernet/images/tnkr.svg"
      }
    },
    {
      "description": "The native token of Ethereum, bridged via IBC.",
      "extendedDescription": "Ether is the native token of the Ethereum blockchain. It powers a wide range of decentralized applications and smart contracts on the platform. This specific version has been bridged through Picasso's implementation of IBC on Ethereum.",
      "denomUnits": [
        {
          "denom": "ibc/9BBA517771C23A701815F169F27A6D31647C3371E54848D0A28FE52CDFA136C6",
          "exponent": 0,
          "aliases": [
            "ibc/F9D075D4079FC56A9C49B601E54A45292C319D8B0E8CC0F8439041130AA7166C"
          ]
        },
        {
          "denom": "eth",
          "exponent": 18
        }
      ],
      "typeAsset": "ics20",
      "base": "ibc/9BBA517771C23A701815F169F27A6D31647C3371E54848D0A28FE52CDFA136C6",
      "name": "Ethereum",
      "display": "eth",
      "symbol": "ETH",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channelId": "channel-52",
            "baseDenom": "ibc/F9D075D4079FC56A9C49B601E54A45292C319D8B0E8CC0F8439041130AA7166C",
            "chainName": "composable"
          },
          "chain": {
            "channelId": "channel-2"
          }
        }
      ],
      "logoURIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.svg"
      },
      "images": [
        {
          "imageSync": {
            "chainName": "ethereum",
            "baseDenom": "wei"
          },
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.svg",
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.png",
          "theme": {
            "primaryColorHex": "#303030"
          }
        }
      ],
      "socials": {
        "website": "https://ethereum.org/",
        "twitter": "https://twitter.com/ethereum"
      }
    },
    {
      "description": "A stablecoin issued by Maker Protocol.",
      "extendedDescription": "DAI, a stablecoin issued by the Maker Protocol, maintains a value pegged to the US dollar. This specific version has been bridged through Picasso's implementation of IBC on Ethereum.",
      "denomUnits": [
        {
          "denom": "ibc/039F6FAF93197A3B868319B5B03362DD75A8C5BE2125B84F5C4402BCEAD6F341",
          "exponent": 0,
          "aliases": [
            "ibc/A342F6F8D1CDE1D934C50E8EAFF91E813D971E1BFEED7E557F1674E01004A533"
          ]
        },
        {
          "denom": "dai",
          "exponent": 18
        }
      ],
      "typeAsset": "ics20",
      "base": "ibc/039F6FAF93197A3B868319B5B03362DD75A8C5BE2125B84F5C4402BCEAD6F341",
      "name": "Dai",
      "display": "dai",
      "symbol": "DAI",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channelId": "channel-52",
            "baseDenom": "ibc/A342F6F8D1CDE1D934C50E8EAFF91E813D971E1BFEED7E557F1674E01004A533",
            "chainName": "composable"
          },
          "chain": {
            "channelId": "channel-2"
          }
        }
      ],
      "logoURIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/dai.svg"
      },
      "images": [
        {
          "imageSync": {
            "chainName": "ethereum",
            "baseDenom": "0x6b175474e89094c44da98b954eedeac495271d0f"
          },
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/dai.svg"
        }
      ],
      "socials": {
        "website": "https://makerdao.com/",
        "twitter": "https://twitter.com/MakerDAO"
      }
    },
    {
      "description": "The governance token of the Frax ecosystem.",
      "extendedDescription": "Frax Shares is the governance and utility token of the Frax Protocol. It plays a crucial role in maintaining the stability of the FRAX stablecoin. Holders of FXS can participate in governance decisions and benefit from the protocol's growth and revenue, as the token captures fees.",
      "denomUnits": [
        {
          "denom": "ibc/761FE4CCAA9E08D2A4B0F872D7030604A6419196BAF16A74C5E3E5A029479DC0",
          "exponent": 0,
          "aliases": [
            "ibc/5F9BE030FC355733EC79307409FA98398BBFC747C9430B326C144A74F6808B29"
          ]
        },
        {
          "denom": "fxs",
          "exponent": 18
        }
      ],
      "typeAsset": "ics20",
      "base": "ibc/761FE4CCAA9E08D2A4B0F872D7030604A6419196BAF16A74C5E3E5A029479DC0",
      "name": "Frax Shares",
      "display": "fxs",
      "symbol": "FXS",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channelId": "channel-52",
            "baseDenom": "ibc/5F9BE030FC355733EC79307409FA98398BBFC747C9430B326C144A74F6808B29",
            "chainName": "composable"
          },
          "chain": {
            "channelId": "channel-2"
          }
        }
      ],
      "logoURIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/fxs.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/fxs.svg"
      },
      "images": [
        {
          "imageSync": {
            "chainName": "ethereum",
            "baseDenom": "0x3432b6a60d23ca0dfca7761b7ab56459d9c964d0"
          },
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/fxs.svg",
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/fxs.png",
          "theme": {
            "primaryColorHex": "#040404"
          }
        }
      ],
      "socials": {
        "website": "https://www.frax.com/",
        "twitter": "https://twitter.com/fraxfinance"
      }
    },
    {
      "description": "The first fractional-algorithmic stablecoin by Frax Finance.",
      "extendedDescription": "FRAX is a stablecoin designed to maintain a stable value to a peg of the US dollar. It is issued by the Frax Protocol, which employs a hybrid approach combining algorithmic mechanisms with collateral backing.",
      "denomUnits": [
        {
          "denom": "ibc/376C2DF35FD8F84EFE82ECA44F37E7BBCA987D2FF12DF84AB6861AC7131420A6",
          "exponent": 0,
          "aliases": [
            "ibc/4F20D68B51ED559F99C3CD658383E91F45486D884BF546E7B25337A058562CDB"
          ]
        },
        {
          "denom": "frax",
          "exponent": 18
        }
      ],
      "typeAsset": "ics20",
      "base": "ibc/376C2DF35FD8F84EFE82ECA44F37E7BBCA987D2FF12DF84AB6861AC7131420A6",
      "name": "Frax",
      "display": "frax",
      "symbol": "FRAX",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channelId": "channel-52",
            "baseDenom": "ibc/4F20D68B51ED559F99C3CD658383E91F45486D884BF546E7B25337A058562CDB",
            "chainName": "composable"
          },
          "chain": {
            "channelId": "channel-2"
          }
        }
      ],
      "logoURIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/frax.svg"
      },
      "images": [
        {
          "imageSync": {
            "chainName": "ethereum",
            "baseDenom": "0x853d955acef822db058eb8505911ed77f175b99e"
          },
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/frax.svg"
        }
      ],
      "socials": {
        "website": "https://www.frax.com/",
        "twitter": "https://twitter.com/fraxfinance"
      }
    },
    {
      "description": "A liquid ETH staking derivative designed to leverage the Frax ecosystem.",
      "extendedDescription": "FrxETH is a stablecoin that is loosely pegged to ETH, meaning that 1 frxETH always represents 1 ETH.",
      "denomUnits": [
        {
          "denom": "ibc/4C170C20CA2B771D8D418C1E0DA04BA1FE36D65EF5F4714042B9EBCB60600A10",
          "exponent": 0,
          "aliases": [
            "ibc/458032E654E41DB91EF98F13E2CE4F9E0FE86BA3E0CDBEC074A854E9F5229A90"
          ]
        },
        {
          "denom": "frxeth",
          "exponent": 18
        }
      ],
      "typeAsset": "ics20",
      "base": "ibc/4C170C20CA2B771D8D418C1E0DA04BA1FE36D65EF5F4714042B9EBCB60600A10",
      "name": "Frax Ether",
      "display": "frxeth",
      "symbol": "frxETH",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channelId": "channel-52",
            "baseDenom": "ibc/458032E654E41DB91EF98F13E2CE4F9E0FE86BA3E0CDBEC074A854E9F5229A90",
            "chainName": "composable"
          },
          "chain": {
            "channelId": "channel-2"
          }
        }
      ],
      "logoURIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/frxeth.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/frxeth.svg"
      },
      "images": [
        {
          "imageSync": {
            "chainName": "ethereum",
            "baseDenom": "0x5e8422345238f34275888049021821e8e08caa1f"
          },
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/frxeth.svg",
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/frxeth.png",
          "theme": {
            "primaryColorHex": "#040404"
          }
        }
      ],
      "socials": {
        "website": "https://www.frax.com/",
        "twitter": "https://twitter.com/fraxfinance"
      }
    },
    {
      "description": "A Liquid Staking Derivative designed to accrue the staking yield of the Frax ETH validators.",
      "extendedDescription": "SFRXETH is a ERC-4626 vault designed to accrue the staking yield of the Frax ETH validators. It allows users to earn staking yield on their frxETH, a type of Frax Ether.",
      "denomUnits": [
        {
          "denom": "ibc/868D55C1A349627B3A8F65E24A54F756E094786A855FBD1EA2D9849303699977",
          "exponent": 0,
          "aliases": [
            "ibc/4E0ECE7819D77B0F2B49F5C34B5E594A02D2BA8B1B0F103208F847B53EBFB69A"
          ]
        },
        {
          "denom": "sfrxeth",
          "exponent": 18
        }
      ],
      "typeAsset": "ics20",
      "base": "ibc/868D55C1A349627B3A8F65E24A54F756E094786A855FBD1EA2D9849303699977",
      "name": "Frax Staked Ether",
      "display": "sfrxeth",
      "symbol": "sfrxETH",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channelId": "channel-52",
            "baseDenom": "ibc/4E0ECE7819D77B0F2B49F5C34B5E594A02D2BA8B1B0F103208F847B53EBFB69A",
            "chainName": "composable"
          },
          "chain": {
            "channelId": "channel-2"
          }
        }
      ],
      "logoURIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/sfrxeth.svg"
      },
      "images": [
        {
          "imageSync": {
            "chainName": "ethereum",
            "baseDenom": "0xac3e018457b222d93114458476f3e3416abbe38f"
          },
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/sfrxeth.svg"
        }
      ],
      "socials": {
        "website": "https://www.frax.com/",
        "twitter": "https://twitter.com/fraxfinance"
      }
    },
    {
      "description": "An ERC4626 staking vault that distributes part of the Frax Protocol yield weekly to stakers denominated in FRAX stablecoins. ",
      "extendedDescription": "Staked FRAX (sFRAX) is an ERC4626 staking vault that distributes part of the Frax Protocol yield weekly to stakers denominated in FRAX stablecoins. The sFRAX token represents pro rata deposits within the vault and is always withdrawable for FRAX stablecoins at the pro rata rate at all times.",
      "denomUnits": [
        {
          "denom": "ibc/510D600D735B7EA80D4E30CEF26DE1AD046FA5934C24E6241A6796892833B568",
          "exponent": 0,
          "aliases": [
            "ibc/5BD7F23FE150D9CF3BCC944DB829380BCC51A4022A131151C4D13B3AFAC2D1D9"
          ]
        },
        {
          "denom": "sfrax",
          "exponent": 18
        }
      ],
      "typeAsset": "ics20",
      "base": "ibc/510D600D735B7EA80D4E30CEF26DE1AD046FA5934C24E6241A6796892833B568",
      "name": "Staked FRAX",
      "display": "sfrax",
      "symbol": "sFRAX",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channelId": "channel-52",
            "baseDenom": "ibc/5BD7F23FE150D9CF3BCC944DB829380BCC51A4022A131151C4D13B3AFAC2D1D9",
            "chainName": "composable"
          },
          "chain": {
            "channelId": "channel-2"
          }
        }
      ],
      "logoURIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/sfrax.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/sfrax.svg"
      },
      "images": [
        {
          "imageSync": {
            "chainName": "ethereum",
            "baseDenom": "0xa663b02cf0a4b149d2ad41910cb81e23e1c41c32"
          },
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/sfrax.svg",
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/sfrax.png",
          "theme": {
            "primaryColorHex": "#040404"
          }
        }
      ],
      "socials": {
        "website": "https://www.frax.com/",
        "twitter": "https://twitter.com/fraxfinance"
      }
    },
    {
      "description": "A stablecoin issued by Tether that is pegged 1:1 to the USD.",
      "extendedDescription": "USDT, or Tether, is a widely used stablecoin pegged to the US dollar, designed to maintain a stable value and facilitate transactions. This specific version has been bridged through Picasso's implementation of IBC on Ethereum.",
      "denomUnits": [
        {
          "denom": "ibc/22C25F23DFDF6B950DFDD5468AE25D052684F76B4ADDE8895C55F9D9DAFADC63",
          "exponent": 0,
          "aliases": [
            "ibc/37CC704EA53E96AB09A9C31D79142DE7DB252420F3AB18015F9870AE219947BD"
          ]
        },
        {
          "denom": "usdt",
          "exponent": 6
        }
      ],
      "typeAsset": "ics20",
      "base": "ibc/22C25F23DFDF6B950DFDD5468AE25D052684F76B4ADDE8895C55F9D9DAFADC63",
      "name": "Tether (Ethereum)",
      "display": "usdt",
      "symbol": "USDT",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channelId": "channel-52",
            "baseDenom": "ibc/37CC704EA53E96AB09A9C31D79142DE7DB252420F3AB18015F9870AE219947BD",
            "chainName": "composable"
          },
          "chain": {
            "channelId": "channel-2"
          }
        }
      ],
      "logoURIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg"
      },
      "images": [
        {
          "imageSync": {
            "chainName": "ethereum",
            "baseDenom": "0xdac17f958d2ee523a2206206994597c13d831ec7"
          },
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg",
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.png",
          "theme": {
            "circle": true,
            "primaryColorHex": "#009393",
            "backgroundColorHex": "#009393"
          }
        }
      ],
      "socials": {
        "website": "https://www.tether.to/",
        "twitter": "https://twitter.com/Tether_to"
      }
    },
    {
      "description": "CRV is the governance token for Curve Finance.",
      "denomUnits": [
        {
          "denom": "ibc/9B4D2A37004A151CFE44F67A75EF419FB219E8B117A3F048738D6B034271AF81",
          "exponent": 0,
          "aliases": [
            "ibc/52C8C6197989684F891076F228F20CD1659AB6E1776E3B85E65CBBEC67DA5DED"
          ]
        },
        {
          "denom": "crv",
          "exponent": 18
        }
      ],
      "typeAsset": "ics20",
      "base": "ibc/9B4D2A37004A151CFE44F67A75EF419FB219E8B117A3F048738D6B034271AF81",
      "name": "Curve DAO",
      "display": "crv",
      "symbol": "CRV",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channelId": "channel-52",
            "baseDenom": "ibc/52C8C6197989684F891076F228F20CD1659AB6E1776E3B85E65CBBEC67DA5DED",
            "chainName": "composable"
          },
          "chain": {
            "channelId": "channel-2"
          }
        }
      ],
      "logoURIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/crv.png"
      },
      "images": [
        {
          "imageSync": {
            "chainName": "ethereum",
            "baseDenom": "0xd533a949740bb3306d119cc777fa900ba034cd52"
          },
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/crv.png",
          "theme": {
            "primaryColorHex": "#1fcbdb"
          }
        }
      ]
    },
    {
      "description": "An ERC-20 token issued Ethereum that represents Bitcoin.",
      "denomUnits": [
        {
          "denom": "ibc/9477C189ADC4EECCD77ADC446FE5B5E4E24BD54A6855520B8DEE28C07C66C0F4",
          "exponent": 0,
          "aliases": [
            "ibc/1507315B0C337368B85A7EC67C3956C508E1106EBD96336B1B092F7B2815B3E5"
          ]
        },
        {
          "denom": "wbtc",
          "exponent": 18
        }
      ],
      "typeAsset": "ics20",
      "base": "ibc/9477C189ADC4EECCD77ADC446FE5B5E4E24BD54A6855520B8DEE28C07C66C0F4",
      "name": "Wrapped Bitcoin",
      "display": "wbtc",
      "symbol": "wBTC",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channelId": "channel-52",
            "baseDenom": "ibc/1507315B0C337368B85A7EC67C3956C508E1106EBD96336B1B092F7B2815B3E5",
            "chainName": "composable"
          },
          "chain": {
            "channelId": "channel-2"
          }
        }
      ],
      "logoURIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wbtc.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wbtc.svg"
      },
      "images": [
        {
          "imageSync": {
            "chainName": "ethereum",
            "baseDenom": "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599"
          },
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wbtc.svg",
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wbtc.png",
          "theme": {
            "primaryColorHex": "#f39444"
          }
        }
      ]
    },
    {
      "description": "A token that represents staked ether in Lido.",
      "denomUnits": [
        {
          "denom": "ibc/B1EAAE842122813505F1EC7D371CC47DC3644CF7FF63BA61DD2FCB381A745305",
          "exponent": 0,
          "aliases": [
            "ibc/74F65FE91F672BC2524C039B3CD0211F6D370071209552533DF26D57743D5FFD"
          ]
        },
        {
          "denom": "steth",
          "exponent": 18
        }
      ],
      "typeAsset": "ics20",
      "base": "ibc/B1EAAE842122813505F1EC7D371CC47DC3644CF7FF63BA61DD2FCB381A745305",
      "name": "Lido Staked Ether",
      "display": "steth",
      "symbol": "stETH",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channelId": "channel-52",
            "baseDenom": "ibc/74F65FE91F672BC2524C039B3CD0211F6D370071209552533DF26D57743D5FFD",
            "chainName": "composable"
          },
          "chain": {
            "channelId": "channel-2"
          }
        }
      ],
      "logoURIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/steth.svg"
      },
      "images": [
        {
          "imageSync": {
            "chainName": "ethereum",
            "baseDenom": "0xae7ab96520de3a18e5e111b5eaab095312d7fe84"
          },
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/steth.svg"
        }
      ]
    },
    {
      "description": "Rocket Pool protocol's liquid staking token.",
      "denomUnits": [
        {
          "denom": "ibc/9689289CC4176E044ABBD7E19AC170FBA9F8B1144F68E37C2F11AFEF248B74F7",
          "exponent": 0,
          "aliases": [
            "ibc/207E7F34DFEBF714CED4900C1FD85BAF200230BF431EE8133EB26B98CB535EDC"
          ]
        },
        {
          "denom": "reth",
          "exponent": 18
        }
      ],
      "typeAsset": "ics20",
      "base": "ibc/9689289CC4176E044ABBD7E19AC170FBA9F8B1144F68E37C2F11AFEF248B74F7",
      "name": "Rocket Pool ETH",
      "display": "reth",
      "symbol": "rETH",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channelId": "channel-52",
            "baseDenom": "ibc/207E7F34DFEBF714CED4900C1FD85BAF200230BF431EE8133EB26B98CB535EDC",
            "chainName": "composable"
          },
          "chain": {
            "channelId": "channel-2"
          }
        }
      ],
      "logoURIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/reth.png"
      },
      "images": [
        {
          "imageSync": {
            "chainName": "ethereum",
            "baseDenom": "0xae78736cd615f374d3085123a210448e74fc6393"
          },
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/reth.png",
          "theme": {
            "primaryColorHex": "#fba487"
          }
        }
      ]
    },
    {
      "description": "A collateralized-debt-position (CDP) stablecoin by Curve DAO.",
      "denomUnits": [
        {
          "denom": "ibc/5D0B3F75709EABFB2639A9C91444D716095F4292B1BC54A5B9052CA07F141A18",
          "exponent": 0,
          "aliases": [
            "ibc/C9D79BE8E3E75CA2DFDC722C77D7B179C39A4802D59019C790A825FDE34B724A"
          ]
        },
        {
          "denom": "crvusd",
          "exponent": 18
        }
      ],
      "typeAsset": "ics20",
      "base": "ibc/5D0B3F75709EABFB2639A9C91444D716095F4292B1BC54A5B9052CA07F141A18",
      "name": "crvUSD",
      "display": "crvusd",
      "symbol": "crvUSD",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channelId": "channel-52",
            "baseDenom": "ibc/C9D79BE8E3E75CA2DFDC722C77D7B179C39A4802D59019C790A825FDE34B724A",
            "chainName": "composable"
          },
          "chain": {
            "channelId": "channel-2"
          }
        }
      ],
      "logoURIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/crvusd.png"
      },
      "images": [
        {
          "imageSync": {
            "chainName": "ethereum",
            "baseDenom": "0xf939e0a03fb07f59a73314e73794be0e57ac1b4e"
          },
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/crvusd.png",
          "theme": {
            "primaryColorHex": "#d6e3d9"
          }
        }
      ]
    },
    {
      "description": "pxETH is built on top of the Pirex platform and forms the foundation of the Dinero protocol.",
      "denomUnits": [
        {
          "denom": "ibc/98E4827D652C1B401675898AC00E81E6D964E7C274FE4C2E697C9BE32D3DB4B5",
          "exponent": 0,
          "aliases": [
            "ibc/36EF1EA47A09689C81D848B08E5240FA9FF13B17DB7DCF48B77D4D0D9B152821"
          ]
        },
        {
          "denom": "pxeth",
          "exponent": 18
        }
      ],
      "typeAsset": "ics20",
      "base": "ibc/98E4827D652C1B401675898AC00E81E6D964E7C274FE4C2E697C9BE32D3DB4B5",
      "name": "Dinero Staked ETH",
      "display": "pxeth",
      "symbol": "pxETH",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channelId": "channel-52",
            "baseDenom": "ibc/36EF1EA47A09689C81D848B08E5240FA9FF13B17DB7DCF48B77D4D0D9B152821",
            "chainName": "composable"
          },
          "chain": {
            "channelId": "channel-2"
          }
        }
      ],
      "logoURIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/pxeth.png"
      },
      "images": [
        {
          "imageSync": {
            "chainName": "ethereum",
            "baseDenom": "0x04c154b66cb340f3ae24111cc767e0184ed00cc6"
          },
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/pxeth.png",
          "theme": {
            "primaryColorHex": "#c3cbd2"
          }
        }
      ]
    },
    {
      "description": "eETH is a natively restaked liquid staking token on Ethereum.",
      "denomUnits": [
        {
          "denom": "ibc/0774D63A28FBF3BEE5BB428B9B17C7D856E2CAE432EFAB927011388740660FB6",
          "exponent": 0,
          "aliases": [
            "ibc/34C23BA6BAA2EAE0199D85AD1E2E214F76B0BFAD42BF75542D15F71264EEB05B"
          ]
        },
        {
          "denom": "eeth",
          "exponent": 18
        }
      ],
      "typeAsset": "ics20",
      "base": "ibc/0774D63A28FBF3BEE5BB428B9B17C7D856E2CAE432EFAB927011388740660FB6",
      "name": "ether.fi Staked ETH",
      "display": "eeth",
      "symbol": "eETH",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channelId": "channel-52",
            "baseDenom": "ibc/34C23BA6BAA2EAE0199D85AD1E2E214F76B0BFAD42BF75542D15F71264EEB05B",
            "chainName": "composable"
          },
          "chain": {
            "channelId": "channel-2"
          }
        }
      ],
      "logoURIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eeth.png"
      },
      "images": [
        {
          "imageSync": {
            "chainName": "ethereum",
            "baseDenom": "0x35fa164735182de50811e8e2e824cfb9b6118ac2"
          },
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eeth.png",
          "theme": {
            "primaryColorHex": "#5045b7"
          }
        }
      ]
    },
    {
      "description": "The native governance token of Ethena.",
      "denomUnits": [
        {
          "denom": "ibc/863207F01ABD3034C3E64C3D20559A42FCDAF88C46B0D945E7FB19710A34556E",
          "exponent": 0,
          "aliases": [
            "ibc/B089810D5A6316AD5E9C7808733DC4AB11C7BA3033221D28711FC7206BACB929"
          ]
        },
        {
          "denom": "ena",
          "exponent": 18
        }
      ],
      "typeAsset": "ics20",
      "base": "ibc/863207F01ABD3034C3E64C3D20559A42FCDAF88C46B0D945E7FB19710A34556E",
      "name": "Ethena",
      "display": "ena",
      "symbol": "ENA",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channelId": "channel-52",
            "baseDenom": "ibc/B089810D5A6316AD5E9C7808733DC4AB11C7BA3033221D28711FC7206BACB929",
            "chainName": "composable"
          },
          "chain": {
            "channelId": "channel-2"
          }
        }
      ],
      "images": [
        {
          "imageSync": {
            "chainName": "ethereum",
            "baseDenom": "0x57e114b691db790c35207b2e685d4a43181e6061"
          },
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/ena.png",
          "theme": {
            "primaryColorHex": "#1c1c1c"
          }
        }
      ]
    },
    {
      "description": "Ethena USDe is a synthetic dollar protocol built on Ethereum.",
      "denomUnits": [
        {
          "denom": "ibc/C1CFB4162DCAED35A3649ABB9BA0FC7A5BD76F77D7331256C2F6972FE3660CFD",
          "exponent": 0,
          "aliases": [
            "ibc/FFD9EB71B4480ED4D73F7370A2AEBDB48447A0AAE27265F8060A957F0FF71983"
          ]
        },
        {
          "denom": "usde",
          "exponent": 18
        }
      ],
      "typeAsset": "ics20",
      "base": "ibc/C1CFB4162DCAED35A3649ABB9BA0FC7A5BD76F77D7331256C2F6972FE3660CFD",
      "name": "Ethena USDe",
      "display": "usde",
      "symbol": "USDe",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channelId": "channel-52",
            "baseDenom": "ibc/FFD9EB71B4480ED4D73F7370A2AEBDB48447A0AAE27265F8060A957F0FF71983",
            "chainName": "composable"
          },
          "chain": {
            "channelId": "channel-2"
          }
        }
      ],
      "images": [
        {
          "imageSync": {
            "chainName": "ethereum",
            "baseDenom": "0x4c9edd5852cd905f086c759e8383e09bff1e68b3"
          },
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usde.png",
          "theme": {
            "primaryColorHex": "#040404"
          }
        }
      ]
    },
    {
      "description": "A Liquid Restaking Token (LRT) and Strategy Manager for EigenLayer.",
      "denomUnits": [
        {
          "denom": "ibc/08FEE043902DFD0376814CF46D49B49534F8F0095B8CA9B19E8CA8066A00B179",
          "exponent": 0,
          "aliases": [
            "ibc/E317539F148285AAC77E7614101CBE94E20EDF169B233A5E0C867112972F9041"
          ]
        },
        {
          "denom": "ezeth",
          "exponent": 18
        }
      ],
      "typeAsset": "ics20",
      "base": "ibc/08FEE043902DFD0376814CF46D49B49534F8F0095B8CA9B19E8CA8066A00B179",
      "name": "Renzo Restaked ETH",
      "display": "ezeth",
      "symbol": "ezETH",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channelId": "channel-52",
            "baseDenom": "ibc/E317539F148285AAC77E7614101CBE94E20EDF169B233A5E0C867112972F9041",
            "chainName": "composable"
          },
          "chain": {
            "channelId": "channel-2"
          }
        }
      ],
      "images": [
        {
          "imageSync": {
            "chainName": "ethereum",
            "baseDenom": "0xbf5495efe5db9ce00f80364c8b423567e58d2110"
          },
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/ezeth.png",
          "theme": {
            "primaryColorHex": "#9bcf2c"
          }
        }
      ]
    },
    {
      "description": "PEPE is a deflationary memecoin launched on Ethereum. ",
      "denomUnits": [
        {
          "denom": "ibc/7BB7D6F99D3C7FE7E11F0A11D2B0E786116F499668CA0CC82D249729A75E648A",
          "exponent": 0,
          "aliases": [
            "ibc/6367C5AF2E2477FB13DD0C8CB0027FEDDF5AE947EE84C69FB75003E604E29D05"
          ]
        },
        {
          "denom": "pepe",
          "exponent": 18
        }
      ],
      "typeAsset": "ics20",
      "base": "ibc/7BB7D6F99D3C7FE7E11F0A11D2B0E786116F499668CA0CC82D249729A75E648A",
      "name": "Pepe",
      "display": "pepe",
      "symbol": "PEPE",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channelId": "channel-52",
            "baseDenom": "ibc/6367C5AF2E2477FB13DD0C8CB0027FEDDF5AE947EE84C69FB75003E604E29D05",
            "chainName": "composable"
          },
          "chain": {
            "channelId": "channel-2"
          }
        }
      ],
      "images": [
        {
          "imageSync": {
            "chainName": "ethereum",
            "baseDenom": "0x6982508145454Ce325dDbE47a25d4ec3d2311933"
          },
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/pepe.svg",
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/pepe.png",
          "theme": {
            "primaryColorHex": "#cc3233"
          }
        }
      ]
    },
    {
      "description": "SOL is the native cryptocurrency of the Solana blockchain.",
      "denomUnits": [
        {
          "denom": "ibc/5C221B8E9A916D59FE6362AEF99780B893F8D20A5487C5BF6C927BEFA7CC35D9",
          "exponent": 0,
          "aliases": [
            "ibc/2CC39C8141F257EBBA250F65B9D0F31DC8D153C225E51EC192DE6E3F65D43F0C"
          ]
        },
        {
          "denom": "wsol",
          "exponent": 9
        }
      ],
      "typeAsset": "ics20",
      "base": "ibc/5C221B8E9A916D59FE6362AEF99780B893F8D20A5487C5BF6C927BEFA7CC35D9",
      "name": "Wrapped Solana",
      "display": "wsol",
      "symbol": "wSOL",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channelId": "channel-52",
            "baseDenom": "ibc/2CC39C8141F257EBBA250F65B9D0F31DC8D153C225E51EC192DE6E3F65D43F0C",
            "chainName": "composable"
          },
          "chain": {
            "channelId": "channel-2"
          }
        }
      ],
      "images": [
        {
          "imageSync": {
            "chainName": "solana",
            "baseDenom": "So11111111111111111111111111111111111111112"
          },
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/sol_circle.svg",
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/sol_circle.png",
          "theme": {
            "circle": true,
            "backgroundColorHex": "#000000"
          }
        }
      ]
    },
    {
      "description": "mSOL represents staked SOL in the Marinade stake pool.",
      "denomUnits": [
        {
          "denom": "ibc/A3AF3D68CECE0EF2B1FA8B883CB0DE6FDBCA114F55B082AF7A50AF87FA6120B3",
          "exponent": 0,
          "aliases": [
            "ibc/C280CB39B97E7CD33A0BF149CFD392C2A3F95FF896AFF89CFF2FA181479BED8D"
          ]
        },
        {
          "denom": "msol",
          "exponent": 9
        }
      ],
      "typeAsset": "ics20",
      "base": "ibc/A3AF3D68CECE0EF2B1FA8B883CB0DE6FDBCA114F55B082AF7A50AF87FA6120B3",
      "name": "Marinade Staked SOL",
      "display": "msol",
      "symbol": "mSOL",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channelId": "channel-52",
            "baseDenom": "ibc/C280CB39B97E7CD33A0BF149CFD392C2A3F95FF896AFF89CFF2FA181479BED8D",
            "chainName": "composable"
          },
          "chain": {
            "channelId": "channel-2"
          }
        }
      ],
      "images": [
        {
          "imageSync": {
            "chainName": "solana",
            "baseDenom": "mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So"
          },
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/msol.png",
          "theme": {
            "primaryColorHex": "#cbebe3"
          }
        }
      ]
    },
    {
      "description": "A representative token for staked SOL, derived through the process of liquid staking SOL using Jito.",
      "denomUnits": [
        {
          "denom": "ibc/E33AF85D4A1810EAF9E2DB61D6036B69D74D22E7B2C4D2487E40886BD746F543",
          "exponent": 0,
          "aliases": [
            "ibc/91A2FE07F8BDFC0552B1C9972FCCBF2CFD067DDE5F496D81E5132CE57762B0F2"
          ]
        },
        {
          "denom": "jitosol",
          "exponent": 9
        }
      ],
      "typeAsset": "ics20",
      "base": "ibc/E33AF85D4A1810EAF9E2DB61D6036B69D74D22E7B2C4D2487E40886BD746F543",
      "name": "Jito Staked SOL",
      "display": "jitosol",
      "symbol": "jitoSOL",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channelId": "channel-52",
            "baseDenom": "ibc/91A2FE07F8BDFC0552B1C9972FCCBF2CFD067DDE5F496D81E5132CE57762B0F2",
            "chainName": "composable"
          },
          "chain": {
            "channelId": "channel-2"
          }
        }
      ],
      "images": [
        {
          "imageSync": {
            "chainName": "solana",
            "baseDenom": "J1toso1uCk3RLmjorhTtrVwY9HJ7X8V9yYac6Y7kGCPn"
          },
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/jitosol.png",
          "theme": {
            "primaryColorHex": "#5bb384"
          }
        }
      ]
    },
    {
      "description": "A representative token for staked SOL, derived through the process of liquid staking SOL using the BlazeStake protocol.",
      "denomUnits": [
        {
          "denom": "ibc/227192D63636D9F1C0C0B2DB23177DBEF8AC1189511327FEC01EFD07C81FDA8A",
          "exponent": 0,
          "aliases": [
            "ibc/F52A71607B3AA7BBA8A222A9176E9939E92AB3656A094289CD218907D45DB716"
          ]
        },
        {
          "denom": "bsol",
          "exponent": 9
        }
      ],
      "typeAsset": "ics20",
      "base": "ibc/227192D63636D9F1C0C0B2DB23177DBEF8AC1189511327FEC01EFD07C81FDA8A",
      "name": "BlazeStake Staked SOL",
      "display": "bsol",
      "symbol": "bSOL",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channelId": "channel-52",
            "baseDenom": "ibc/F52A71607B3AA7BBA8A222A9176E9939E92AB3656A094289CD218907D45DB716",
            "chainName": "composable"
          },
          "chain": {
            "channelId": "channel-2"
          }
        }
      ],
      "images": [
        {
          "imageSync": {
            "chainName": "solana",
            "baseDenom": "bSo13r4TkiE4KumL71LsHTPpL2euBYLFx6h9HP3piy1"
          },
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/bsol.png",
          "theme": {
            "primaryColorHex": "#21c3cc"
          }
        }
      ]
    },
    {
      "description": "A representative token for staked SOL, derived through the process of liquid staking SOL using the MarginFi protocol.",
      "denomUnits": [
        {
          "denom": "ibc/7862B4B9333C12FF335914250260F69121CAF600E9A274F38AB345068BF9FB41",
          "exponent": 0,
          "aliases": [
            "ibc/55F5B582483FEFA5422794292B079B4D49A5BAB9881E7C801F9F271F1D234F1D"
          ]
        },
        {
          "denom": "lst",
          "exponent": 9
        }
      ],
      "typeAsset": "ics20",
      "base": "ibc/7862B4B9333C12FF335914250260F69121CAF600E9A274F38AB345068BF9FB41",
      "name": "Liquid Staking Token",
      "display": "lst",
      "symbol": "LST",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channelId": "channel-52",
            "baseDenom": "ibc/55F5B582483FEFA5422794292B079B4D49A5BAB9881E7C801F9F271F1D234F1D",
            "chainName": "composable"
          },
          "chain": {
            "channelId": "channel-2"
          }
        }
      ],
      "images": [
        {
          "imageSync": {
            "chainName": "solana",
            "baseDenom": "mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So"
          },
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/msol.png",
          "theme": {
            "primaryColorHex": "#cbebe3"
          }
        }
      ]
    },
    {
      "description": "A representative token for staked SOL, derived through the process of liquid staking SOL using the Edgevana protocol.",
      "denomUnits": [
        {
          "denom": "ibc/83024C5EE553BC98DEE40EEC9B584ED236855310BBEE2EDB4D8AA2EBE099BEFD",
          "exponent": 0,
          "aliases": [
            "ibc/BADB5950C4A81AC201696EBCB33CD295137FA86F0AA620CDDE946D3700E0208C"
          ]
        },
        {
          "denom": "edgesol",
          "exponent": 9
        }
      ],
      "typeAsset": "ics20",
      "base": "ibc/83024C5EE553BC98DEE40EEC9B584ED236855310BBEE2EDB4D8AA2EBE099BEFD",
      "name": "Edgevana Staked SOL",
      "display": "edgesol",
      "symbol": "edgeSOL",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channelId": "channel-52",
            "baseDenom": "ibc/BADB5950C4A81AC201696EBCB33CD295137FA86F0AA620CDDE946D3700E0208C",
            "chainName": "composable"
          },
          "chain": {
            "channelId": "channel-2"
          }
        }
      ],
      "images": [
        {
          "imageSync": {
            "chainName": "solana",
            "baseDenom": "edge86g9cVz87xcpKpy3J77vbp4wYd9idEV562CCntt"
          },
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/edgesol.png",
          "theme": {
            "primaryColorHex": "#146cfc"
          }
        }
      ]
    },
    {
      "description": "A liquid staked token that represents SOL staked to Helius's validator.",
      "denomUnits": [
        {
          "denom": "ibc/B65E52BE420295EFD6D295BE581BD375991A2882DC75FE5664079A953D589369",
          "exponent": 0,
          "aliases": [
            "ibc/531C52D572698BCBA29F44D959E73CD2148EE6542A3118F9E56621A28E1FF4C6"
          ]
        },
        {
          "denom": "hsol",
          "exponent": 9
        }
      ],
      "typeAsset": "ics20",
      "base": "ibc/B65E52BE420295EFD6D295BE581BD375991A2882DC75FE5664079A953D589369",
      "name": "Helius Staked SOL",
      "display": "hsol",
      "symbol": "hSOL",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channelId": "channel-52",
            "baseDenom": "ibc/531C52D572698BCBA29F44D959E73CD2148EE6542A3118F9E56621A28E1FF4C6",
            "chainName": "composable"
          },
          "chain": {
            "channelId": "channel-2"
          }
        }
      ],
      "images": [
        {
          "imageSync": {
            "chainName": "solana",
            "baseDenom": "he1iusmfkpAdwvxLNGV8Y1iSbj4rUy6yMhEA3fotn9A"
          },
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/hsol.png",
          "theme": {
            "primaryColorHex": "#e5502a"
          }
        }
      ]
    },
    {
      "description": "A liquid staked token that represents SOL staked to Jupiter's validator.",
      "denomUnits": [
        {
          "denom": "ibc/AB9605478D5368FE8DD651D1B88149BEF78466EC243EC66BEC877821E400E9B8",
          "exponent": 0,
          "aliases": [
            "ibc/6976998E24F1CFC373A9F799C9CE901F5EC32C3E33B2B09384A05774D9339626"
          ]
        },
        {
          "denom": "jupsol",
          "exponent": 9
        }
      ],
      "typeAsset": "ics20",
      "base": "ibc/AB9605478D5368FE8DD651D1B88149BEF78466EC243EC66BEC877821E400E9B8",
      "name": "Jupiter Staked SOL",
      "display": "jupsol",
      "symbol": "jupSOL",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channelId": "channel-52",
            "baseDenom": "ibc/6976998E24F1CFC373A9F799C9CE901F5EC32C3E33B2B09384A05774D9339626",
            "chainName": "composable"
          },
          "chain": {
            "channelId": "channel-2"
          }
        }
      ],
      "images": [
        {
          "imageSync": {
            "chainName": "solana",
            "baseDenom": "jupSoLaHXQiZZTSfEWMTRRgpnyFm8f6sZdosWBjx93v"
          },
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/jupsol.png",
          "theme": {
            "primaryColorHex": "#85d79e"
          }
        }
      ]
    },
    {
      "description": "dogwifhat is a meme coin that operates on Solana.",
      "denomUnits": [
        {
          "denom": "ibc/EB63A9FB526E486C23BCFA8E682058D140433A8FFE4AB153FBAB9D80E2B12D58",
          "exponent": 0,
          "aliases": [
            "ibc/BA34EAA22BBDA46C228DC70E4ED7E42A0867D5B051D625F953CC7B1CEF58C071"
          ]
        },
        {
          "denom": "wif",
          "exponent": 6
        }
      ],
      "typeAsset": "ics20",
      "base": "ibc/EB63A9FB526E486C23BCFA8E682058D140433A8FFE4AB153FBAB9D80E2B12D58",
      "name": "dogwifhat",
      "display": "wif",
      "symbol": "WIF",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channelId": "channel-52",
            "baseDenom": "ibc/BA34EAA22BBDA46C228DC70E4ED7E42A0867D5B051D625F953CC7B1CEF58C071",
            "chainName": "composable"
          },
          "chain": {
            "channelId": "channel-2"
          }
        }
      ],
      "images": [
        {
          "imageSync": {
            "chainName": "solana",
            "baseDenom": "EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLHYxdM65zcjm"
          },
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/wif.png",
          "theme": {
            "primaryColorHex": "#a29482"
          }
        }
      ]
    },
    {
      "description": "Tether, issued natively on Solana.",
      "denomUnits": [
        {
          "denom": "ibc/C40C5CFE3571DBF5D1858EAA707E64338DB03F88A02634CA1AD2B99CD25E4D7B",
          "exponent": 0,
          "aliases": [
            "ibc/D105950618E47CA2AEC314282BC401625025F80A4F812808DEEBB1941C685575"
          ]
        },
        {
          "denom": "usdt",
          "exponent": 6
        }
      ],
      "typeAsset": "ics20",
      "base": "ibc/C40C5CFE3571DBF5D1858EAA707E64338DB03F88A02634CA1AD2B99CD25E4D7B",
      "name": "Tether",
      "display": "usdt",
      "symbol": "USDT",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channelId": "channel-52",
            "baseDenom": "ibc/D105950618E47CA2AEC314282BC401625025F80A4F812808DEEBB1941C685575",
            "chainName": "composable"
          },
          "chain": {
            "channelId": "channel-2"
          }
        }
      ],
      "images": [
        {
          "imageSync": {
            "chainName": "solana",
            "baseDenom": "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB"
          },
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg",
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.png",
          "theme": {
            "circle": true,
            "primaryColorHex": "#009393",
            "backgroundColorHex": "#009393"
          }
        }
      ]
    },
    {
      "description": "Whinecoin is an experimental memecoin by the Sommelier Finance team.",
      "denomUnits": [
        {
          "denom": "ibc/01AB3B205A1C52A463C310268C196E82AD66E7B6F1C327A91CE95144BADAC187",
          "exponent": 0,
          "aliases": [
            "ibc/9D5DA3720001F91DD76B8F609A93F96688EC8185B54BF9A1A1450EB34FF2D912"
          ]
        },
        {
          "denom": "whine",
          "exponent": 6
        }
      ],
      "typeAsset": "ics20",
      "base": "ibc/01AB3B205A1C52A463C310268C196E82AD66E7B6F1C327A91CE95144BADAC187",
      "name": "WHINEcoin",
      "display": "whine",
      "symbol": "WHINE",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channelId": "channel-52",
            "baseDenom": "ibc/9D5DA3720001F91DD76B8F609A93F96688EC8185B54BF9A1A1450EB34FF2D912",
            "chainName": "composable"
          },
          "chain": {
            "channelId": "channel-2"
          }
        }
      ],
      "images": [
        {
          "imageSync": {
            "chainName": "solana",
            "baseDenom": "ATeTQcUkWGs7AZ15mCiFUWCW9EUL7KpDZEHCN1Y8pump"
          },
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/whine.png",
          "theme": {
            "primaryColorHex": "#FFFFFF",
            "backgroundColorHex": "#FFFFFF",
            "circle": false
          }
        }
      ]
    },
    {
      "description": "Unicorn from Solana via Picasso IBC",
      "denomUnits": [
        {
          "denom": "ibc/92AFD5629758490C7FE48137F8C427714CB8CC2D2667E3B8EDC3E1F21CC2E687",
          "exponent": 0,
          "aliases": [
            "ibc/586C150919550F6106711C7557DAAAEAB765DDF05648BAC0D96487AE90394BA1"
          ]
        },
        {
          "denom": "unicorn",
          "exponent": 6
        }
      ],
      "typeAsset": "ics20",
      "base": "ibc/92AFD5629758490C7FE48137F8C427714CB8CC2D2667E3B8EDC3E1F21CC2E687",
      "name": "Unicorn",
      "display": "unicorn",
      "symbol": "UWU",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channelId": "channel-52",
            "baseDenom": "ibc/586C150919550F6106711C7557DAAAEAB765DDF05648BAC0D96487AE90394BA1",
            "chainName": "composable"
          },
          "chain": {
            "channelId": "channel-2"
          }
        }
      ],
      "images": [
        {
          "imageSync": {
            "chainName": "unicorn",
            "baseDenom": "uwunicorn"
          },
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/unicorn/images/uwu.png",
          "theme": {
            "primaryColorHex": "#D44CE6"
          }
        }
      ]
    },
    {
      "description": "Picasso is a blockchain project within the IBC ecosystem that focuses on providing modular and interoperable solutions for decentralized finance (DeFi) and other blockchain applications.",
      "extendedDescription": "Picasso is part of the IBC network and aims to offer modular, interoperable solutions tailored for DeFi and other blockchain applications. Picasso enables IBC-based bridging between Cosmos, Solana, Ethereum, and Polkadot. Picasso's commitment to innovation and interoperability makes it a significant player in the evolving blockchain landscape, providing tools and infrastructure that cater to diverse blockchain use cases.",
      "denomUnits": [
        {
          "denom": "ibc/6517CF990493C8F3D6AE1E03FA1B5167B1E40345061104F07296D883379B4A08",
          "exponent": 0,
          "aliases": [
            "ppica"
          ]
        },
        {
          "denom": "pica",
          "exponent": 12
        }
      ],
      "base": "ibc/6517CF990493C8F3D6AE1E03FA1B5167B1E40345061104F07296D883379B4A08",
      "name": "Pica",
      "display": "pica",
      "symbol": "PICA",
      "coingeckoId": "picasso",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channelId": "channel-52",
            "baseDenom": "ppica",
            "chainName": "composable"
          },
          "chain": {
            "channelId": "channel-2"
          }
        }
      ],
      "images": [
        {
          "imageSync": {
            "chainName": "picasso",
            "baseDenom": "ppica"
          },
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/composable/images/pica.svg"
        }
      ],
      "logoURIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/composable/images/pica.svg"
      },
      "socials": {
        "website": "https://picasso.network/",
        "twitter": "https://twitter.com/picasso_network"
      },
      "typeAsset": "sdk.coin"
    },
    {
      "description": "The native staking and governance token of Kusama Relay Chain.",
      "denomUnits": [
        {
          "denom": "ibc/50B4539D139DB6EAB7C6E82AC25F9E6EFBB50CB72093F58225A90043427D1EEA",
          "exponent": 0,
          "aliases": [
            "ibc/EE9046745AEC0E8302CB7ED9D5AD67F528FB3B7AE044B247FB0FB293DBDA35E9"
          ]
        },
        {
          "denom": "ksm",
          "exponent": 12
        }
      ],
      "typeAsset": "ics20",
      "base": "ibc/50B4539D139DB6EAB7C6E82AC25F9E6EFBB50CB72093F58225A90043427D1EEA",
      "name": "KSM",
      "display": "ksm",
      "symbol": "KSM",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channelId": "channel-52",
            "baseDenom": "ibc/EE9046745AEC0E8302CB7ED9D5AD67F528FB3B7AE044B247FB0FB293DBDA35E9",
            "chainName": "composable"
          },
          "chain": {
            "channelId": "channel-2"
          }
        }
      ],
      "images": [
        {
          "imageSync": {
            "chainName": "picasso",
            "baseDenom": "4"
          },
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/kusama/images/ksm.svg"
        }
      ],
      "logoURIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/kusama/images/ksm.svg"
      }
    },
    {
      "description": "The native staking and governance token of Polkadot Relay Chain.",
      "denomUnits": [
        {
          "denom": "ibc/2BD2C021C7F5443562734B277ADBE0177EF7F6B20BC00D0505079D784B9A0C98",
          "exponent": 0,
          "aliases": [
            "ibc/3CC19CEC7E5A3E90E78A5A9ECC5A0E2F8F826A375CF1E096F4515CF09DA3E366"
          ]
        },
        {
          "denom": "dot",
          "exponent": 10
        }
      ],
      "typeAsset": "ics20",
      "base": "ibc/2BD2C021C7F5443562734B277ADBE0177EF7F6B20BC00D0505079D784B9A0C98",
      "name": "DOT",
      "display": "dot",
      "symbol": "DOT",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channelId": "channel-52",
            "baseDenom": "ibc/3CC19CEC7E5A3E90E78A5A9ECC5A0E2F8F826A375CF1E096F4515CF09DA3E366",
            "chainName": "composable"
          },
          "chain": {
            "channelId": "channel-2"
          }
        }
      ],
      "images": [
        {
          "imageSync": {
            "chainName": "picasso",
            "baseDenom": "79228162514264337593543950342"
          },
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polkadot/images/dot.svg",
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polkadot/images/dot.png",
          "theme": {
            "primaryColorHex": "#e4047c"
          }
        }
      ],
      "logoURIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polkadot/images/dot.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/polkadot/images/dot.svg"
      }
    },
    {
      "description": "USDT issued by the Kusama Asset Hub.",
      "denomUnits": [
        {
          "denom": "ibc/380D20B31D216A36B5153FE212BFF378DB1422B8A837521B0A145DBE1D4E634B",
          "exponent": 0,
          "aliases": [
            "ibc/F3EC9F834E57DF704FA3AEAF14E8391C2E58397FE56960AD70E67562990D8265"
          ]
        },
        {
          "denom": "usdt",
          "exponent": 6
        }
      ],
      "typeAsset": "ics20",
      "base": "ibc/380D20B31D216A36B5153FE212BFF378DB1422B8A837521B0A145DBE1D4E634B",
      "name": "USDT",
      "display": "usdt",
      "symbol": "USDT",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channelId": "channel-52",
            "baseDenom": "ibc/F3EC9F834E57DF704FA3AEAF14E8391C2E58397FE56960AD70E67562990D8265",
            "chainName": "composable"
          },
          "chain": {
            "channelId": "channel-2"
          }
        }
      ],
      "images": [
        {
          "imageSync": {
            "chainName": "picasso",
            "baseDenom": "130"
          }
        }
      ]
    },
    {
      "description": "The native fee, staking and governance token of the Tinkernet Parachain.",
      "denomUnits": [
        {
          "denom": "ibc/3DE46D1124A42C747DD3C76DF7C78C5AD3B4FABD9A2A765F18DB89E36B40B63E",
          "exponent": 0,
          "aliases": [
            "ibc/C58E5D2571042137CB68B1B9851C4E7211C05F7C2C79E21E0966AF0F063961F8"
          ]
        },
        {
          "denom": "tnkr",
          "exponent": 12
        }
      ],
      "typeAsset": "ics20",
      "base": "ibc/3DE46D1124A42C747DD3C76DF7C78C5AD3B4FABD9A2A765F18DB89E36B40B63E",
      "name": "TNKR",
      "display": "tnkr",
      "symbol": "TNKR",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channelId": "channel-52",
            "baseDenom": "ibc/C58E5D2571042137CB68B1B9851C4E7211C05F7C2C79E21E0966AF0F063961F8",
            "chainName": "composable"
          },
          "chain": {
            "channelId": "channel-2"
          }
        }
      ],
      "images": [
        {
          "imageSync": {
            "chainName": "picasso",
            "baseDenom": "2125"
          },
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/tinkernet/images/tnkr.svg"
        }
      ],
      "logoURIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/tinkernet/images/tnkr.svg"
      }
    },
    {
      "description": "The native token of Ethereum, bridged via IBC.",
      "extendedDescription": "Ether is the native token of the Ethereum blockchain. It powers a wide range of decentralized applications and smart contracts on the platform. This specific version has been bridged through Picasso's implementation of IBC on Ethereum.",
      "denomUnits": [
        {
          "denom": "ibc/9BBA517771C23A701815F169F27A6D31647C3371E54848D0A28FE52CDFA136C6",
          "exponent": 0,
          "aliases": [
            "ibc/F9D075D4079FC56A9C49B601E54A45292C319D8B0E8CC0F8439041130AA7166C"
          ]
        },
        {
          "denom": "eth",
          "exponent": 18
        }
      ],
      "typeAsset": "ics20",
      "base": "ibc/9BBA517771C23A701815F169F27A6D31647C3371E54848D0A28FE52CDFA136C6",
      "name": "Ethereum",
      "display": "eth",
      "symbol": "ETH",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channelId": "channel-52",
            "baseDenom": "ibc/F9D075D4079FC56A9C49B601E54A45292C319D8B0E8CC0F8439041130AA7166C",
            "chainName": "composable"
          },
          "chain": {
            "channelId": "channel-2"
          }
        }
      ],
      "logoURIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.svg"
      },
      "images": [
        {
          "imageSync": {
            "chainName": "ethereum",
            "baseDenom": "wei"
          },
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.svg",
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eth-white.png",
          "theme": {
            "primaryColorHex": "#303030"
          }
        }
      ],
      "socials": {
        "website": "https://ethereum.org/",
        "twitter": "https://twitter.com/ethereum"
      }
    },
    {
      "description": "A stablecoin issued by Maker Protocol.",
      "extendedDescription": "DAI, a stablecoin issued by the Maker Protocol, maintains a value pegged to the US dollar. This specific version has been bridged through Picasso's implementation of IBC on Ethereum.",
      "denomUnits": [
        {
          "denom": "ibc/039F6FAF93197A3B868319B5B03362DD75A8C5BE2125B84F5C4402BCEAD6F341",
          "exponent": 0,
          "aliases": [
            "ibc/A342F6F8D1CDE1D934C50E8EAFF91E813D971E1BFEED7E557F1674E01004A533"
          ]
        },
        {
          "denom": "dai",
          "exponent": 18
        }
      ],
      "typeAsset": "ics20",
      "base": "ibc/039F6FAF93197A3B868319B5B03362DD75A8C5BE2125B84F5C4402BCEAD6F341",
      "name": "Dai",
      "display": "dai",
      "symbol": "DAI",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channelId": "channel-52",
            "baseDenom": "ibc/A342F6F8D1CDE1D934C50E8EAFF91E813D971E1BFEED7E557F1674E01004A533",
            "chainName": "composable"
          },
          "chain": {
            "channelId": "channel-2"
          }
        }
      ],
      "logoURIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/dai.svg"
      },
      "images": [
        {
          "imageSync": {
            "chainName": "ethereum",
            "baseDenom": "0x6b175474e89094c44da98b954eedeac495271d0f"
          },
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/dai.svg"
        }
      ],
      "socials": {
        "website": "https://makerdao.com/",
        "twitter": "https://twitter.com/MakerDAO"
      }
    },
    {
      "description": "The governance token of the Frax ecosystem.",
      "extendedDescription": "Frax Shares is the governance and utility token of the Frax Protocol. It plays a crucial role in maintaining the stability of the FRAX stablecoin. Holders of FXS can participate in governance decisions and benefit from the protocol's growth and revenue, as the token captures fees.",
      "denomUnits": [
        {
          "denom": "ibc/761FE4CCAA9E08D2A4B0F872D7030604A6419196BAF16A74C5E3E5A029479DC0",
          "exponent": 0,
          "aliases": [
            "ibc/5F9BE030FC355733EC79307409FA98398BBFC747C9430B326C144A74F6808B29"
          ]
        },
        {
          "denom": "fxs",
          "exponent": 18
        }
      ],
      "typeAsset": "ics20",
      "base": "ibc/761FE4CCAA9E08D2A4B0F872D7030604A6419196BAF16A74C5E3E5A029479DC0",
      "name": "Frax Shares",
      "display": "fxs",
      "symbol": "FXS",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channelId": "channel-52",
            "baseDenom": "ibc/5F9BE030FC355733EC79307409FA98398BBFC747C9430B326C144A74F6808B29",
            "chainName": "composable"
          },
          "chain": {
            "channelId": "channel-2"
          }
        }
      ],
      "logoURIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/fxs.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/fxs.svg"
      },
      "images": [
        {
          "imageSync": {
            "chainName": "ethereum",
            "baseDenom": "0x3432b6a60d23ca0dfca7761b7ab56459d9c964d0"
          },
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/fxs.svg",
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/fxs.png",
          "theme": {
            "primaryColorHex": "#040404"
          }
        }
      ],
      "socials": {
        "website": "https://www.frax.com/",
        "twitter": "https://twitter.com/fraxfinance"
      }
    },
    {
      "description": "The first fractional-algorithmic stablecoin by Frax Finance.",
      "extendedDescription": "FRAX is a stablecoin designed to maintain a stable value to a peg of the US dollar. It is issued by the Frax Protocol, which employs a hybrid approach combining algorithmic mechanisms with collateral backing.",
      "denomUnits": [
        {
          "denom": "ibc/376C2DF35FD8F84EFE82ECA44F37E7BBCA987D2FF12DF84AB6861AC7131420A6",
          "exponent": 0,
          "aliases": [
            "ibc/4F20D68B51ED559F99C3CD658383E91F45486D884BF546E7B25337A058562CDB"
          ]
        },
        {
          "denom": "frax",
          "exponent": 18
        }
      ],
      "typeAsset": "ics20",
      "base": "ibc/376C2DF35FD8F84EFE82ECA44F37E7BBCA987D2FF12DF84AB6861AC7131420A6",
      "name": "Frax",
      "display": "frax",
      "symbol": "FRAX",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channelId": "channel-52",
            "baseDenom": "ibc/4F20D68B51ED559F99C3CD658383E91F45486D884BF546E7B25337A058562CDB",
            "chainName": "composable"
          },
          "chain": {
            "channelId": "channel-2"
          }
        }
      ],
      "logoURIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/frax.svg"
      },
      "images": [
        {
          "imageSync": {
            "chainName": "ethereum",
            "baseDenom": "0x853d955acef822db058eb8505911ed77f175b99e"
          },
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/frax.svg"
        }
      ],
      "socials": {
        "website": "https://www.frax.com/",
        "twitter": "https://twitter.com/fraxfinance"
      }
    },
    {
      "description": "A liquid ETH staking derivative designed to leverage the Frax ecosystem.",
      "extendedDescription": "FrxETH is a stablecoin that is loosely pegged to ETH, meaning that 1 frxETH always represents 1 ETH.",
      "denomUnits": [
        {
          "denom": "ibc/4C170C20CA2B771D8D418C1E0DA04BA1FE36D65EF5F4714042B9EBCB60600A10",
          "exponent": 0,
          "aliases": [
            "ibc/458032E654E41DB91EF98F13E2CE4F9E0FE86BA3E0CDBEC074A854E9F5229A90"
          ]
        },
        {
          "denom": "frxeth",
          "exponent": 18
        }
      ],
      "typeAsset": "ics20",
      "base": "ibc/4C170C20CA2B771D8D418C1E0DA04BA1FE36D65EF5F4714042B9EBCB60600A10",
      "name": "Frax Ether",
      "display": "frxeth",
      "symbol": "frxETH",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channelId": "channel-52",
            "baseDenom": "ibc/458032E654E41DB91EF98F13E2CE4F9E0FE86BA3E0CDBEC074A854E9F5229A90",
            "chainName": "composable"
          },
          "chain": {
            "channelId": "channel-2"
          }
        }
      ],
      "logoURIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/frxeth.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/frxeth.svg"
      },
      "images": [
        {
          "imageSync": {
            "chainName": "ethereum",
            "baseDenom": "0x5e8422345238f34275888049021821e8e08caa1f"
          },
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/frxeth.svg",
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/frxeth.png",
          "theme": {
            "primaryColorHex": "#040404"
          }
        }
      ],
      "socials": {
        "website": "https://www.frax.com/",
        "twitter": "https://twitter.com/fraxfinance"
      }
    },
    {
      "description": "A Liquid Staking Derivative designed to accrue the staking yield of the Frax ETH validators.",
      "extendedDescription": "SFRXETH is a ERC-4626 vault designed to accrue the staking yield of the Frax ETH validators. It allows users to earn staking yield on their frxETH, a type of Frax Ether.",
      "denomUnits": [
        {
          "denom": "ibc/868D55C1A349627B3A8F65E24A54F756E094786A855FBD1EA2D9849303699977",
          "exponent": 0,
          "aliases": [
            "ibc/4E0ECE7819D77B0F2B49F5C34B5E594A02D2BA8B1B0F103208F847B53EBFB69A"
          ]
        },
        {
          "denom": "sfrxeth",
          "exponent": 18
        }
      ],
      "typeAsset": "ics20",
      "base": "ibc/868D55C1A349627B3A8F65E24A54F756E094786A855FBD1EA2D9849303699977",
      "name": "Frax Staked Ether",
      "display": "sfrxeth",
      "symbol": "sfrxETH",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channelId": "channel-52",
            "baseDenom": "ibc/4E0ECE7819D77B0F2B49F5C34B5E594A02D2BA8B1B0F103208F847B53EBFB69A",
            "chainName": "composable"
          },
          "chain": {
            "channelId": "channel-2"
          }
        }
      ],
      "logoURIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/sfrxeth.svg"
      },
      "images": [
        {
          "imageSync": {
            "chainName": "ethereum",
            "baseDenom": "0xac3e018457b222d93114458476f3e3416abbe38f"
          },
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/sfrxeth.svg"
        }
      ],
      "socials": {
        "website": "https://www.frax.com/",
        "twitter": "https://twitter.com/fraxfinance"
      }
    },
    {
      "description": "An ERC4626 staking vault that distributes part of the Frax Protocol yield weekly to stakers denominated in FRAX stablecoins. ",
      "extendedDescription": "Staked FRAX (sFRAX) is an ERC4626 staking vault that distributes part of the Frax Protocol yield weekly to stakers denominated in FRAX stablecoins. The sFRAX token represents pro rata deposits within the vault and is always withdrawable for FRAX stablecoins at the pro rata rate at all times.",
      "denomUnits": [
        {
          "denom": "ibc/510D600D735B7EA80D4E30CEF26DE1AD046FA5934C24E6241A6796892833B568",
          "exponent": 0,
          "aliases": [
            "ibc/5BD7F23FE150D9CF3BCC944DB829380BCC51A4022A131151C4D13B3AFAC2D1D9"
          ]
        },
        {
          "denom": "sfrax",
          "exponent": 18
        }
      ],
      "typeAsset": "ics20",
      "base": "ibc/510D600D735B7EA80D4E30CEF26DE1AD046FA5934C24E6241A6796892833B568",
      "name": "Staked FRAX",
      "display": "sfrax",
      "symbol": "sFRAX",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channelId": "channel-52",
            "baseDenom": "ibc/5BD7F23FE150D9CF3BCC944DB829380BCC51A4022A131151C4D13B3AFAC2D1D9",
            "chainName": "composable"
          },
          "chain": {
            "channelId": "channel-2"
          }
        }
      ],
      "logoURIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/sfrax.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/sfrax.svg"
      },
      "images": [
        {
          "imageSync": {
            "chainName": "ethereum",
            "baseDenom": "0xa663b02cf0a4b149d2ad41910cb81e23e1c41c32"
          },
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/sfrax.svg",
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/sfrax.png",
          "theme": {
            "primaryColorHex": "#040404"
          }
        }
      ],
      "socials": {
        "website": "https://www.frax.com/",
        "twitter": "https://twitter.com/fraxfinance"
      }
    },
    {
      "description": "A stablecoin issued by Tether that is pegged 1:1 to the USD.",
      "extendedDescription": "USDT, or Tether, is a widely used stablecoin pegged to the US dollar, designed to maintain a stable value and facilitate transactions. This specific version has been bridged through Picasso's implementation of IBC on Ethereum.",
      "denomUnits": [
        {
          "denom": "ibc/22C25F23DFDF6B950DFDD5468AE25D052684F76B4ADDE8895C55F9D9DAFADC63",
          "exponent": 0,
          "aliases": [
            "ibc/37CC704EA53E96AB09A9C31D79142DE7DB252420F3AB18015F9870AE219947BD"
          ]
        },
        {
          "denom": "usdt",
          "exponent": 6
        }
      ],
      "typeAsset": "ics20",
      "base": "ibc/22C25F23DFDF6B950DFDD5468AE25D052684F76B4ADDE8895C55F9D9DAFADC63",
      "name": "Tether (Ethereum)",
      "display": "usdt",
      "symbol": "USDT",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channelId": "channel-52",
            "baseDenom": "ibc/37CC704EA53E96AB09A9C31D79142DE7DB252420F3AB18015F9870AE219947BD",
            "chainName": "composable"
          },
          "chain": {
            "channelId": "channel-2"
          }
        }
      ],
      "logoURIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg"
      },
      "images": [
        {
          "imageSync": {
            "chainName": "ethereum",
            "baseDenom": "0xdac17f958d2ee523a2206206994597c13d831ec7"
          },
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg",
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.png",
          "theme": {
            "circle": true,
            "primaryColorHex": "#009393",
            "backgroundColorHex": "#009393"
          }
        }
      ],
      "socials": {
        "website": "https://www.tether.to/",
        "twitter": "https://twitter.com/Tether_to"
      }
    },
    {
      "description": "CRV is the governance token for Curve Finance.",
      "denomUnits": [
        {
          "denom": "ibc/9B4D2A37004A151CFE44F67A75EF419FB219E8B117A3F048738D6B034271AF81",
          "exponent": 0,
          "aliases": [
            "ibc/52C8C6197989684F891076F228F20CD1659AB6E1776E3B85E65CBBEC67DA5DED"
          ]
        },
        {
          "denom": "crv",
          "exponent": 18
        }
      ],
      "typeAsset": "ics20",
      "base": "ibc/9B4D2A37004A151CFE44F67A75EF419FB219E8B117A3F048738D6B034271AF81",
      "name": "Curve DAO",
      "display": "crv",
      "symbol": "CRV",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channelId": "channel-52",
            "baseDenom": "ibc/52C8C6197989684F891076F228F20CD1659AB6E1776E3B85E65CBBEC67DA5DED",
            "chainName": "composable"
          },
          "chain": {
            "channelId": "channel-2"
          }
        }
      ],
      "logoURIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/crv.png"
      },
      "images": [
        {
          "imageSync": {
            "chainName": "ethereum",
            "baseDenom": "0xd533a949740bb3306d119cc777fa900ba034cd52"
          },
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/crv.png",
          "theme": {
            "primaryColorHex": "#1fcbdb"
          }
        }
      ]
    },
    {
      "description": "An ERC-20 token issued Ethereum that represents Bitcoin.",
      "denomUnits": [
        {
          "denom": "ibc/9477C189ADC4EECCD77ADC446FE5B5E4E24BD54A6855520B8DEE28C07C66C0F4",
          "exponent": 0,
          "aliases": [
            "ibc/1507315B0C337368B85A7EC67C3956C508E1106EBD96336B1B092F7B2815B3E5"
          ]
        },
        {
          "denom": "wbtc",
          "exponent": 18
        }
      ],
      "typeAsset": "ics20",
      "base": "ibc/9477C189ADC4EECCD77ADC446FE5B5E4E24BD54A6855520B8DEE28C07C66C0F4",
      "name": "Wrapped Bitcoin",
      "display": "wbtc",
      "symbol": "wBTC",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channelId": "channel-52",
            "baseDenom": "ibc/1507315B0C337368B85A7EC67C3956C508E1106EBD96336B1B092F7B2815B3E5",
            "chainName": "composable"
          },
          "chain": {
            "channelId": "channel-2"
          }
        }
      ],
      "logoURIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wbtc.png",
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wbtc.svg"
      },
      "images": [
        {
          "imageSync": {
            "chainName": "ethereum",
            "baseDenom": "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599"
          },
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wbtc.svg",
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/wbtc.png",
          "theme": {
            "primaryColorHex": "#f39444"
          }
        }
      ]
    },
    {
      "description": "A token that represents staked ether in Lido.",
      "denomUnits": [
        {
          "denom": "ibc/B1EAAE842122813505F1EC7D371CC47DC3644CF7FF63BA61DD2FCB381A745305",
          "exponent": 0,
          "aliases": [
            "ibc/74F65FE91F672BC2524C039B3CD0211F6D370071209552533DF26D57743D5FFD"
          ]
        },
        {
          "denom": "steth",
          "exponent": 18
        }
      ],
      "typeAsset": "ics20",
      "base": "ibc/B1EAAE842122813505F1EC7D371CC47DC3644CF7FF63BA61DD2FCB381A745305",
      "name": "Lido Staked Ether",
      "display": "steth",
      "symbol": "stETH",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channelId": "channel-52",
            "baseDenom": "ibc/74F65FE91F672BC2524C039B3CD0211F6D370071209552533DF26D57743D5FFD",
            "chainName": "composable"
          },
          "chain": {
            "channelId": "channel-2"
          }
        }
      ],
      "logoURIs": {
        "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/steth.svg"
      },
      "images": [
        {
          "imageSync": {
            "chainName": "ethereum",
            "baseDenom": "0xae7ab96520de3a18e5e111b5eaab095312d7fe84"
          },
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/steth.svg"
        }
      ]
    },
    {
      "description": "Rocket Pool protocol's liquid staking token.",
      "denomUnits": [
        {
          "denom": "ibc/9689289CC4176E044ABBD7E19AC170FBA9F8B1144F68E37C2F11AFEF248B74F7",
          "exponent": 0,
          "aliases": [
            "ibc/207E7F34DFEBF714CED4900C1FD85BAF200230BF431EE8133EB26B98CB535EDC"
          ]
        },
        {
          "denom": "reth",
          "exponent": 18
        }
      ],
      "typeAsset": "ics20",
      "base": "ibc/9689289CC4176E044ABBD7E19AC170FBA9F8B1144F68E37C2F11AFEF248B74F7",
      "name": "Rocket Pool ETH",
      "display": "reth",
      "symbol": "rETH",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channelId": "channel-52",
            "baseDenom": "ibc/207E7F34DFEBF714CED4900C1FD85BAF200230BF431EE8133EB26B98CB535EDC",
            "chainName": "composable"
          },
          "chain": {
            "channelId": "channel-2"
          }
        }
      ],
      "logoURIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/reth.png"
      },
      "images": [
        {
          "imageSync": {
            "chainName": "ethereum",
            "baseDenom": "0xae78736cd615f374d3085123a210448e74fc6393"
          },
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/reth.png",
          "theme": {
            "primaryColorHex": "#fba487"
          }
        }
      ]
    },
    {
      "description": "A collateralized-debt-position (CDP) stablecoin by Curve DAO.",
      "denomUnits": [
        {
          "denom": "ibc/5D0B3F75709EABFB2639A9C91444D716095F4292B1BC54A5B9052CA07F141A18",
          "exponent": 0,
          "aliases": [
            "ibc/C9D79BE8E3E75CA2DFDC722C77D7B179C39A4802D59019C790A825FDE34B724A"
          ]
        },
        {
          "denom": "crvusd",
          "exponent": 18
        }
      ],
      "typeAsset": "ics20",
      "base": "ibc/5D0B3F75709EABFB2639A9C91444D716095F4292B1BC54A5B9052CA07F141A18",
      "name": "crvUSD",
      "display": "crvusd",
      "symbol": "crvUSD",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channelId": "channel-52",
            "baseDenom": "ibc/C9D79BE8E3E75CA2DFDC722C77D7B179C39A4802D59019C790A825FDE34B724A",
            "chainName": "composable"
          },
          "chain": {
            "channelId": "channel-2"
          }
        }
      ],
      "logoURIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/crvusd.png"
      },
      "images": [
        {
          "imageSync": {
            "chainName": "ethereum",
            "baseDenom": "0xf939e0a03fb07f59a73314e73794be0e57ac1b4e"
          },
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/crvusd.png",
          "theme": {
            "primaryColorHex": "#d6e3d9"
          }
        }
      ]
    },
    {
      "description": "pxETH is built on top of the Pirex platform and forms the foundation of the Dinero protocol.",
      "denomUnits": [
        {
          "denom": "ibc/98E4827D652C1B401675898AC00E81E6D964E7C274FE4C2E697C9BE32D3DB4B5",
          "exponent": 0,
          "aliases": [
            "ibc/36EF1EA47A09689C81D848B08E5240FA9FF13B17DB7DCF48B77D4D0D9B152821"
          ]
        },
        {
          "denom": "pxeth",
          "exponent": 18
        }
      ],
      "typeAsset": "ics20",
      "base": "ibc/98E4827D652C1B401675898AC00E81E6D964E7C274FE4C2E697C9BE32D3DB4B5",
      "name": "Dinero Staked ETH",
      "display": "pxeth",
      "symbol": "pxETH",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channelId": "channel-52",
            "baseDenom": "ibc/36EF1EA47A09689C81D848B08E5240FA9FF13B17DB7DCF48B77D4D0D9B152821",
            "chainName": "composable"
          },
          "chain": {
            "channelId": "channel-2"
          }
        }
      ],
      "logoURIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/pxeth.png"
      },
      "images": [
        {
          "imageSync": {
            "chainName": "ethereum",
            "baseDenom": "0x04c154b66cb340f3ae24111cc767e0184ed00cc6"
          },
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/pxeth.png",
          "theme": {
            "primaryColorHex": "#c3cbd2"
          }
        }
      ]
    },
    {
      "description": "eETH is a natively restaked liquid staking token on Ethereum.",
      "denomUnits": [
        {
          "denom": "ibc/0774D63A28FBF3BEE5BB428B9B17C7D856E2CAE432EFAB927011388740660FB6",
          "exponent": 0,
          "aliases": [
            "ibc/34C23BA6BAA2EAE0199D85AD1E2E214F76B0BFAD42BF75542D15F71264EEB05B"
          ]
        },
        {
          "denom": "eeth",
          "exponent": 18
        }
      ],
      "typeAsset": "ics20",
      "base": "ibc/0774D63A28FBF3BEE5BB428B9B17C7D856E2CAE432EFAB927011388740660FB6",
      "name": "ether.fi Staked ETH",
      "display": "eeth",
      "symbol": "eETH",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channelId": "channel-52",
            "baseDenom": "ibc/34C23BA6BAA2EAE0199D85AD1E2E214F76B0BFAD42BF75542D15F71264EEB05B",
            "chainName": "composable"
          },
          "chain": {
            "channelId": "channel-2"
          }
        }
      ],
      "logoURIs": {
        "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eeth.png"
      },
      "images": [
        {
          "imageSync": {
            "chainName": "ethereum",
            "baseDenom": "0x35fa164735182de50811e8e2e824cfb9b6118ac2"
          },
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/eeth.png",
          "theme": {
            "primaryColorHex": "#5045b7"
          }
        }
      ]
    },
    {
      "description": "The native governance token of Ethena.",
      "denomUnits": [
        {
          "denom": "ibc/863207F01ABD3034C3E64C3D20559A42FCDAF88C46B0D945E7FB19710A34556E",
          "exponent": 0,
          "aliases": [
            "ibc/B089810D5A6316AD5E9C7808733DC4AB11C7BA3033221D28711FC7206BACB929"
          ]
        },
        {
          "denom": "ena",
          "exponent": 18
        }
      ],
      "typeAsset": "ics20",
      "base": "ibc/863207F01ABD3034C3E64C3D20559A42FCDAF88C46B0D945E7FB19710A34556E",
      "name": "Ethena",
      "display": "ena",
      "symbol": "ENA",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channelId": "channel-52",
            "baseDenom": "ibc/B089810D5A6316AD5E9C7808733DC4AB11C7BA3033221D28711FC7206BACB929",
            "chainName": "composable"
          },
          "chain": {
            "channelId": "channel-2"
          }
        }
      ],
      "images": [
        {
          "imageSync": {
            "chainName": "ethereum",
            "baseDenom": "0x57e114b691db790c35207b2e685d4a43181e6061"
          },
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/ena.png",
          "theme": {
            "primaryColorHex": "#1c1c1c"
          }
        }
      ]
    },
    {
      "description": "Ethena USDe is a synthetic dollar protocol built on Ethereum.",
      "denomUnits": [
        {
          "denom": "ibc/C1CFB4162DCAED35A3649ABB9BA0FC7A5BD76F77D7331256C2F6972FE3660CFD",
          "exponent": 0,
          "aliases": [
            "ibc/FFD9EB71B4480ED4D73F7370A2AEBDB48447A0AAE27265F8060A957F0FF71983"
          ]
        },
        {
          "denom": "usde",
          "exponent": 18
        }
      ],
      "typeAsset": "ics20",
      "base": "ibc/C1CFB4162DCAED35A3649ABB9BA0FC7A5BD76F77D7331256C2F6972FE3660CFD",
      "name": "Ethena USDe",
      "display": "usde",
      "symbol": "USDe",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channelId": "channel-52",
            "baseDenom": "ibc/FFD9EB71B4480ED4D73F7370A2AEBDB48447A0AAE27265F8060A957F0FF71983",
            "chainName": "composable"
          },
          "chain": {
            "channelId": "channel-2"
          }
        }
      ],
      "images": [
        {
          "imageSync": {
            "chainName": "ethereum",
            "baseDenom": "0x4c9edd5852cd905f086c759e8383e09bff1e68b3"
          },
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usde.png",
          "theme": {
            "primaryColorHex": "#040404"
          }
        }
      ]
    },
    {
      "description": "A Liquid Restaking Token (LRT) and Strategy Manager for EigenLayer.",
      "denomUnits": [
        {
          "denom": "ibc/08FEE043902DFD0376814CF46D49B49534F8F0095B8CA9B19E8CA8066A00B179",
          "exponent": 0,
          "aliases": [
            "ibc/E317539F148285AAC77E7614101CBE94E20EDF169B233A5E0C867112972F9041"
          ]
        },
        {
          "denom": "ezeth",
          "exponent": 18
        }
      ],
      "typeAsset": "ics20",
      "base": "ibc/08FEE043902DFD0376814CF46D49B49534F8F0095B8CA9B19E8CA8066A00B179",
      "name": "Renzo Restaked ETH",
      "display": "ezeth",
      "symbol": "ezETH",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channelId": "channel-52",
            "baseDenom": "ibc/E317539F148285AAC77E7614101CBE94E20EDF169B233A5E0C867112972F9041",
            "chainName": "composable"
          },
          "chain": {
            "channelId": "channel-2"
          }
        }
      ],
      "images": [
        {
          "imageSync": {
            "chainName": "ethereum",
            "baseDenom": "0xbf5495efe5db9ce00f80364c8b423567e58d2110"
          },
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/ezeth.png",
          "theme": {
            "primaryColorHex": "#9bcf2c"
          }
        }
      ]
    },
    {
      "description": "PEPE is a deflationary memecoin launched on Ethereum. ",
      "denomUnits": [
        {
          "denom": "ibc/7BB7D6F99D3C7FE7E11F0A11D2B0E786116F499668CA0CC82D249729A75E648A",
          "exponent": 0,
          "aliases": [
            "ibc/6367C5AF2E2477FB13DD0C8CB0027FEDDF5AE947EE84C69FB75003E604E29D05"
          ]
        },
        {
          "denom": "pepe",
          "exponent": 18
        }
      ],
      "typeAsset": "ics20",
      "base": "ibc/7BB7D6F99D3C7FE7E11F0A11D2B0E786116F499668CA0CC82D249729A75E648A",
      "name": "Pepe",
      "display": "pepe",
      "symbol": "PEPE",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channelId": "channel-52",
            "baseDenom": "ibc/6367C5AF2E2477FB13DD0C8CB0027FEDDF5AE947EE84C69FB75003E604E29D05",
            "chainName": "composable"
          },
          "chain": {
            "channelId": "channel-2"
          }
        }
      ],
      "images": [
        {
          "imageSync": {
            "chainName": "ethereum",
            "baseDenom": "0x6982508145454Ce325dDbE47a25d4ec3d2311933"
          },
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/pepe.svg",
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/pepe.png",
          "theme": {
            "primaryColorHex": "#cc3233"
          }
        }
      ]
    },
    {
      "description": "SOL is the native cryptocurrency of the Solana blockchain.",
      "denomUnits": [
        {
          "denom": "ibc/5C221B8E9A916D59FE6362AEF99780B893F8D20A5487C5BF6C927BEFA7CC35D9",
          "exponent": 0,
          "aliases": [
            "ibc/2CC39C8141F257EBBA250F65B9D0F31DC8D153C225E51EC192DE6E3F65D43F0C"
          ]
        },
        {
          "denom": "wsol",
          "exponent": 9
        }
      ],
      "typeAsset": "ics20",
      "base": "ibc/5C221B8E9A916D59FE6362AEF99780B893F8D20A5487C5BF6C927BEFA7CC35D9",
      "name": "Wrapped Solana",
      "display": "wsol",
      "symbol": "wSOL",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channelId": "channel-52",
            "baseDenom": "ibc/2CC39C8141F257EBBA250F65B9D0F31DC8D153C225E51EC192DE6E3F65D43F0C",
            "chainName": "composable"
          },
          "chain": {
            "channelId": "channel-2"
          }
        }
      ],
      "images": [
        {
          "imageSync": {
            "chainName": "solana",
            "baseDenom": "So11111111111111111111111111111111111111112"
          },
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/sol_circle.svg",
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/sol_circle.png",
          "theme": {
            "circle": true,
            "backgroundColorHex": "#000000"
          }
        }
      ]
    },
    {
      "description": "mSOL represents staked SOL in the Marinade stake pool.",
      "denomUnits": [
        {
          "denom": "ibc/A3AF3D68CECE0EF2B1FA8B883CB0DE6FDBCA114F55B082AF7A50AF87FA6120B3",
          "exponent": 0,
          "aliases": [
            "ibc/C280CB39B97E7CD33A0BF149CFD392C2A3F95FF896AFF89CFF2FA181479BED8D"
          ]
        },
        {
          "denom": "msol",
          "exponent": 9
        }
      ],
      "typeAsset": "ics20",
      "base": "ibc/A3AF3D68CECE0EF2B1FA8B883CB0DE6FDBCA114F55B082AF7A50AF87FA6120B3",
      "name": "Marinade Staked SOL",
      "display": "msol",
      "symbol": "mSOL",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channelId": "channel-52",
            "baseDenom": "ibc/C280CB39B97E7CD33A0BF149CFD392C2A3F95FF896AFF89CFF2FA181479BED8D",
            "chainName": "composable"
          },
          "chain": {
            "channelId": "channel-2"
          }
        }
      ],
      "images": [
        {
          "imageSync": {
            "chainName": "solana",
            "baseDenom": "mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So"
          },
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/msol.png",
          "theme": {
            "primaryColorHex": "#cbebe3"
          }
        }
      ]
    },
    {
      "description": "A representative token for staked SOL, derived through the process of liquid staking SOL using Jito.",
      "denomUnits": [
        {
          "denom": "ibc/E33AF85D4A1810EAF9E2DB61D6036B69D74D22E7B2C4D2487E40886BD746F543",
          "exponent": 0,
          "aliases": [
            "ibc/91A2FE07F8BDFC0552B1C9972FCCBF2CFD067DDE5F496D81E5132CE57762B0F2"
          ]
        },
        {
          "denom": "jitosol",
          "exponent": 9
        }
      ],
      "typeAsset": "ics20",
      "base": "ibc/E33AF85D4A1810EAF9E2DB61D6036B69D74D22E7B2C4D2487E40886BD746F543",
      "name": "Jito Staked SOL",
      "display": "jitosol",
      "symbol": "jitoSOL",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channelId": "channel-52",
            "baseDenom": "ibc/91A2FE07F8BDFC0552B1C9972FCCBF2CFD067DDE5F496D81E5132CE57762B0F2",
            "chainName": "composable"
          },
          "chain": {
            "channelId": "channel-2"
          }
        }
      ],
      "images": [
        {
          "imageSync": {
            "chainName": "solana",
            "baseDenom": "J1toso1uCk3RLmjorhTtrVwY9HJ7X8V9yYac6Y7kGCPn"
          },
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/jitosol.png",
          "theme": {
            "primaryColorHex": "#5bb384"
          }
        }
      ]
    },
    {
      "description": "A representative token for staked SOL, derived through the process of liquid staking SOL using the BlazeStake protocol.",
      "denomUnits": [
        {
          "denom": "ibc/227192D63636D9F1C0C0B2DB23177DBEF8AC1189511327FEC01EFD07C81FDA8A",
          "exponent": 0,
          "aliases": [
            "ibc/F52A71607B3AA7BBA8A222A9176E9939E92AB3656A094289CD218907D45DB716"
          ]
        },
        {
          "denom": "bsol",
          "exponent": 9
        }
      ],
      "typeAsset": "ics20",
      "base": "ibc/227192D63636D9F1C0C0B2DB23177DBEF8AC1189511327FEC01EFD07C81FDA8A",
      "name": "BlazeStake Staked SOL",
      "display": "bsol",
      "symbol": "bSOL",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channelId": "channel-52",
            "baseDenom": "ibc/F52A71607B3AA7BBA8A222A9176E9939E92AB3656A094289CD218907D45DB716",
            "chainName": "composable"
          },
          "chain": {
            "channelId": "channel-2"
          }
        }
      ],
      "images": [
        {
          "imageSync": {
            "chainName": "solana",
            "baseDenom": "bSo13r4TkiE4KumL71LsHTPpL2euBYLFx6h9HP3piy1"
          },
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/bsol.png",
          "theme": {
            "primaryColorHex": "#21c3cc"
          }
        }
      ]
    },
    {
      "description": "A representative token for staked SOL, derived through the process of liquid staking SOL using the MarginFi protocol.",
      "denomUnits": [
        {
          "denom": "ibc/7862B4B9333C12FF335914250260F69121CAF600E9A274F38AB345068BF9FB41",
          "exponent": 0,
          "aliases": [
            "ibc/55F5B582483FEFA5422794292B079B4D49A5BAB9881E7C801F9F271F1D234F1D"
          ]
        },
        {
          "denom": "lst",
          "exponent": 9
        }
      ],
      "typeAsset": "ics20",
      "base": "ibc/7862B4B9333C12FF335914250260F69121CAF600E9A274F38AB345068BF9FB41",
      "name": "Liquid Staking Token",
      "display": "lst",
      "symbol": "LST",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channelId": "channel-52",
            "baseDenom": "ibc/55F5B582483FEFA5422794292B079B4D49A5BAB9881E7C801F9F271F1D234F1D",
            "chainName": "composable"
          },
          "chain": {
            "channelId": "channel-2"
          }
        }
      ],
      "images": [
        {
          "imageSync": {
            "chainName": "solana",
            "baseDenom": "mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So"
          },
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/msol.png",
          "theme": {
            "primaryColorHex": "#cbebe3"
          }
        }
      ]
    },
    {
      "description": "A representative token for staked SOL, derived through the process of liquid staking SOL using the Edgevana protocol.",
      "denomUnits": [
        {
          "denom": "ibc/83024C5EE553BC98DEE40EEC9B584ED236855310BBEE2EDB4D8AA2EBE099BEFD",
          "exponent": 0,
          "aliases": [
            "ibc/BADB5950C4A81AC201696EBCB33CD295137FA86F0AA620CDDE946D3700E0208C"
          ]
        },
        {
          "denom": "edgesol",
          "exponent": 9
        }
      ],
      "typeAsset": "ics20",
      "base": "ibc/83024C5EE553BC98DEE40EEC9B584ED236855310BBEE2EDB4D8AA2EBE099BEFD",
      "name": "Edgevana Staked SOL",
      "display": "edgesol",
      "symbol": "edgeSOL",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channelId": "channel-52",
            "baseDenom": "ibc/BADB5950C4A81AC201696EBCB33CD295137FA86F0AA620CDDE946D3700E0208C",
            "chainName": "composable"
          },
          "chain": {
            "channelId": "channel-2"
          }
        }
      ],
      "images": [
        {
          "imageSync": {
            "chainName": "solana",
            "baseDenom": "edge86g9cVz87xcpKpy3J77vbp4wYd9idEV562CCntt"
          },
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/edgesol.png",
          "theme": {
            "primaryColorHex": "#146cfc"
          }
        }
      ]
    },
    {
      "description": "A liquid staked token that represents SOL staked to Helius's validator.",
      "denomUnits": [
        {
          "denom": "ibc/B65E52BE420295EFD6D295BE581BD375991A2882DC75FE5664079A953D589369",
          "exponent": 0,
          "aliases": [
            "ibc/531C52D572698BCBA29F44D959E73CD2148EE6542A3118F9E56621A28E1FF4C6"
          ]
        },
        {
          "denom": "hsol",
          "exponent": 9
        }
      ],
      "typeAsset": "ics20",
      "base": "ibc/B65E52BE420295EFD6D295BE581BD375991A2882DC75FE5664079A953D589369",
      "name": "Helius Staked SOL",
      "display": "hsol",
      "symbol": "hSOL",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channelId": "channel-52",
            "baseDenom": "ibc/531C52D572698BCBA29F44D959E73CD2148EE6542A3118F9E56621A28E1FF4C6",
            "chainName": "composable"
          },
          "chain": {
            "channelId": "channel-2"
          }
        }
      ],
      "images": [
        {
          "imageSync": {
            "chainName": "solana",
            "baseDenom": "he1iusmfkpAdwvxLNGV8Y1iSbj4rUy6yMhEA3fotn9A"
          },
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/hsol.png",
          "theme": {
            "primaryColorHex": "#e5502a"
          }
        }
      ]
    },
    {
      "description": "A liquid staked token that represents SOL staked to Jupiter's validator.",
      "denomUnits": [
        {
          "denom": "ibc/AB9605478D5368FE8DD651D1B88149BEF78466EC243EC66BEC877821E400E9B8",
          "exponent": 0,
          "aliases": [
            "ibc/6976998E24F1CFC373A9F799C9CE901F5EC32C3E33B2B09384A05774D9339626"
          ]
        },
        {
          "denom": "jupsol",
          "exponent": 9
        }
      ],
      "typeAsset": "ics20",
      "base": "ibc/AB9605478D5368FE8DD651D1B88149BEF78466EC243EC66BEC877821E400E9B8",
      "name": "Jupiter Staked SOL",
      "display": "jupsol",
      "symbol": "jupSOL",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channelId": "channel-52",
            "baseDenom": "ibc/6976998E24F1CFC373A9F799C9CE901F5EC32C3E33B2B09384A05774D9339626",
            "chainName": "composable"
          },
          "chain": {
            "channelId": "channel-2"
          }
        }
      ],
      "images": [
        {
          "imageSync": {
            "chainName": "solana",
            "baseDenom": "jupSoLaHXQiZZTSfEWMTRRgpnyFm8f6sZdosWBjx93v"
          },
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/jupsol.png",
          "theme": {
            "primaryColorHex": "#85d79e"
          }
        }
      ]
    },
    {
      "description": "dogwifhat is a meme coin that operates on Solana.",
      "denomUnits": [
        {
          "denom": "ibc/EB63A9FB526E486C23BCFA8E682058D140433A8FFE4AB153FBAB9D80E2B12D58",
          "exponent": 0,
          "aliases": [
            "ibc/BA34EAA22BBDA46C228DC70E4ED7E42A0867D5B051D625F953CC7B1CEF58C071"
          ]
        },
        {
          "denom": "wif",
          "exponent": 6
        }
      ],
      "typeAsset": "ics20",
      "base": "ibc/EB63A9FB526E486C23BCFA8E682058D140433A8FFE4AB153FBAB9D80E2B12D58",
      "name": "dogwifhat",
      "display": "wif",
      "symbol": "WIF",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channelId": "channel-52",
            "baseDenom": "ibc/BA34EAA22BBDA46C228DC70E4ED7E42A0867D5B051D625F953CC7B1CEF58C071",
            "chainName": "composable"
          },
          "chain": {
            "channelId": "channel-2"
          }
        }
      ],
      "images": [
        {
          "imageSync": {
            "chainName": "solana",
            "baseDenom": "EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLHYxdM65zcjm"
          },
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/wif.png",
          "theme": {
            "primaryColorHex": "#a29482"
          }
        }
      ]
    },
    {
      "description": "Tether, issued natively on Solana.",
      "denomUnits": [
        {
          "denom": "ibc/C40C5CFE3571DBF5D1858EAA707E64338DB03F88A02634CA1AD2B99CD25E4D7B",
          "exponent": 0,
          "aliases": [
            "ibc/D105950618E47CA2AEC314282BC401625025F80A4F812808DEEBB1941C685575"
          ]
        },
        {
          "denom": "usdt",
          "exponent": 6
        }
      ],
      "typeAsset": "ics20",
      "base": "ibc/C40C5CFE3571DBF5D1858EAA707E64338DB03F88A02634CA1AD2B99CD25E4D7B",
      "name": "Tether",
      "display": "usdt",
      "symbol": "USDT",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channelId": "channel-52",
            "baseDenom": "ibc/D105950618E47CA2AEC314282BC401625025F80A4F812808DEEBB1941C685575",
            "chainName": "composable"
          },
          "chain": {
            "channelId": "channel-2"
          }
        }
      ],
      "images": [
        {
          "imageSync": {
            "chainName": "solana",
            "baseDenom": "Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB"
          },
          "svg": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.svg",
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/ethereum/images/usdt.png",
          "theme": {
            "circle": true,
            "primaryColorHex": "#009393",
            "backgroundColorHex": "#009393"
          }
        }
      ]
    },
    {
      "description": "Whinecoin is an experimental memecoin by the Sommelier Finance team.",
      "denomUnits": [
        {
          "denom": "ibc/01AB3B205A1C52A463C310268C196E82AD66E7B6F1C327A91CE95144BADAC187",
          "exponent": 0,
          "aliases": [
            "ibc/9D5DA3720001F91DD76B8F609A93F96688EC8185B54BF9A1A1450EB34FF2D912"
          ]
        },
        {
          "denom": "whine",
          "exponent": 6
        }
      ],
      "typeAsset": "ics20",
      "base": "ibc/01AB3B205A1C52A463C310268C196E82AD66E7B6F1C327A91CE95144BADAC187",
      "name": "WHINEcoin",
      "display": "whine",
      "symbol": "WHINE",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channelId": "channel-52",
            "baseDenom": "ibc/9D5DA3720001F91DD76B8F609A93F96688EC8185B54BF9A1A1450EB34FF2D912",
            "chainName": "composable"
          },
          "chain": {
            "channelId": "channel-2"
          }
        }
      ],
      "images": [
        {
          "imageSync": {
            "chainName": "solana",
            "baseDenom": "ATeTQcUkWGs7AZ15mCiFUWCW9EUL7KpDZEHCN1Y8pump"
          },
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/_non-cosmos/solana/images/whine.png",
          "theme": {
            "primaryColorHex": "#FFFFFF",
            "backgroundColorHex": "#FFFFFF",
            "circle": false
          }
        }
      ]
    },
    {
      "description": "Unicorn from Solana via Picasso IBC",
      "denomUnits": [
        {
          "denom": "ibc/92AFD5629758490C7FE48137F8C427714CB8CC2D2667E3B8EDC3E1F21CC2E687",
          "exponent": 0,
          "aliases": [
            "ibc/586C150919550F6106711C7557DAAAEAB765DDF05648BAC0D96487AE90394BA1"
          ]
        },
        {
          "denom": "unicorn",
          "exponent": 6
        }
      ],
      "typeAsset": "ics20",
      "base": "ibc/92AFD5629758490C7FE48137F8C427714CB8CC2D2667E3B8EDC3E1F21CC2E687",
      "name": "Unicorn",
      "display": "unicorn",
      "symbol": "UWU",
      "traces": [
        {
          "type": "ibc",
          "counterparty": {
            "channelId": "channel-52",
            "baseDenom": "ibc/586C150919550F6106711C7557DAAAEAB765DDF05648BAC0D96487AE90394BA1",
            "chainName": "composable"
          },
          "chain": {
            "channelId": "channel-2"
          }
        }
      ],
      "images": [
        {
          "imageSync": {
            "chainName": "unicorn",
            "baseDenom": "uwunicorn"
          },
          "png": "https://raw.githubusercontent.com/cosmos/chain-registry/master/unicorn/images/uwu.png",
          "theme": {
            "primaryColorHex": "#D44CE6"
          }
        }
      ]
    }
  ]
};
export default asset_list;
