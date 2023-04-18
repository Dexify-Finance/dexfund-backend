export default {
  "address": "0x62a2887AA51fcD72C12a47f5D2D5e860945407d1",
  "abi": [
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "prevAccessor",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "nextAccessor",
          "type": "address"
        }
      ],
      "name": "AccessorSet",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "asset",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "target",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "AssetWithdrawn",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "prevMigrator",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "nextMigrator",
          "type": "address"
        }
      ],
      "name": "MigratorSet",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "prevOwner",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "nextOwner",
          "type": "address"
        }
      ],
      "name": "OwnerSet",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "asset",
          "type": "address"
        }
      ],
      "name": "TrackedAssetAdded",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "asset",
          "type": "address"
        }
      ],
      "name": "TrackedAssetRemoved",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "prevVaultLib",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "address",
          "name": "nextVaultLib",
          "type": "address"
        }
      ],
      "name": "VaultLibSet",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_asset",
          "type": "address"
        }
      ],
      "name": "addTrackedAsset",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_owner",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_spender",
          "type": "address"
        }
      ],
      "name": "allowance",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_asset",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_target",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "approveAssetSpender",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_account",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_target",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "burnShares",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_contract",
          "type": "address"
        },
        {
          "internalType": "bytes",
          "name": "_callData",
          "type": "bytes"
        }
      ],
      "name": "callOnContract",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_who",
          "type": "address"
        }
      ],
      "name": "canMigrate",
      "outputs": [
        {
          "internalType": "bool",
          "name": "canMigrate_",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "decimals",
      "outputs": [
        {
          "internalType": "uint8",
          "name": "",
          "type": "uint8"
        }
      ],
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getAccessor",
      "outputs": [
        {
          "internalType": "address",
          "name": "accessor_",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getCreator",
      "outputs": [
        {
          "internalType": "address",
          "name": "creator_",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getMigrator",
      "outputs": [
        {
          "internalType": "address",
          "name": "migrator_",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getOwner",
      "outputs": [
        {
          "internalType": "address",
          "name": "owner_",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getTrackedAssets",
      "outputs": [
        {
          "internalType": "address[]",
          "name": "trackedAssets_",
          "type": "address[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getVaultLib",
      "outputs": [
        {
          "internalType": "address",
          "name": "vaultLib_",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_owner",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_accessor",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "_fundName",
          "type": "string"
        }
      ],
      "name": "init",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_asset",
          "type": "address"
        }
      ],
      "name": "isTrackedAsset",
      "outputs": [
        {
          "internalType": "bool",
          "name": "isTrackedAsset_",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_target",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "mintShares",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "proxiableUUID",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "uuid_",
          "type": "bytes32"
        }
      ],
      "stateMutability": "pure",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_asset",
          "type": "address"
        }
      ],
      "name": "removeTrackedAsset",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_nextAccessor",
          "type": "address"
        }
      ],
      "name": "setAccessor",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_nextMigrator",
          "type": "address"
        }
      ],
      "name": "setMigrator",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_nextVaultLib",
          "type": "address"
        }
      ],
      "name": "setVaultLib",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "symbol",
      "outputs": [
        {
          "internalType": "string",
          "name": "symbol_",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "transfer",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "transferShares",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_asset",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "_target",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_amount",
          "type": "uint256"
        }
      ],
      "name": "withdrawAssetTo",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "transactionHash": "0x75736714978e2db4402d00cc918fc3f043804066b2335a7eb4164a5f71530127",
  "receipt": {
    "to": null,
    "from": "0x5DB342FB039C1c85bec5fE89Af6734621f421D84",
    "contractAddress": "0x62a2887AA51fcD72C12a47f5D2D5e860945407d1",
    "transactionIndex": 108,
    "gasUsed": "1971133",
    "logsBloom": "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
    "blockHash": "0x2b98afe5c6ea676fc2bb390570dfb3001365ef11f903d97a826f1167c77da806",
    "transactionHash": "0x75736714978e2db4402d00cc918fc3f043804066b2335a7eb4164a5f71530127",
    "logs": [],
    "blockNumber": 13430316,
    "cumulativeGasUsed": "17835633",
    "status": 1,
    "byzantium": true
  },
  "args": [],
  "solcInputHash": "d9ca3c6c6b3274b287f1d69a6e9ab10d",
  "metadata": "{\"compiler\":{\"version\":\"0.6.12+commit.27d51765\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"prevAccessor\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"nextAccessor\",\"type\":\"address\"}],\"name\":\"AccessorSet\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"asset\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"AssetWithdrawn\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"prevMigrator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"nextMigrator\",\"type\":\"address\"}],\"name\":\"MigratorSet\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"prevOwner\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"nextOwner\",\"type\":\"address\"}],\"name\":\"OwnerSet\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"asset\",\"type\":\"address\"}],\"name\":\"TrackedAssetAdded\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"asset\",\"type\":\"address\"}],\"name\":\"TrackedAssetRemoved\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"prevVaultLib\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"nextVaultLib\",\"type\":\"address\"}],\"name\":\"VaultLibSet\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_asset\",\"type\":\"address\"}],\"name\":\"addTrackedAsset\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"_spender\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_asset\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"_target\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_amount\",\"type\":\"uint256\"}],\"name\":\"approveAssetSpender\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_account\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_target\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_amount\",\"type\":\"uint256\"}],\"name\":\"burnShares\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_contract\",\"type\":\"address\"},{\"internalType\":\"bytes\",\"name\":\"_callData\",\"type\":\"bytes\"}],\"name\":\"callOnContract\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_who\",\"type\":\"address\"}],\"name\":\"canMigrate\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"canMigrate_\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getAccessor\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"accessor_\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getCreator\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"creator_\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getMigrator\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"migrator_\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getOwner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"owner_\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getTrackedAssets\",\"outputs\":[{\"internalType\":\"address[]\",\"name\":\"trackedAssets_\",\"type\":\"address[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getVaultLib\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"vaultLib_\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"_accessor\",\"type\":\"address\"},{\"internalType\":\"string\",\"name\":\"_fundName\",\"type\":\"string\"}],\"name\":\"init\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_asset\",\"type\":\"address\"}],\"name\":\"isTrackedAsset\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"isTrackedAsset_\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_target\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_amount\",\"type\":\"uint256\"}],\"name\":\"mintShares\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"proxiableUUID\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"uuid_\",\"type\":\"bytes32\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_asset\",\"type\":\"address\"}],\"name\":\"removeTrackedAsset\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_nextAccessor\",\"type\":\"address\"}],\"name\":\"setAccessor\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_nextMigrator\",\"type\":\"address\"}],\"name\":\"setMigrator\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_nextVaultLib\",\"type\":\"address\"}],\"name\":\"setVaultLib\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"symbol_\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"_to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_amount\",\"type\":\"uint256\"}],\"name\":\"transferShares\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_asset\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"_target\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_amount\",\"type\":\"uint256\"}],\"name\":\"withdrawAssetTo\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"author\":\"Enzyme Council <security@enzyme.finance>\",\"details\":\"The difference in terminology between \\\"asset\\\" and \\\"trackedAsset\\\" is intentional. A fund might actually have asset balances of un-tracked assets, but only tracked assets are used in gav calculations. Note that this contract inherits VaultLibSafeMath (a verbatim Open Zeppelin SafeMath copy) from SharesTokenBase via VaultLibBase1\",\"kind\":\"dev\",\"methods\":{\"addTrackedAsset(address)\":{\"details\":\"Allows addition of already tracked assets to fail silently.\",\"params\":{\"_asset\":\"The asset to add\"}},\"allowance(address,address)\":{\"details\":\"Standard implementation of ERC20's allowance(). Can be overridden.\"},\"approve(address,uint256)\":{\"details\":\"Disallows the standard ERC20 approve() function\"},\"approveAssetSpender(address,address,uint256)\":{\"params\":{\"_amount\":\"The amount of the allowance\",\"_asset\":\"The asset for which to grant an allowance\",\"_target\":\"The spender of the allowance\"}},\"balanceOf(address)\":{\"details\":\"Standard implementation of ERC20's balanceOf(). Can be overridden.\"},\"burnShares(address,uint256)\":{\"params\":{\"_amount\":\"The amount of shares to burn\",\"_target\":\"The account for which to burn shares\"}},\"callOnContract(address,bytes)\":{\"params\":{\"_callData\":\"The call data for the call\",\"_contract\":\"The contract to call\"}},\"canMigrate(address)\":{\"params\":{\"_who\":\"The account to check\"},\"returns\":{\"canMigrate_\":\"True if the account is allowed to migrate the VaultProxy\"}},\"decimals()\":{\"details\":\"Standard implementation of ERC20's decimals(). Can not be overridden.\"},\"getAccessor()\":{\"returns\":{\"accessor_\":\"The `accessor` variable value\"}},\"getCreator()\":{\"returns\":{\"creator_\":\"The `creator` variable value\"}},\"getMigrator()\":{\"returns\":{\"migrator_\":\"The `migrator` variable value\"}},\"getOwner()\":{\"returns\":{\"owner_\":\"The `owner` variable value\"}},\"getTrackedAssets()\":{\"returns\":{\"trackedAssets_\":\"The `trackedAssets` variable value\"}},\"getVaultLib()\":{\"returns\":{\"vaultLib_\":\"The address of the VaultLib target\"}},\"init(address,address,string)\":{\"details\":\"Serves as a per-proxy pseudo-constructor\",\"params\":{\"_accessor\":\"The address to set as the permissioned accessor of the VaultLib\",\"_fundName\":\"The name of the fund\",\"_owner\":\"The address to set as the fund owner\"}},\"isTrackedAsset(address)\":{\"params\":{\"_asset\":\"The address to check\"},\"returns\":{\"isTrackedAsset_\":\"True if the address is a tracked asset of the fund\"}},\"mintShares(address,uint256)\":{\"params\":{\"_amount\":\"The amount of shares to mint\",\"_target\":\"The account for which to burn shares\"}},\"name()\":{\"details\":\"Standard implementation of ERC20's name(). Can be overridden.\"},\"proxiableUUID()\":{\"details\":\"The UUID is `bytes32(keccak256('mln.proxiable.vaultlib'))`\",\"returns\":{\"uuid_\":\"The bytes32 hash representing the UUID\"}},\"removeTrackedAsset(address)\":{\"params\":{\"_asset\":\"The asset to remove\"}},\"setAccessor(address)\":{\"params\":{\"_nextAccessor\":\"The address to set as the permissioned accessor of the VaultLib\"}},\"setMigrator(address)\":{\"details\":\"Set to address(0) to remove the migrator.\",\"params\":{\"_nextMigrator\":\"The account to set as the allowed migrator\"}},\"setVaultLib(address)\":{\"details\":\"This function is absolutely critical. __updateCodeAddress() validates that the target is a valid Proxiable contract instance. Does not block _nextVaultLib from being the same as the current VaultLib\",\"params\":{\"_nextVaultLib\":\"The address to set as the VaultLib\"}},\"symbol()\":{\"details\":\"Defers the shares symbol value to the Dispatcher contract\",\"returns\":{\"symbol_\":\"The `symbol` value\"}},\"totalSupply()\":{\"details\":\"Standard implementation of ERC20's totalSupply(). Can be overridden.\"},\"transfer(address,uint256)\":{\"details\":\"Disallows the standard ERC20 transfer() function\"},\"transferFrom(address,address,uint256)\":{\"details\":\"Disallows the standard ERC20 transferFrom() function\"},\"transferShares(address,address,uint256)\":{\"params\":{\"_amount\":\"The amount of shares to transfer\",\"_from\":\"The account from which to transfer shares\",\"_to\":\"The account to which to transfer shares\"}},\"withdrawAssetTo(address,address,uint256)\":{\"params\":{\"_amount\":\"The amount of asset to withdraw\",\"_asset\":\"The asset to withdraw\",\"_target\":\"The account to which to withdraw the asset\"}}},\"title\":\"VaultLib Contract\",\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{\"addTrackedAsset(address)\":{\"notice\":\"Adds a tracked asset to the fund\"},\"approveAssetSpender(address,address,uint256)\":{\"notice\":\"Grants an allowance to a spender to use the fund's asset\"},\"burnShares(address,uint256)\":{\"notice\":\"Burns fund shares from a particular account\"},\"callOnContract(address,bytes)\":{\"notice\":\"Makes an arbitrary call with this contract as the sender\"},\"canMigrate(address)\":{\"notice\":\"Checks whether an account is allowed to migrate the VaultProxy\"},\"getAccessor()\":{\"notice\":\"Gets the `accessor` variable\"},\"getCreator()\":{\"notice\":\"Gets the `creator` variable\"},\"getMigrator()\":{\"notice\":\"Gets the `migrator` variable\"},\"getOwner()\":{\"notice\":\"Gets the `owner` variable\"},\"getTrackedAssets()\":{\"notice\":\"Gets the `trackedAssets` variable\"},\"getVaultLib()\":{\"notice\":\"Gets the VaultLib target for the VaultProxy\"},\"init(address,address,string)\":{\"notice\":\"Initializes the VaultProxy with core configuration\"},\"isTrackedAsset(address)\":{\"notice\":\"Check whether an address is a tracked asset of the fund\"},\"mintShares(address,uint256)\":{\"notice\":\"Mints fund shares to a particular account\"},\"proxiableUUID()\":{\"notice\":\"Returns a unique bytes32 hash for VaultLib instances\"},\"removeTrackedAsset(address)\":{\"notice\":\"Removes a tracked asset from the fund\"},\"setAccessor(address)\":{\"notice\":\"Sets the permissioned accessor of the VaultLib\"},\"setMigrator(address)\":{\"notice\":\"Sets the account that is allowed to migrate a fund to new releases\"},\"setVaultLib(address)\":{\"notice\":\"Sets the VaultLib target for the VaultProxy\"},\"symbol()\":{\"notice\":\"Gets the `symbol` value of the shares token\"},\"transferShares(address,address,uint256)\":{\"notice\":\"Transfers fund shares from one account to another\"},\"withdrawAssetTo(address,address,uint256)\":{\"notice\":\"Withdraws an asset from the VaultProxy to a given account\"}},\"notice\":\"The per-release proxiable library contract for VaultProxy\",\"version\":1}},\"settings\":{\"compilationTarget\":{\"contracts/release/core/fund/vault/VaultLib.sol\":\"VaultLib\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\",\"useLiteralContent\":true},\"optimizer\":{\"details\":{\"constantOptimizer\":true,\"cse\":true,\"deduplicate\":true,\"jumpdestRemover\":true,\"orderLiterals\":true,\"peephole\":true,\"yul\":false},\"runs\":200},\"remappings\":[]},\"sources\":{\"@openzeppelin/contracts/math/SafeMath.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n\\npragma solidity >=0.6.0 <0.8.0;\\n\\n/**\\n * @dev Wrappers over Solidity's arithmetic operations with added overflow\\n * checks.\\n *\\n * Arithmetic operations in Solidity wrap on overflow. This can easily result\\n * in bugs, because programmers usually assume that an overflow raises an\\n * error, which is the standard behavior in high level programming languages.\\n * `SafeMath` restores this intuition by reverting the transaction when an\\n * operation overflows.\\n *\\n * Using this library instead of the unchecked operations eliminates an entire\\n * class of bugs, so it's recommended to use it always.\\n */\\nlibrary SafeMath {\\n    /**\\n     * @dev Returns the addition of two unsigned integers, with an overflow flag.\\n     *\\n     * _Available since v3.4._\\n     */\\n    function tryAdd(uint256 a, uint256 b) internal pure returns (bool, uint256) {\\n        uint256 c = a + b;\\n        if (c < a) return (false, 0);\\n        return (true, c);\\n    }\\n\\n    /**\\n     * @dev Returns the substraction of two unsigned integers, with an overflow flag.\\n     *\\n     * _Available since v3.4._\\n     */\\n    function trySub(uint256 a, uint256 b) internal pure returns (bool, uint256) {\\n        if (b > a) return (false, 0);\\n        return (true, a - b);\\n    }\\n\\n    /**\\n     * @dev Returns the multiplication of two unsigned integers, with an overflow flag.\\n     *\\n     * _Available since v3.4._\\n     */\\n    function tryMul(uint256 a, uint256 b) internal pure returns (bool, uint256) {\\n        // Gas optimization: this is cheaper than requiring 'a' not being zero, but the\\n        // benefit is lost if 'b' is also tested.\\n        // See: https://github.com/OpenZeppelin/openzeppelin-contracts/pull/522\\n        if (a == 0) return (true, 0);\\n        uint256 c = a * b;\\n        if (c / a != b) return (false, 0);\\n        return (true, c);\\n    }\\n\\n    /**\\n     * @dev Returns the division of two unsigned integers, with a division by zero flag.\\n     *\\n     * _Available since v3.4._\\n     */\\n    function tryDiv(uint256 a, uint256 b) internal pure returns (bool, uint256) {\\n        if (b == 0) return (false, 0);\\n        return (true, a / b);\\n    }\\n\\n    /**\\n     * @dev Returns the remainder of dividing two unsigned integers, with a division by zero flag.\\n     *\\n     * _Available since v3.4._\\n     */\\n    function tryMod(uint256 a, uint256 b) internal pure returns (bool, uint256) {\\n        if (b == 0) return (false, 0);\\n        return (true, a % b);\\n    }\\n\\n    /**\\n     * @dev Returns the addition of two unsigned integers, reverting on\\n     * overflow.\\n     *\\n     * Counterpart to Solidity's `+` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - Addition cannot overflow.\\n     */\\n    function add(uint256 a, uint256 b) internal pure returns (uint256) {\\n        uint256 c = a + b;\\n        require(c >= a, \\\"SafeMath: addition overflow\\\");\\n        return c;\\n    }\\n\\n    /**\\n     * @dev Returns the subtraction of two unsigned integers, reverting on\\n     * overflow (when the result is negative).\\n     *\\n     * Counterpart to Solidity's `-` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - Subtraction cannot overflow.\\n     */\\n    function sub(uint256 a, uint256 b) internal pure returns (uint256) {\\n        require(b <= a, \\\"SafeMath: subtraction overflow\\\");\\n        return a - b;\\n    }\\n\\n    /**\\n     * @dev Returns the multiplication of two unsigned integers, reverting on\\n     * overflow.\\n     *\\n     * Counterpart to Solidity's `*` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - Multiplication cannot overflow.\\n     */\\n    function mul(uint256 a, uint256 b) internal pure returns (uint256) {\\n        if (a == 0) return 0;\\n        uint256 c = a * b;\\n        require(c / a == b, \\\"SafeMath: multiplication overflow\\\");\\n        return c;\\n    }\\n\\n    /**\\n     * @dev Returns the integer division of two unsigned integers, reverting on\\n     * division by zero. The result is rounded towards zero.\\n     *\\n     * Counterpart to Solidity's `/` operator. Note: this function uses a\\n     * `revert` opcode (which leaves remaining gas untouched) while Solidity\\n     * uses an invalid opcode to revert (consuming all remaining gas).\\n     *\\n     * Requirements:\\n     *\\n     * - The divisor cannot be zero.\\n     */\\n    function div(uint256 a, uint256 b) internal pure returns (uint256) {\\n        require(b > 0, \\\"SafeMath: division by zero\\\");\\n        return a / b;\\n    }\\n\\n    /**\\n     * @dev Returns the remainder of dividing two unsigned integers. (unsigned integer modulo),\\n     * reverting when dividing by zero.\\n     *\\n     * Counterpart to Solidity's `%` operator. This function uses a `revert`\\n     * opcode (which leaves remaining gas untouched) while Solidity uses an\\n     * invalid opcode to revert (consuming all remaining gas).\\n     *\\n     * Requirements:\\n     *\\n     * - The divisor cannot be zero.\\n     */\\n    function mod(uint256 a, uint256 b) internal pure returns (uint256) {\\n        require(b > 0, \\\"SafeMath: modulo by zero\\\");\\n        return a % b;\\n    }\\n\\n    /**\\n     * @dev Returns the subtraction of two unsigned integers, reverting with custom message on\\n     * overflow (when the result is negative).\\n     *\\n     * CAUTION: This function is deprecated because it requires allocating memory for the error\\n     * message unnecessarily. For custom revert reasons use {trySub}.\\n     *\\n     * Counterpart to Solidity's `-` operator.\\n     *\\n     * Requirements:\\n     *\\n     * - Subtraction cannot overflow.\\n     */\\n    function sub(uint256 a, uint256 b, string memory errorMessage) internal pure returns (uint256) {\\n        require(b <= a, errorMessage);\\n        return a - b;\\n    }\\n\\n    /**\\n     * @dev Returns the integer division of two unsigned integers, reverting with custom message on\\n     * division by zero. The result is rounded towards zero.\\n     *\\n     * CAUTION: This function is deprecated because it requires allocating memory for the error\\n     * message unnecessarily. For custom revert reasons use {tryDiv}.\\n     *\\n     * Counterpart to Solidity's `/` operator. Note: this function uses a\\n     * `revert` opcode (which leaves remaining gas untouched) while Solidity\\n     * uses an invalid opcode to revert (consuming all remaining gas).\\n     *\\n     * Requirements:\\n     *\\n     * - The divisor cannot be zero.\\n     */\\n    function div(uint256 a, uint256 b, string memory errorMessage) internal pure returns (uint256) {\\n        require(b > 0, errorMessage);\\n        return a / b;\\n    }\\n\\n    /**\\n     * @dev Returns the remainder of dividing two unsigned integers. (unsigned integer modulo),\\n     * reverting with custom message when dividing by zero.\\n     *\\n     * CAUTION: This function is deprecated because it requires allocating memory for the error\\n     * message unnecessarily. For custom revert reasons use {tryMod}.\\n     *\\n     * Counterpart to Solidity's `%` operator. This function uses a `revert`\\n     * opcode (which leaves remaining gas untouched) while Solidity uses an\\n     * invalid opcode to revert (consuming all remaining gas).\\n     *\\n     * Requirements:\\n     *\\n     * - The divisor cannot be zero.\\n     */\\n    function mod(uint256 a, uint256 b, string memory errorMessage) internal pure returns (uint256) {\\n        require(b > 0, errorMessage);\\n        return a % b;\\n    }\\n}\\n\",\"keccak256\":\"0xcc78a17dd88fa5a2edc60c8489e2f405c0913b377216a5b26b35656b2d0dab52\",\"license\":\"MIT\"},\"@openzeppelin/contracts/token/ERC20/ERC20.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n\\npragma solidity >=0.6.0 <0.8.0;\\n\\nimport \\\"../../utils/Context.sol\\\";\\nimport \\\"./IERC20.sol\\\";\\nimport \\\"../../math/SafeMath.sol\\\";\\n\\n/**\\n * @dev Implementation of the {IERC20} interface.\\n *\\n * This implementation is agnostic to the way tokens are created. This means\\n * that a supply mechanism has to be added in a derived contract using {_mint}.\\n * For a generic mechanism see {ERC20PresetMinterPauser}.\\n *\\n * TIP: For a detailed writeup see our guide\\n * https://forum.zeppelin.solutions/t/how-to-implement-erc20-supply-mechanisms/226[How\\n * to implement supply mechanisms].\\n *\\n * We have followed general OpenZeppelin guidelines: functions revert instead\\n * of returning `false` on failure. This behavior is nonetheless conventional\\n * and does not conflict with the expectations of ERC20 applications.\\n *\\n * Additionally, an {Approval} event is emitted on calls to {transferFrom}.\\n * This allows applications to reconstruct the allowance for all accounts just\\n * by listening to said events. Other implementations of the EIP may not emit\\n * these events, as it isn't required by the specification.\\n *\\n * Finally, the non-standard {decreaseAllowance} and {increaseAllowance}\\n * functions have been added to mitigate the well-known issues around setting\\n * allowances. See {IERC20-approve}.\\n */\\ncontract ERC20 is Context, IERC20 {\\n    using SafeMath for uint256;\\n\\n    mapping (address => uint256) private _balances;\\n\\n    mapping (address => mapping (address => uint256)) private _allowances;\\n\\n    uint256 private _totalSupply;\\n\\n    string private _name;\\n    string private _symbol;\\n    uint8 private _decimals;\\n\\n    /**\\n     * @dev Sets the values for {name} and {symbol}, initializes {decimals} with\\n     * a default value of 18.\\n     *\\n     * To select a different value for {decimals}, use {_setupDecimals}.\\n     *\\n     * All three of these values are immutable: they can only be set once during\\n     * construction.\\n     */\\n    constructor (string memory name_, string memory symbol_) public {\\n        _name = name_;\\n        _symbol = symbol_;\\n        _decimals = 18;\\n    }\\n\\n    /**\\n     * @dev Returns the name of the token.\\n     */\\n    function name() public view virtual returns (string memory) {\\n        return _name;\\n    }\\n\\n    /**\\n     * @dev Returns the symbol of the token, usually a shorter version of the\\n     * name.\\n     */\\n    function symbol() public view virtual returns (string memory) {\\n        return _symbol;\\n    }\\n\\n    /**\\n     * @dev Returns the number of decimals used to get its user representation.\\n     * For example, if `decimals` equals `2`, a balance of `505` tokens should\\n     * be displayed to a user as `5,05` (`505 / 10 ** 2`).\\n     *\\n     * Tokens usually opt for a value of 18, imitating the relationship between\\n     * Ether and Wei. This is the value {ERC20} uses, unless {_setupDecimals} is\\n     * called.\\n     *\\n     * NOTE: This information is only used for _display_ purposes: it in\\n     * no way affects any of the arithmetic of the contract, including\\n     * {IERC20-balanceOf} and {IERC20-transfer}.\\n     */\\n    function decimals() public view virtual returns (uint8) {\\n        return _decimals;\\n    }\\n\\n    /**\\n     * @dev See {IERC20-totalSupply}.\\n     */\\n    function totalSupply() public view virtual override returns (uint256) {\\n        return _totalSupply;\\n    }\\n\\n    /**\\n     * @dev See {IERC20-balanceOf}.\\n     */\\n    function balanceOf(address account) public view virtual override returns (uint256) {\\n        return _balances[account];\\n    }\\n\\n    /**\\n     * @dev See {IERC20-transfer}.\\n     *\\n     * Requirements:\\n     *\\n     * - `recipient` cannot be the zero address.\\n     * - the caller must have a balance of at least `amount`.\\n     */\\n    function transfer(address recipient, uint256 amount) public virtual override returns (bool) {\\n        _transfer(_msgSender(), recipient, amount);\\n        return true;\\n    }\\n\\n    /**\\n     * @dev See {IERC20-allowance}.\\n     */\\n    function allowance(address owner, address spender) public view virtual override returns (uint256) {\\n        return _allowances[owner][spender];\\n    }\\n\\n    /**\\n     * @dev See {IERC20-approve}.\\n     *\\n     * Requirements:\\n     *\\n     * - `spender` cannot be the zero address.\\n     */\\n    function approve(address spender, uint256 amount) public virtual override returns (bool) {\\n        _approve(_msgSender(), spender, amount);\\n        return true;\\n    }\\n\\n    /**\\n     * @dev See {IERC20-transferFrom}.\\n     *\\n     * Emits an {Approval} event indicating the updated allowance. This is not\\n     * required by the EIP. See the note at the beginning of {ERC20}.\\n     *\\n     * Requirements:\\n     *\\n     * - `sender` and `recipient` cannot be the zero address.\\n     * - `sender` must have a balance of at least `amount`.\\n     * - the caller must have allowance for ``sender``'s tokens of at least\\n     * `amount`.\\n     */\\n    function transferFrom(address sender, address recipient, uint256 amount) public virtual override returns (bool) {\\n        _transfer(sender, recipient, amount);\\n        _approve(sender, _msgSender(), _allowances[sender][_msgSender()].sub(amount, \\\"ERC20: transfer amount exceeds allowance\\\"));\\n        return true;\\n    }\\n\\n    /**\\n     * @dev Atomically increases the allowance granted to `spender` by the caller.\\n     *\\n     * This is an alternative to {approve} that can be used as a mitigation for\\n     * problems described in {IERC20-approve}.\\n     *\\n     * Emits an {Approval} event indicating the updated allowance.\\n     *\\n     * Requirements:\\n     *\\n     * - `spender` cannot be the zero address.\\n     */\\n    function increaseAllowance(address spender, uint256 addedValue) public virtual returns (bool) {\\n        _approve(_msgSender(), spender, _allowances[_msgSender()][spender].add(addedValue));\\n        return true;\\n    }\\n\\n    /**\\n     * @dev Atomically decreases the allowance granted to `spender` by the caller.\\n     *\\n     * This is an alternative to {approve} that can be used as a mitigation for\\n     * problems described in {IERC20-approve}.\\n     *\\n     * Emits an {Approval} event indicating the updated allowance.\\n     *\\n     * Requirements:\\n     *\\n     * - `spender` cannot be the zero address.\\n     * - `spender` must have allowance for the caller of at least\\n     * `subtractedValue`.\\n     */\\n    function decreaseAllowance(address spender, uint256 subtractedValue) public virtual returns (bool) {\\n        _approve(_msgSender(), spender, _allowances[_msgSender()][spender].sub(subtractedValue, \\\"ERC20: decreased allowance below zero\\\"));\\n        return true;\\n    }\\n\\n    /**\\n     * @dev Moves tokens `amount` from `sender` to `recipient`.\\n     *\\n     * This is internal function is equivalent to {transfer}, and can be used to\\n     * e.g. implement automatic token fees, slashing mechanisms, etc.\\n     *\\n     * Emits a {Transfer} event.\\n     *\\n     * Requirements:\\n     *\\n     * - `sender` cannot be the zero address.\\n     * - `recipient` cannot be the zero address.\\n     * - `sender` must have a balance of at least `amount`.\\n     */\\n    function _transfer(address sender, address recipient, uint256 amount) internal virtual {\\n        require(sender != address(0), \\\"ERC20: transfer from the zero address\\\");\\n        require(recipient != address(0), \\\"ERC20: transfer to the zero address\\\");\\n\\n        _beforeTokenTransfer(sender, recipient, amount);\\n\\n        _balances[sender] = _balances[sender].sub(amount, \\\"ERC20: transfer amount exceeds balance\\\");\\n        _balances[recipient] = _balances[recipient].add(amount);\\n        emit Transfer(sender, recipient, amount);\\n    }\\n\\n    /** @dev Creates `amount` tokens and assigns them to `account`, increasing\\n     * the total supply.\\n     *\\n     * Emits a {Transfer} event with `from` set to the zero address.\\n     *\\n     * Requirements:\\n     *\\n     * - `to` cannot be the zero address.\\n     */\\n    function _mint(address account, uint256 amount) internal virtual {\\n        require(account != address(0), \\\"ERC20: mint to the zero address\\\");\\n\\n        _beforeTokenTransfer(address(0), account, amount);\\n\\n        _totalSupply = _totalSupply.add(amount);\\n        _balances[account] = _balances[account].add(amount);\\n        emit Transfer(address(0), account, amount);\\n    }\\n\\n    /**\\n     * @dev Destroys `amount` tokens from `account`, reducing the\\n     * total supply.\\n     *\\n     * Emits a {Transfer} event with `to` set to the zero address.\\n     *\\n     * Requirements:\\n     *\\n     * - `account` cannot be the zero address.\\n     * - `account` must have at least `amount` tokens.\\n     */\\n    function _burn(address account, uint256 amount) internal virtual {\\n        require(account != address(0), \\\"ERC20: burn from the zero address\\\");\\n\\n        _beforeTokenTransfer(account, address(0), amount);\\n\\n        _balances[account] = _balances[account].sub(amount, \\\"ERC20: burn amount exceeds balance\\\");\\n        _totalSupply = _totalSupply.sub(amount);\\n        emit Transfer(account, address(0), amount);\\n    }\\n\\n    /**\\n     * @dev Sets `amount` as the allowance of `spender` over the `owner` s tokens.\\n     *\\n     * This internal function is equivalent to `approve`, and can be used to\\n     * e.g. set automatic allowances for certain subsystems, etc.\\n     *\\n     * Emits an {Approval} event.\\n     *\\n     * Requirements:\\n     *\\n     * - `owner` cannot be the zero address.\\n     * - `spender` cannot be the zero address.\\n     */\\n    function _approve(address owner, address spender, uint256 amount) internal virtual {\\n        require(owner != address(0), \\\"ERC20: approve from the zero address\\\");\\n        require(spender != address(0), \\\"ERC20: approve to the zero address\\\");\\n\\n        _allowances[owner][spender] = amount;\\n        emit Approval(owner, spender, amount);\\n    }\\n\\n    /**\\n     * @dev Sets {decimals} to a value other than the default one of 18.\\n     *\\n     * WARNING: This function should only be called from the constructor. Most\\n     * applications that interact with token contracts will not expect\\n     * {decimals} to ever change, and may work incorrectly if it does.\\n     */\\n    function _setupDecimals(uint8 decimals_) internal virtual {\\n        _decimals = decimals_;\\n    }\\n\\n    /**\\n     * @dev Hook that is called before any transfer of tokens. This includes\\n     * minting and burning.\\n     *\\n     * Calling conditions:\\n     *\\n     * - when `from` and `to` are both non-zero, `amount` of ``from``'s tokens\\n     * will be to transferred to `to`.\\n     * - when `from` is zero, `amount` tokens will be minted for `to`.\\n     * - when `to` is zero, `amount` of ``from``'s tokens will be burned.\\n     * - `from` and `to` are never both zero.\\n     *\\n     * To learn more about hooks, head to xref:ROOT:extending-contracts.adoc#using-hooks[Using Hooks].\\n     */\\n    function _beforeTokenTransfer(address from, address to, uint256 amount) internal virtual { }\\n}\\n\",\"keccak256\":\"0xca0c2396dbeb3503b51abf4248ebf77a1461edad513c01529df51850a012bee3\",\"license\":\"MIT\"},\"@openzeppelin/contracts/token/ERC20/IERC20.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n\\npragma solidity >=0.6.0 <0.8.0;\\n\\n/**\\n * @dev Interface of the ERC20 standard as defined in the EIP.\\n */\\ninterface IERC20 {\\n    /**\\n     * @dev Returns the amount of tokens in existence.\\n     */\\n    function totalSupply() external view returns (uint256);\\n\\n    /**\\n     * @dev Returns the amount of tokens owned by `account`.\\n     */\\n    function balanceOf(address account) external view returns (uint256);\\n\\n    /**\\n     * @dev Moves `amount` tokens from the caller's account to `recipient`.\\n     *\\n     * Returns a boolean value indicating whether the operation succeeded.\\n     *\\n     * Emits a {Transfer} event.\\n     */\\n    function transfer(address recipient, uint256 amount) external returns (bool);\\n\\n    /**\\n     * @dev Returns the remaining number of tokens that `spender` will be\\n     * allowed to spend on behalf of `owner` through {transferFrom}. This is\\n     * zero by default.\\n     *\\n     * This value changes when {approve} or {transferFrom} are called.\\n     */\\n    function allowance(address owner, address spender) external view returns (uint256);\\n\\n    /**\\n     * @dev Sets `amount` as the allowance of `spender` over the caller's tokens.\\n     *\\n     * Returns a boolean value indicating whether the operation succeeded.\\n     *\\n     * IMPORTANT: Beware that changing an allowance with this method brings the risk\\n     * that someone may use both the old and the new allowance by unfortunate\\n     * transaction ordering. One possible solution to mitigate this race\\n     * condition is to first reduce the spender's allowance to 0 and set the\\n     * desired value afterwards:\\n     * https://github.com/ethereum/EIPs/issues/20#issuecomment-263524729\\n     *\\n     * Emits an {Approval} event.\\n     */\\n    function approve(address spender, uint256 amount) external returns (bool);\\n\\n    /**\\n     * @dev Moves `amount` tokens from `sender` to `recipient` using the\\n     * allowance mechanism. `amount` is then deducted from the caller's\\n     * allowance.\\n     *\\n     * Returns a boolean value indicating whether the operation succeeded.\\n     *\\n     * Emits a {Transfer} event.\\n     */\\n    function transferFrom(address sender, address recipient, uint256 amount) external returns (bool);\\n\\n    /**\\n     * @dev Emitted when `value` tokens are moved from one account (`from`) to\\n     * another (`to`).\\n     *\\n     * Note that `value` may be zero.\\n     */\\n    event Transfer(address indexed from, address indexed to, uint256 value);\\n\\n    /**\\n     * @dev Emitted when the allowance of a `spender` for an `owner` is set by\\n     * a call to {approve}. `value` is the new allowance.\\n     */\\n    event Approval(address indexed owner, address indexed spender, uint256 value);\\n}\\n\",\"keccak256\":\"0x5f02220344881ce43204ae4a6281145a67bc52c2bb1290a791857df3d19d78f5\",\"license\":\"MIT\"},\"@openzeppelin/contracts/token/ERC20/SafeERC20.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n\\npragma solidity >=0.6.0 <0.8.0;\\n\\nimport \\\"./IERC20.sol\\\";\\nimport \\\"../../math/SafeMath.sol\\\";\\nimport \\\"../../utils/Address.sol\\\";\\n\\n/**\\n * @title SafeERC20\\n * @dev Wrappers around ERC20 operations that throw on failure (when the token\\n * contract returns false). Tokens that return no value (and instead revert or\\n * throw on failure) are also supported, non-reverting calls are assumed to be\\n * successful.\\n * To use this library you can add a `using SafeERC20 for IERC20;` statement to your contract,\\n * which allows you to call the safe operations as `token.safeTransfer(...)`, etc.\\n */\\nlibrary SafeERC20 {\\n    using SafeMath for uint256;\\n    using Address for address;\\n\\n    function safeTransfer(IERC20 token, address to, uint256 value) internal {\\n        _callOptionalReturn(token, abi.encodeWithSelector(token.transfer.selector, to, value));\\n    }\\n\\n    function safeTransferFrom(IERC20 token, address from, address to, uint256 value) internal {\\n        _callOptionalReturn(token, abi.encodeWithSelector(token.transferFrom.selector, from, to, value));\\n    }\\n\\n    /**\\n     * @dev Deprecated. This function has issues similar to the ones found in\\n     * {IERC20-approve}, and its usage is discouraged.\\n     *\\n     * Whenever possible, use {safeIncreaseAllowance} and\\n     * {safeDecreaseAllowance} instead.\\n     */\\n    function safeApprove(IERC20 token, address spender, uint256 value) internal {\\n        // safeApprove should only be called when setting an initial allowance,\\n        // or when resetting it to zero. To increase and decrease it, use\\n        // 'safeIncreaseAllowance' and 'safeDecreaseAllowance'\\n        // solhint-disable-next-line max-line-length\\n        require((value == 0) || (token.allowance(address(this), spender) == 0),\\n            \\\"SafeERC20: approve from non-zero to non-zero allowance\\\"\\n        );\\n        _callOptionalReturn(token, abi.encodeWithSelector(token.approve.selector, spender, value));\\n    }\\n\\n    function safeIncreaseAllowance(IERC20 token, address spender, uint256 value) internal {\\n        uint256 newAllowance = token.allowance(address(this), spender).add(value);\\n        _callOptionalReturn(token, abi.encodeWithSelector(token.approve.selector, spender, newAllowance));\\n    }\\n\\n    function safeDecreaseAllowance(IERC20 token, address spender, uint256 value) internal {\\n        uint256 newAllowance = token.allowance(address(this), spender).sub(value, \\\"SafeERC20: decreased allowance below zero\\\");\\n        _callOptionalReturn(token, abi.encodeWithSelector(token.approve.selector, spender, newAllowance));\\n    }\\n\\n    /**\\n     * @dev Imitates a Solidity high-level call (i.e. a regular function call to a contract), relaxing the requirement\\n     * on the return value: the return value is optional (but if data is returned, it must not be false).\\n     * @param token The token targeted by the call.\\n     * @param data The call data (encoded using abi.encode or one of its variants).\\n     */\\n    function _callOptionalReturn(IERC20 token, bytes memory data) private {\\n        // We need to perform a low level call here, to bypass Solidity's return data size checking mechanism, since\\n        // we're implementing it ourselves. We use {Address.functionCall} to perform this call, which verifies that\\n        // the target address contains contract code and also asserts for success in the low-level call.\\n\\n        bytes memory returndata = address(token).functionCall(data, \\\"SafeERC20: low-level call failed\\\");\\n        if (returndata.length > 0) { // Return data is optional\\n            // solhint-disable-next-line max-line-length\\n            require(abi.decode(returndata, (bool)), \\\"SafeERC20: ERC20 operation did not succeed\\\");\\n        }\\n    }\\n}\\n\",\"keccak256\":\"0xf12dfbe97e6276980b83d2830bb0eb75e0cf4f3e626c2471137f82158ae6a0fc\",\"license\":\"MIT\"},\"@openzeppelin/contracts/utils/Address.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n\\npragma solidity >=0.6.2 <0.8.0;\\n\\n/**\\n * @dev Collection of functions related to the address type\\n */\\nlibrary Address {\\n    /**\\n     * @dev Returns true if `account` is a contract.\\n     *\\n     * [IMPORTANT]\\n     * ====\\n     * It is unsafe to assume that an address for which this function returns\\n     * false is an externally-owned account (EOA) and not a contract.\\n     *\\n     * Among others, `isContract` will return false for the following\\n     * types of addresses:\\n     *\\n     *  - an externally-owned account\\n     *  - a contract in construction\\n     *  - an address where a contract will be created\\n     *  - an address where a contract lived, but was destroyed\\n     * ====\\n     */\\n    function isContract(address account) internal view returns (bool) {\\n        // This method relies on extcodesize, which returns 0 for contracts in\\n        // construction, since the code is only stored at the end of the\\n        // constructor execution.\\n\\n        uint256 size;\\n        // solhint-disable-next-line no-inline-assembly\\n        assembly { size := extcodesize(account) }\\n        return size > 0;\\n    }\\n\\n    /**\\n     * @dev Replacement for Solidity's `transfer`: sends `amount` wei to\\n     * `recipient`, forwarding all available gas and reverting on errors.\\n     *\\n     * https://eips.ethereum.org/EIPS/eip-1884[EIP1884] increases the gas cost\\n     * of certain opcodes, possibly making contracts go over the 2300 gas limit\\n     * imposed by `transfer`, making them unable to receive funds via\\n     * `transfer`. {sendValue} removes this limitation.\\n     *\\n     * https://diligence.consensys.net/posts/2019/09/stop-using-soliditys-transfer-now/[Learn more].\\n     *\\n     * IMPORTANT: because control is transferred to `recipient`, care must be\\n     * taken to not create reentrancy vulnerabilities. Consider using\\n     * {ReentrancyGuard} or the\\n     * https://solidity.readthedocs.io/en/v0.5.11/security-considerations.html#use-the-checks-effects-interactions-pattern[checks-effects-interactions pattern].\\n     */\\n    function sendValue(address payable recipient, uint256 amount) internal {\\n        require(address(this).balance >= amount, \\\"Address: insufficient balance\\\");\\n\\n        // solhint-disable-next-line avoid-low-level-calls, avoid-call-value\\n        (bool success, ) = recipient.call{ value: amount }(\\\"\\\");\\n        require(success, \\\"Address: unable to send value, recipient may have reverted\\\");\\n    }\\n\\n    /**\\n     * @dev Performs a Solidity function call using a low level `call`. A\\n     * plain`call` is an unsafe replacement for a function call: use this\\n     * function instead.\\n     *\\n     * If `target` reverts with a revert reason, it is bubbled up by this\\n     * function (like regular Solidity function calls).\\n     *\\n     * Returns the raw returned data. To convert to the expected return value,\\n     * use https://solidity.readthedocs.io/en/latest/units-and-global-variables.html?highlight=abi.decode#abi-encoding-and-decoding-functions[`abi.decode`].\\n     *\\n     * Requirements:\\n     *\\n     * - `target` must be a contract.\\n     * - calling `target` with `data` must not revert.\\n     *\\n     * _Available since v3.1._\\n     */\\n    function functionCall(address target, bytes memory data) internal returns (bytes memory) {\\n      return functionCall(target, data, \\\"Address: low-level call failed\\\");\\n    }\\n\\n    /**\\n     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`], but with\\n     * `errorMessage` as a fallback revert reason when `target` reverts.\\n     *\\n     * _Available since v3.1._\\n     */\\n    function functionCall(address target, bytes memory data, string memory errorMessage) internal returns (bytes memory) {\\n        return functionCallWithValue(target, data, 0, errorMessage);\\n    }\\n\\n    /**\\n     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],\\n     * but also transferring `value` wei to `target`.\\n     *\\n     * Requirements:\\n     *\\n     * - the calling contract must have an ETH balance of at least `value`.\\n     * - the called Solidity function must be `payable`.\\n     *\\n     * _Available since v3.1._\\n     */\\n    function functionCallWithValue(address target, bytes memory data, uint256 value) internal returns (bytes memory) {\\n        return functionCallWithValue(target, data, value, \\\"Address: low-level call with value failed\\\");\\n    }\\n\\n    /**\\n     * @dev Same as {xref-Address-functionCallWithValue-address-bytes-uint256-}[`functionCallWithValue`], but\\n     * with `errorMessage` as a fallback revert reason when `target` reverts.\\n     *\\n     * _Available since v3.1._\\n     */\\n    function functionCallWithValue(address target, bytes memory data, uint256 value, string memory errorMessage) internal returns (bytes memory) {\\n        require(address(this).balance >= value, \\\"Address: insufficient balance for call\\\");\\n        require(isContract(target), \\\"Address: call to non-contract\\\");\\n\\n        // solhint-disable-next-line avoid-low-level-calls\\n        (bool success, bytes memory returndata) = target.call{ value: value }(data);\\n        return _verifyCallResult(success, returndata, errorMessage);\\n    }\\n\\n    /**\\n     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],\\n     * but performing a static call.\\n     *\\n     * _Available since v3.3._\\n     */\\n    function functionStaticCall(address target, bytes memory data) internal view returns (bytes memory) {\\n        return functionStaticCall(target, data, \\\"Address: low-level static call failed\\\");\\n    }\\n\\n    /**\\n     * @dev Same as {xref-Address-functionCall-address-bytes-string-}[`functionCall`],\\n     * but performing a static call.\\n     *\\n     * _Available since v3.3._\\n     */\\n    function functionStaticCall(address target, bytes memory data, string memory errorMessage) internal view returns (bytes memory) {\\n        require(isContract(target), \\\"Address: static call to non-contract\\\");\\n\\n        // solhint-disable-next-line avoid-low-level-calls\\n        (bool success, bytes memory returndata) = target.staticcall(data);\\n        return _verifyCallResult(success, returndata, errorMessage);\\n    }\\n\\n    /**\\n     * @dev Same as {xref-Address-functionCall-address-bytes-}[`functionCall`],\\n     * but performing a delegate call.\\n     *\\n     * _Available since v3.4._\\n     */\\n    function functionDelegateCall(address target, bytes memory data) internal returns (bytes memory) {\\n        return functionDelegateCall(target, data, \\\"Address: low-level delegate call failed\\\");\\n    }\\n\\n    /**\\n     * @dev Same as {xref-Address-functionCall-address-bytes-string-}[`functionCall`],\\n     * but performing a delegate call.\\n     *\\n     * _Available since v3.4._\\n     */\\n    function functionDelegateCall(address target, bytes memory data, string memory errorMessage) internal returns (bytes memory) {\\n        require(isContract(target), \\\"Address: delegate call to non-contract\\\");\\n\\n        // solhint-disable-next-line avoid-low-level-calls\\n        (bool success, bytes memory returndata) = target.delegatecall(data);\\n        return _verifyCallResult(success, returndata, errorMessage);\\n    }\\n\\n    function _verifyCallResult(bool success, bytes memory returndata, string memory errorMessage) private pure returns(bytes memory) {\\n        if (success) {\\n            return returndata;\\n        } else {\\n            // Look for revert reason and bubble it up if present\\n            if (returndata.length > 0) {\\n                // The easiest way to bubble the revert reason is using memory via assembly\\n\\n                // solhint-disable-next-line no-inline-assembly\\n                assembly {\\n                    let returndata_size := mload(returndata)\\n                    revert(add(32, returndata), returndata_size)\\n                }\\n            } else {\\n                revert(errorMessage);\\n            }\\n        }\\n    }\\n}\\n\",\"keccak256\":\"0x28911e614500ae7c607a432a709d35da25f3bc5ddc8bd12b278b66358070c0ea\",\"license\":\"MIT\"},\"@openzeppelin/contracts/utils/Context.sol\":{\"content\":\"// SPDX-License-Identifier: MIT\\n\\npragma solidity >=0.6.0 <0.8.0;\\n\\n/*\\n * @dev Provides information about the current execution context, including the\\n * sender of the transaction and its data. While these are generally available\\n * via msg.sender and msg.data, they should not be accessed in such a direct\\n * manner, since when dealing with GSN meta-transactions the account sending and\\n * paying for execution may not be the actual sender (as far as an application\\n * is concerned).\\n *\\n * This contract is only required for intermediate, library-like contracts.\\n */\\nabstract contract Context {\\n    function _msgSender() internal view virtual returns (address payable) {\\n        return msg.sender;\\n    }\\n\\n    function _msgData() internal view virtual returns (bytes memory) {\\n        this; // silence state mutability warning without generating bytecode - see https://github.com/ethereum/solidity/issues/2691\\n        return msg.data;\\n    }\\n}\\n\",\"keccak256\":\"0x8d3cb350f04ff49cfb10aef08d87f19dcbaecc8027b0bed12f3275cd12f38cf0\",\"license\":\"MIT\"},\"contracts/persistent/dispatcher/IDispatcher.sol\":{\"content\":\"// SPDX-License-Identifier: GPL-3.0\\r\\n\\r\\n/*\\r\\n    This file is part of the Enzyme Protocol.\\r\\n\\r\\n    (c) Enzyme Council <council@enzyme.finance>\\r\\n\\r\\n    For the full license information, please view the LICENSE\\r\\n    file that was distributed with this source code.\\r\\n*/\\r\\n\\r\\npragma solidity 0.6.12;\\r\\n\\r\\n/// @title IDispatcher Interface\\r\\n/// @author Enzyme Council <security@enzyme.finance>\\r\\ninterface IDispatcher {\\r\\n    function cancelMigration(address _vaultProxy, bool _bypassFailure) external;\\r\\n\\r\\n    function claimOwnership() external;\\r\\n\\r\\n    function deployVaultProxy(\\r\\n        address _vaultLib,\\r\\n        address _owner,\\r\\n        address _vaultAccessor,\\r\\n        string calldata _fundName\\r\\n    ) external returns (address vaultProxy_);\\r\\n\\r\\n    function executeMigration(address _vaultProxy, bool _bypassFailure) external;\\r\\n\\r\\n    function getCurrentFundDeployer() external view returns (address currentFundDeployer_);\\r\\n\\r\\n    function getFundDeployerForVaultProxy(address _vaultProxy)\\r\\n        external\\r\\n        view\\r\\n        returns (address fundDeployer_);\\r\\n\\r\\n    function getMigrationRequestDetailsForVaultProxy(address _vaultProxy)\\r\\n        external\\r\\n        view\\r\\n        returns (\\r\\n            address nextFundDeployer_,\\r\\n            address nextVaultAccessor_,\\r\\n            address nextVaultLib_,\\r\\n            uint256 executableTimestamp_\\r\\n        );\\r\\n\\r\\n    function getMigrationTimelock() external view returns (uint256 migrationTimelock_);\\r\\n\\r\\n    function getNominatedOwner() external view returns (address nominatedOwner_);\\r\\n\\r\\n    function getOwner() external view returns (address owner_);\\r\\n\\r\\n    function getSharesTokenSymbol() external view returns (string memory sharesTokenSymbol_);\\r\\n\\r\\n    function getTimelockRemainingForMigrationRequest(address _vaultProxy)\\r\\n        external\\r\\n        view\\r\\n        returns (uint256 secondsRemaining_);\\r\\n\\r\\n    function hasExecutableMigrationRequest(address _vaultProxy)\\r\\n        external\\r\\n        view\\r\\n        returns (bool hasExecutableRequest_);\\r\\n\\r\\n    function hasMigrationRequest(address _vaultProxy)\\r\\n        external\\r\\n        view\\r\\n        returns (bool hasMigrationRequest_);\\r\\n\\r\\n    function removeNominatedOwner() external;\\r\\n\\r\\n    function setCurrentFundDeployer(address _nextFundDeployer) external;\\r\\n\\r\\n    function setMigrationTimelock(uint256 _nextTimelock) external;\\r\\n\\r\\n    function setNominatedOwner(address _nextNominatedOwner) external;\\r\\n\\r\\n    function setSharesTokenSymbol(string calldata _nextSymbol) external;\\r\\n\\r\\n    function signalMigration(\\r\\n        address _vaultProxy,\\r\\n        address _nextVaultAccessor,\\r\\n        address _nextVaultLib,\\r\\n        bool _bypassFailure\\r\\n    ) external;\\r\\n}\\r\\n\",\"keccak256\":\"0x9485f21d0ea8923cb76981b13eeb5aca0d0b44b209c352038d09ca99780df438\",\"license\":\"GPL-3.0\"},\"contracts/persistent/utils/IMigratableVault.sol\":{\"content\":\"// SPDX-License-Identifier: GPL-3.0\\r\\n\\r\\n/*\\r\\n    This file is part of the Enzyme Protocol.\\r\\n\\r\\n    (c) Enzyme Council <council@enzyme.finance>\\r\\n\\r\\n    For the full license information, please view the LICENSE\\r\\n    file that was distributed with this source code.\\r\\n*/\\r\\n\\r\\npragma solidity 0.6.12;\\r\\n\\r\\n/// @title IMigratableVault Interface\\r\\n/// @author Enzyme Council <security@enzyme.finance>\\r\\n/// @dev DO NOT EDIT CONTRACT\\r\\ninterface IMigratableVault {\\r\\n    function canMigrate(address _who) external view returns (bool canMigrate_);\\r\\n\\r\\n    function init(\\r\\n        address _owner,\\r\\n        address _accessor,\\r\\n        string calldata _fundName\\r\\n    ) external;\\r\\n\\r\\n    function setAccessor(address _nextAccessor) external;\\r\\n\\r\\n    function setVaultLib(address _nextVaultLib) external;\\r\\n}\\r\\n\",\"keccak256\":\"0xe57f17e0b9eaaf0090fb0f9039e0dc60d184a05b1a6b02491787c506b7a4a9db\",\"license\":\"GPL-3.0\"},\"contracts/persistent/vault/VaultLibBase1.sol\":{\"content\":\"// SPDX-License-Identifier: GPL-3.0\\r\\n\\r\\n/*\\r\\n    This file is part of the Enzyme Protocol.\\r\\n\\r\\n    (c) Enzyme Council <council@enzyme.finance>\\r\\n\\r\\n    For the full license information, please view the LICENSE\\r\\n    file that was distributed with this source code.\\r\\n*/\\r\\n\\r\\npragma solidity 0.6.12;\\r\\n\\r\\nimport \\\"./VaultLibBaseCore.sol\\\";\\r\\n\\r\\n/// @title VaultLibBase1 Contract\\r\\n/// @author Enzyme Council <security@enzyme.finance>\\r\\n/// @notice The first implementation of VaultLibBaseCore, with additional events and storage\\r\\n/// @dev All subsequent implementations should inherit the previous implementation,\\r\\n/// e.g., `VaultLibBase2 is VaultLibBase1`\\r\\n/// DO NOT EDIT CONTRACT.\\r\\nabstract contract VaultLibBase1 is VaultLibBaseCore {\\r\\n    event AssetWithdrawn(address indexed asset, address indexed target, uint256 amount);\\r\\n\\r\\n    event TrackedAssetAdded(address asset);\\r\\n\\r\\n    event TrackedAssetRemoved(address asset);\\r\\n\\r\\n    address[] internal trackedAssets;\\r\\n    mapping(address => bool) internal assetToIsTracked;\\r\\n}\\r\\n\",\"keccak256\":\"0xbb9e83c8427fb207c0cb2899fc80767be62f0a76c87dd383f465c15f7e0c4693\",\"license\":\"GPL-3.0\"},\"contracts/persistent/vault/VaultLibBaseCore.sol\":{\"content\":\"// SPDX-License-Identifier: GPL-3.0\\r\\n\\r\\n/*\\r\\n    This file is part of the Enzyme Protocol.\\r\\n\\r\\n    (c) Enzyme Council <council@enzyme.finance>\\r\\n\\r\\n    For the full license information, please view the LICENSE\\r\\n    file that was distributed with this source code.\\r\\n*/\\r\\n\\r\\npragma solidity 0.6.12;\\r\\n\\r\\nimport \\\"../utils/IMigratableVault.sol\\\";\\r\\nimport \\\"./utils/ProxiableVaultLib.sol\\\";\\r\\nimport \\\"./utils/SharesTokenBase.sol\\\";\\r\\n\\r\\n/// @title VaultLibBaseCore Contract\\r\\n/// @author Enzyme Council <security@enzyme.finance>\\r\\n/// @notice A persistent contract containing all required storage variables and\\r\\n/// required functions for a VaultLib implementation\\r\\n/// @dev DO NOT EDIT CONTRACT. If new events or storage are necessary, they should be added to\\r\\n/// a numbered VaultLibBaseXXX that inherits the previous base. See VaultLibBase1.\\r\\nabstract contract VaultLibBaseCore is IMigratableVault, ProxiableVaultLib, SharesTokenBase {\\r\\n    event AccessorSet(address prevAccessor, address nextAccessor);\\r\\n\\r\\n    event MigratorSet(address prevMigrator, address nextMigrator);\\r\\n\\r\\n    event OwnerSet(address prevOwner, address nextOwner);\\r\\n\\r\\n    event VaultLibSet(address prevVaultLib, address nextVaultLib);\\r\\n\\r\\n    address internal accessor;\\r\\n    address internal creator;\\r\\n    address internal migrator;\\r\\n    address internal owner;\\r\\n\\r\\n    // EXTERNAL FUNCTIONS\\r\\n\\r\\n    /// @notice Initializes the VaultProxy with core configuration\\r\\n    /// @param _owner The address to set as the fund owner\\r\\n    /// @param _accessor The address to set as the permissioned accessor of the VaultLib\\r\\n    /// @param _fundName The name of the fund\\r\\n    /// @dev Serves as a per-proxy pseudo-constructor\\r\\n    function init(\\r\\n        address _owner,\\r\\n        address _accessor,\\r\\n        string calldata _fundName\\r\\n    ) external override {\\r\\n        require(creator == address(0), \\\"init: Proxy already initialized\\\");\\r\\n        creator = msg.sender;\\r\\n        sharesName = _fundName;\\r\\n\\r\\n        __setAccessor(_accessor);\\r\\n        __setOwner(_owner);\\r\\n\\r\\n        emit VaultLibSet(address(0), getVaultLib());\\r\\n    }\\r\\n\\r\\n    /// @notice Sets the permissioned accessor of the VaultLib\\r\\n    /// @param _nextAccessor The address to set as the permissioned accessor of the VaultLib\\r\\n    function setAccessor(address _nextAccessor) external override {\\r\\n        require(msg.sender == creator, \\\"setAccessor: Only callable by the contract creator\\\");\\r\\n\\r\\n        __setAccessor(_nextAccessor);\\r\\n    }\\r\\n\\r\\n    /// @notice Sets the VaultLib target for the VaultProxy\\r\\n    /// @param _nextVaultLib The address to set as the VaultLib\\r\\n    /// @dev This function is absolutely critical. __updateCodeAddress() validates that the\\r\\n    /// target is a valid Proxiable contract instance.\\r\\n    /// Does not block _nextVaultLib from being the same as the current VaultLib\\r\\n    function setVaultLib(address _nextVaultLib) external override {\\r\\n        require(msg.sender == creator, \\\"setVaultLib: Only callable by the contract creator\\\");\\r\\n\\r\\n        address prevVaultLib = getVaultLib();\\r\\n\\r\\n        __updateCodeAddress(_nextVaultLib);\\r\\n\\r\\n        emit VaultLibSet(prevVaultLib, _nextVaultLib);\\r\\n    }\\r\\n\\r\\n    // PUBLIC FUNCTIONS\\r\\n\\r\\n    /// @notice Checks whether an account is allowed to migrate the VaultProxy\\r\\n    /// @param _who The account to check\\r\\n    /// @return canMigrate_ True if the account is allowed to migrate the VaultProxy\\r\\n    function canMigrate(address _who) public view virtual override returns (bool canMigrate_) {\\r\\n        return _who == owner || _who == migrator;\\r\\n    }\\r\\n\\r\\n    /// @notice Gets the VaultLib target for the VaultProxy\\r\\n    /// @return vaultLib_ The address of the VaultLib target\\r\\n    function getVaultLib() public view returns (address vaultLib_) {\\r\\n        assembly {\\r\\n            // solium-disable-line\\r\\n            vaultLib_ := sload(0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc)\\r\\n        }\\r\\n        return vaultLib_;\\r\\n    }\\r\\n\\r\\n    // INTERNAL FUNCTIONS\\r\\n\\r\\n    /// @dev Helper to set the permissioned accessor of the VaultProxy.\\r\\n    /// Does not prevent the prevAccessor from being the _nextAccessor.\\r\\n    function __setAccessor(address _nextAccessor) internal {\\r\\n        require(_nextAccessor != address(0), \\\"__setAccessor: _nextAccessor cannot be empty\\\");\\r\\n        address prevAccessor = accessor;\\r\\n\\r\\n        accessor = _nextAccessor;\\r\\n\\r\\n        emit AccessorSet(prevAccessor, _nextAccessor);\\r\\n    }\\r\\n\\r\\n    /// @dev Helper to set the owner of the VaultProxy\\r\\n    function __setOwner(address _nextOwner) internal {\\r\\n        require(_nextOwner != address(0), \\\"__setOwner: _nextOwner cannot be empty\\\");\\r\\n        address prevOwner = owner;\\r\\n        require(_nextOwner != prevOwner, \\\"__setOwner: _nextOwner is the current owner\\\");\\r\\n\\r\\n        owner = _nextOwner;\\r\\n\\r\\n        emit OwnerSet(prevOwner, _nextOwner);\\r\\n    }\\r\\n}\\r\\n\",\"keccak256\":\"0x206486607b270a1a45fda093d0f7c92a7b371780a58b54fe1c84263864c59d24\",\"license\":\"GPL-3.0\"},\"contracts/persistent/vault/utils/ProxiableVaultLib.sol\":{\"content\":\"// SPDX-License-Identifier: GPL-3.0\\r\\n\\r\\n/*\\r\\n    This file is part of the Enzyme Protocol.\\r\\n\\r\\n    (c) Enzyme Council <council@enzyme.finance>\\r\\n\\r\\n    For the full license information, please view the LICENSE\\r\\n    file that was distributed with this source code.\\r\\n*/\\r\\n\\r\\npragma solidity 0.6.12;\\r\\n\\r\\n/// @title ProxiableVaultLib Contract\\r\\n/// @author Enzyme Council <security@enzyme.finance>\\r\\n/// @notice A contract that defines the upgrade behavior for VaultLib instances\\r\\n/// @dev The recommended implementation of the target of a proxy according to EIP-1822 and EIP-1967\\r\\n/// Code position in storage is `bytes32(uint256(keccak256('eip1967.proxy.implementation')) - 1)`,\\r\\n/// which is \\\"0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc\\\".\\r\\nabstract contract ProxiableVaultLib {\\r\\n    /// @dev Updates the target of the proxy to be the contract at _nextVaultLib\\r\\n    function __updateCodeAddress(address _nextVaultLib) internal {\\r\\n        require(\\r\\n            bytes32(0x027b9570e9fedc1a80b937ae9a06861e5faef3992491af30b684a64b3fbec7a5) ==\\r\\n                ProxiableVaultLib(_nextVaultLib).proxiableUUID(),\\r\\n            \\\"__updateCodeAddress: _nextVaultLib not compatible\\\"\\r\\n        );\\r\\n        assembly {\\r\\n            // solium-disable-line\\r\\n            sstore(\\r\\n                0x360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc,\\r\\n                _nextVaultLib\\r\\n            )\\r\\n        }\\r\\n    }\\r\\n\\r\\n    /// @notice Returns a unique bytes32 hash for VaultLib instances\\r\\n    /// @return uuid_ The bytes32 hash representing the UUID\\r\\n    /// @dev The UUID is `bytes32(keccak256('mln.proxiable.vaultlib'))`\\r\\n    function proxiableUUID() public pure returns (bytes32 uuid_) {\\r\\n        return 0x027b9570e9fedc1a80b937ae9a06861e5faef3992491af30b684a64b3fbec7a5;\\r\\n    }\\r\\n}\\r\\n\",\"keccak256\":\"0x6ec3a808ec9b166760fbf0f17bfff252eef0a540ed61aff631bf1dcaecee57c8\",\"license\":\"GPL-3.0\"},\"contracts/persistent/vault/utils/SharesTokenBase.sol\":{\"content\":\"// SPDX-License-Identifier: GPL-3.0\\r\\n\\r\\n/*\\r\\n    This file is part of the Enzyme Protocol.\\r\\n\\r\\n    (c) Enzyme Council <council@enzyme.finance>\\r\\n\\r\\n    For the full license information, please view the LICENSE\\r\\n    file that was distributed with this source code.\\r\\n*/\\r\\n\\r\\npragma solidity 0.6.12;\\r\\n\\r\\nimport \\\"./VaultLibSafeMath.sol\\\";\\r\\n\\r\\n/// @title StandardERC20 Contract\\r\\n/// @author Enzyme Council <security@enzyme.finance>\\r\\n/// @notice Contains the storage, events, and default logic of an ERC20-compliant contract.\\r\\n/// @dev The logic can be overridden by VaultLib implementations.\\r\\n/// Adapted from OpenZeppelin 3.2.0.\\r\\n/// DO NOT EDIT THIS CONTRACT.\\r\\nabstract contract SharesTokenBase {\\r\\n    using VaultLibSafeMath for uint256;\\r\\n\\r\\n    event Approval(address indexed owner, address indexed spender, uint256 value);\\r\\n\\r\\n    event Transfer(address indexed from, address indexed to, uint256 value);\\r\\n\\r\\n    string internal sharesName;\\r\\n    string internal sharesSymbol;\\r\\n    uint256 internal sharesTotalSupply;\\r\\n    mapping(address => uint256) internal sharesBalances;\\r\\n    mapping(address => mapping(address => uint256)) internal sharesAllowances;\\r\\n\\r\\n    // EXTERNAL FUNCTIONS\\r\\n\\r\\n    /// @dev Standard implementation of ERC20's approve(). Can be overridden.\\r\\n    function approve(address _spender, uint256 _amount) public virtual returns (bool) {\\r\\n        __approve(msg.sender, _spender, _amount);\\r\\n        return true;\\r\\n    }\\r\\n\\r\\n    /// @dev Standard implementation of ERC20's transfer(). Can be overridden.\\r\\n    function transfer(address _recipient, uint256 _amount) public virtual returns (bool) {\\r\\n        __transfer(msg.sender, _recipient, _amount);\\r\\n        return true;\\r\\n    }\\r\\n\\r\\n    /// @dev Standard implementation of ERC20's transferFrom(). Can be overridden.\\r\\n    function transferFrom(\\r\\n        address _sender,\\r\\n        address _recipient,\\r\\n        uint256 _amount\\r\\n    ) public virtual returns (bool) {\\r\\n        __transfer(_sender, _recipient, _amount);\\r\\n        __approve(\\r\\n            _sender,\\r\\n            msg.sender,\\r\\n            sharesAllowances[_sender][msg.sender].sub(\\r\\n                _amount,\\r\\n                \\\"ERC20: transfer amount exceeds allowance\\\"\\r\\n            )\\r\\n        );\\r\\n        return true;\\r\\n    }\\r\\n\\r\\n    // EXTERNAL FUNCTIONS - VIEW\\r\\n\\r\\n    /// @dev Standard implementation of ERC20's allowance(). Can be overridden.\\r\\n    function allowance(address _owner, address _spender) public view virtual returns (uint256) {\\r\\n        return sharesAllowances[_owner][_spender];\\r\\n    }\\r\\n\\r\\n    /// @dev Standard implementation of ERC20's balanceOf(). Can be overridden.\\r\\n    function balanceOf(address _account) public view virtual returns (uint256) {\\r\\n        return sharesBalances[_account];\\r\\n    }\\r\\n\\r\\n    /// @dev Standard implementation of ERC20's decimals(). Can not be overridden.\\r\\n    function decimals() public pure returns (uint8) {\\r\\n        return 18;\\r\\n    }\\r\\n\\r\\n    /// @dev Standard implementation of ERC20's name(). Can be overridden.\\r\\n    function name() public view virtual returns (string memory) {\\r\\n        return sharesName;\\r\\n    }\\r\\n\\r\\n    /// @dev Standard implementation of ERC20's symbol(). Can be overridden.\\r\\n    function symbol() public view virtual returns (string memory) {\\r\\n        return sharesSymbol;\\r\\n    }\\r\\n\\r\\n    /// @dev Standard implementation of ERC20's totalSupply(). Can be overridden.\\r\\n    function totalSupply() public view virtual returns (uint256) {\\r\\n        return sharesTotalSupply;\\r\\n    }\\r\\n\\r\\n    // INTERNAL FUNCTIONS\\r\\n\\r\\n    /// @dev Helper for approve(). Can be overridden.\\r\\n    function __approve(\\r\\n        address _owner,\\r\\n        address _spender,\\r\\n        uint256 _amount\\r\\n    ) internal virtual {\\r\\n        require(_owner != address(0), \\\"ERC20: approve from the zero address\\\");\\r\\n        require(_spender != address(0), \\\"ERC20: approve to the zero address\\\");\\r\\n\\r\\n        sharesAllowances[_owner][_spender] = _amount;\\r\\n        emit Approval(_owner, _spender, _amount);\\r\\n    }\\r\\n\\r\\n    /// @dev Helper to burn tokens from an account. Can be overridden.\\r\\n    function __burn(address _account, uint256 _amount) internal virtual {\\r\\n        require(_account != address(0), \\\"ERC20: burn from the zero address\\\");\\r\\n\\r\\n        sharesBalances[_account] = sharesBalances[_account].sub(\\r\\n            _amount,\\r\\n            \\\"ERC20: burn amount exceeds balance\\\"\\r\\n        );\\r\\n        sharesTotalSupply = sharesTotalSupply.sub(_amount);\\r\\n        emit Transfer(_account, address(0), _amount);\\r\\n    }\\r\\n\\r\\n    /// @dev Helper to mint tokens to an account. Can be overridden.\\r\\n    function __mint(address _account, uint256 _amount) internal virtual {\\r\\n        require(_account != address(0), \\\"ERC20: mint to the zero address\\\");\\r\\n\\r\\n        sharesTotalSupply = sharesTotalSupply.add(_amount);\\r\\n        sharesBalances[_account] = sharesBalances[_account].add(_amount);\\r\\n        emit Transfer(address(0), _account, _amount);\\r\\n    }\\r\\n\\r\\n    /// @dev Helper to transfer tokens between accounts. Can be overridden.\\r\\n    function __transfer(\\r\\n        address _sender,\\r\\n        address _recipient,\\r\\n        uint256 _amount\\r\\n    ) internal virtual {\\r\\n        require(_sender != address(0), \\\"ERC20: transfer from the zero address\\\");\\r\\n        require(_recipient != address(0), \\\"ERC20: transfer to the zero address\\\");\\r\\n\\r\\n        sharesBalances[_sender] = sharesBalances[_sender].sub(\\r\\n            _amount,\\r\\n            \\\"ERC20: transfer amount exceeds balance\\\"\\r\\n        );\\r\\n        sharesBalances[_recipient] = sharesBalances[_recipient].add(_amount);\\r\\n        emit Transfer(_sender, _recipient, _amount);\\r\\n    }\\r\\n}\\r\\n\",\"keccak256\":\"0x1cb3f134df44efec1207191009ab521496e0346634720d114b7b0f49e46c0965\",\"license\":\"GPL-3.0\"},\"contracts/persistent/vault/utils/VaultLibSafeMath.sol\":{\"content\":\"// SPDX-License-Identifier: GPL-3.0\\r\\n\\r\\n/*\\r\\n    This file is part of the Enzyme Protocol.\\r\\n\\r\\n    (c) Enzyme Council <council@enzyme.finance>\\r\\n\\r\\n    For the full license information, please view the LICENSE\\r\\n    file that was distributed with this source code.\\r\\n*/\\r\\n\\r\\npragma solidity 0.6.12;\\r\\n\\r\\n/// @title VaultLibSafeMath library\\r\\n/// @notice A narrowed, verbatim implementation of OpenZeppelin 3.2.0 SafeMath\\r\\n/// for use with VaultLib\\r\\n/// @dev Preferred to importing from npm to guarantee consistent logic and revert reasons\\r\\n/// between VaultLib implementations\\r\\n/// DO NOT EDIT THIS CONTRACT\\r\\nlibrary VaultLibSafeMath {\\r\\n    function add(uint256 a, uint256 b) internal pure returns (uint256) {\\r\\n        uint256 c = a + b;\\r\\n        require(c >= a, \\\"VaultLibSafeMath: addition overflow\\\");\\r\\n\\r\\n        return c;\\r\\n    }\\r\\n\\r\\n    function sub(uint256 a, uint256 b) internal pure returns (uint256) {\\r\\n        return sub(a, b, \\\"VaultLibSafeMath: subtraction overflow\\\");\\r\\n    }\\r\\n\\r\\n    function sub(\\r\\n        uint256 a,\\r\\n        uint256 b,\\r\\n        string memory errorMessage\\r\\n    ) internal pure returns (uint256) {\\r\\n        require(b <= a, errorMessage);\\r\\n        uint256 c = a - b;\\r\\n\\r\\n        return c;\\r\\n    }\\r\\n\\r\\n    function mul(uint256 a, uint256 b) internal pure returns (uint256) {\\r\\n        if (a == 0) {\\r\\n            return 0;\\r\\n        }\\r\\n\\r\\n        uint256 c = a * b;\\r\\n        require(c / a == b, \\\"VaultLibSafeMath: multiplication overflow\\\");\\r\\n\\r\\n        return c;\\r\\n    }\\r\\n\\r\\n    function div(uint256 a, uint256 b) internal pure returns (uint256) {\\r\\n        return div(a, b, \\\"VaultLibSafeMath: division by zero\\\");\\r\\n    }\\r\\n\\r\\n    function div(\\r\\n        uint256 a,\\r\\n        uint256 b,\\r\\n        string memory errorMessage\\r\\n    ) internal pure returns (uint256) {\\r\\n        require(b > 0, errorMessage);\\r\\n        uint256 c = a / b;\\r\\n\\r\\n        return c;\\r\\n    }\\r\\n\\r\\n    function mod(uint256 a, uint256 b) internal pure returns (uint256) {\\r\\n        return mod(a, b, \\\"VaultLibSafeMath: modulo by zero\\\");\\r\\n    }\\r\\n\\r\\n    function mod(\\r\\n        uint256 a,\\r\\n        uint256 b,\\r\\n        string memory errorMessage\\r\\n    ) internal pure returns (uint256) {\\r\\n        require(b != 0, errorMessage);\\r\\n        return a % b;\\r\\n    }\\r\\n}\\r\\n\",\"keccak256\":\"0x70596b88aab394afcda5ff7c6e539dbd8d72e1740ef324bd9dcf7d9e217810d1\",\"license\":\"GPL-3.0\"},\"contracts/release/core/fund/vault/IVault.sol\":{\"content\":\"// SPDX-License-Identifier: GPL-3.0\\r\\n\\r\\n/*\\r\\n    This file is part of the Enzyme Protocol.\\r\\n\\r\\n    (c) Enzyme Council <council@enzyme.finance>\\r\\n\\r\\n    For the full license information, please view the LICENSE\\r\\n    file that was distributed with this source code.\\r\\n*/\\r\\n\\r\\npragma solidity 0.6.12;\\r\\n\\r\\nimport \\\"../../../../persistent/utils/IMigratableVault.sol\\\";\\r\\n\\r\\n/// @title IVault Interface\\r\\n/// @author Enzyme Council <security@enzyme.finance>\\r\\ninterface IVault is IMigratableVault {\\r\\n    function addTrackedAsset(address) external;\\r\\n\\r\\n    function approveAssetSpender(\\r\\n        address,\\r\\n        address,\\r\\n        uint256\\r\\n    ) external;\\r\\n\\r\\n    function burnShares(address, uint256) external;\\r\\n\\r\\n    function callOnContract(address, bytes calldata) external;\\r\\n\\r\\n    function getAccessor() external view returns (address);\\r\\n\\r\\n    function getOwner() external view returns (address);\\r\\n\\r\\n    function getTrackedAssets() external view returns (address[] memory);\\r\\n\\r\\n    function isTrackedAsset(address) external view returns (bool);\\r\\n\\r\\n    function mintShares(address, uint256) external;\\r\\n\\r\\n    function removeTrackedAsset(address) external;\\r\\n\\r\\n    function transferShares(\\r\\n        address,\\r\\n        address,\\r\\n        uint256\\r\\n    ) external;\\r\\n\\r\\n    function withdrawAssetTo(\\r\\n        address,\\r\\n        address,\\r\\n        uint256\\r\\n    ) external;\\r\\n}\\r\\n\",\"keccak256\":\"0xd3e432ce41dbb0fc8ae5aa16ab0e053f889caaf803b01743f829e31f644dfb9b\",\"license\":\"GPL-3.0\"},\"contracts/release/core/fund/vault/VaultLib.sol\":{\"content\":\"// SPDX-License-Identifier: GPL-3.0\\r\\n\\r\\n/*\\r\\n    This file is part of the Enzyme Protocol.\\r\\n\\r\\n    (c) Enzyme Council <council@enzyme.finance>\\r\\n\\r\\n    For the full license information, please view the LICENSE\\r\\n    file that was distributed with this source code.\\r\\n*/\\r\\n\\r\\npragma solidity 0.6.12;\\r\\n\\r\\nimport \\\"@openzeppelin/contracts/token/ERC20/ERC20.sol\\\";\\r\\nimport \\\"@openzeppelin/contracts/token/ERC20/SafeERC20.sol\\\";\\r\\nimport \\\"../../../../persistent/dispatcher/IDispatcher.sol\\\";\\r\\nimport \\\"../../../../persistent/vault/VaultLibBase1.sol\\\";\\r\\nimport \\\"./IVault.sol\\\";\\r\\n\\r\\n/// @title VaultLib Contract\\r\\n/// @author Enzyme Council <security@enzyme.finance>\\r\\n/// @notice The per-release proxiable library contract for VaultProxy\\r\\n/// @dev The difference in terminology between \\\"asset\\\" and \\\"trackedAsset\\\" is intentional.\\r\\n/// A fund might actually have asset balances of un-tracked assets,\\r\\n/// but only tracked assets are used in gav calculations.\\r\\n/// Note that this contract inherits VaultLibSafeMath (a verbatim Open Zeppelin SafeMath copy)\\r\\n/// from SharesTokenBase via VaultLibBase1\\r\\ncontract VaultLib is VaultLibBase1, IVault {\\r\\n    using SafeERC20 for ERC20;\\r\\n\\r\\n    // Before updating TRACKED_ASSETS_LIMIT in the future, it is important to consider:\\r\\n    // 1. The highest tracked assets limit ever allowed in the protocol\\r\\n    // 2. That the next value will need to be respected by all future releases\\r\\n    uint256 private constant TRACKED_ASSETS_LIMIT = 20;\\r\\n\\r\\n    modifier onlyAccessor() {\\r\\n        require(msg.sender == accessor, \\\"Only the designated accessor can make this call\\\");\\r\\n        _;\\r\\n    }\\r\\n\\r\\n    /////////////\\r\\n    // GENERAL //\\r\\n    /////////////\\r\\n\\r\\n    /// @notice Sets the account that is allowed to migrate a fund to new releases\\r\\n    /// @param _nextMigrator The account to set as the allowed migrator\\r\\n    /// @dev Set to address(0) to remove the migrator.\\r\\n    function setMigrator(address _nextMigrator) external {\\r\\n        require(msg.sender == owner, \\\"setMigrator: Only the owner can call this function\\\");\\r\\n        address prevMigrator = migrator;\\r\\n        require(_nextMigrator != prevMigrator, \\\"setMigrator: Value already set\\\");\\r\\n\\r\\n        migrator = _nextMigrator;\\r\\n\\r\\n        emit MigratorSet(prevMigrator, _nextMigrator);\\r\\n    }\\r\\n\\r\\n    ///////////\\r\\n    // VAULT //\\r\\n    ///////////\\r\\n\\r\\n    /// @notice Adds a tracked asset to the fund\\r\\n    /// @param _asset The asset to add\\r\\n    /// @dev Allows addition of already tracked assets to fail silently.\\r\\n    function addTrackedAsset(address _asset) external override onlyAccessor {\\r\\n        if (!isTrackedAsset(_asset)) {\\r\\n            require(\\r\\n                trackedAssets.length < TRACKED_ASSETS_LIMIT,\\r\\n                \\\"addTrackedAsset: Limit exceeded\\\"\\r\\n            );\\r\\n\\r\\n            assetToIsTracked[_asset] = true;\\r\\n            trackedAssets.push(_asset);\\r\\n\\r\\n            emit TrackedAssetAdded(_asset);\\r\\n        }\\r\\n    }\\r\\n\\r\\n    /// @notice Grants an allowance to a spender to use the fund's asset\\r\\n    /// @param _asset The asset for which to grant an allowance\\r\\n    /// @param _target The spender of the allowance\\r\\n    /// @param _amount The amount of the allowance\\r\\n    function approveAssetSpender(\\r\\n        address _asset,\\r\\n        address _target,\\r\\n        uint256 _amount\\r\\n    ) external override onlyAccessor {\\r\\n        ERC20 assetContract = ERC20(_asset);\\r\\n        if (assetContract.balanceOf(_target) > 0) {\\r\\n            assetContract.safeApprove(_target, 0);\\r\\n        }\\r\\n        assetContract.safeApprove(_target, _amount);\\r\\n    }\\r\\n\\r\\n    /// @notice Makes an arbitrary call with this contract as the sender\\r\\n    /// @param _contract The contract to call\\r\\n    /// @param _callData The call data for the call\\r\\n    function callOnContract(address _contract, bytes calldata _callData)\\r\\n        external\\r\\n        override\\r\\n        onlyAccessor\\r\\n    {\\r\\n        (bool success, bytes memory returnData) = _contract.call(_callData);\\r\\n        require(success, string(returnData));\\r\\n    }\\r\\n\\r\\n    /// @notice Removes a tracked asset from the fund\\r\\n    /// @param _asset The asset to remove\\r\\n    function removeTrackedAsset(address _asset) external override onlyAccessor {\\r\\n        __removeTrackedAsset(_asset);\\r\\n    }\\r\\n\\r\\n    /// @notice Withdraws an asset from the VaultProxy to a given account\\r\\n    /// @param _asset The asset to withdraw\\r\\n    /// @param _target The account to which to withdraw the asset\\r\\n    /// @param _amount The amount of asset to withdraw\\r\\n    function withdrawAssetTo(\\r\\n        address _asset,\\r\\n        address _target,\\r\\n        uint256 _amount\\r\\n    ) external override onlyAccessor {\\r\\n        ERC20(_asset).safeTransfer(_target, _amount);\\r\\n\\r\\n        emit AssetWithdrawn(_asset, _target, _amount);\\r\\n    }\\r\\n\\r\\n    /// @dev Helper to the get the Vault's balance of a given asset\\r\\n    function __getAssetBalance(address _asset) private view returns (uint256 balance_) {\\r\\n        return ERC20(_asset).balanceOf(address(this));\\r\\n    }\\r\\n\\r\\n    /// @dev Helper to remove an asset from a fund's tracked assets.\\r\\n    /// Allows removal of non-tracked asset to fail silently.\\r\\n    function __removeTrackedAsset(address _asset) private {\\r\\n        if (isTrackedAsset(_asset)) {\\r\\n            assetToIsTracked[_asset] = false;\\r\\n\\r\\n            uint256 trackedAssetsCount = trackedAssets.length;\\r\\n            for (uint256 i = 0; i < trackedAssetsCount; i++) {\\r\\n                if (trackedAssets[i] == _asset) {\\r\\n                    if (i < trackedAssetsCount - 1) {\\r\\n                        trackedAssets[i] = trackedAssets[trackedAssetsCount - 1];\\r\\n                    }\\r\\n                    trackedAssets.pop();\\r\\n                    break;\\r\\n                }\\r\\n            }\\r\\n\\r\\n            emit TrackedAssetRemoved(_asset);\\r\\n        }\\r\\n    }\\r\\n\\r\\n    ////////////\\r\\n    // SHARES //\\r\\n    ////////////\\r\\n\\r\\n    /// @notice Burns fund shares from a particular account\\r\\n    /// @param _target The account for which to burn shares\\r\\n    /// @param _amount The amount of shares to burn\\r\\n    function burnShares(address _target, uint256 _amount) external override onlyAccessor {\\r\\n        __burn(_target, _amount);\\r\\n    }\\r\\n\\r\\n    /// @notice Mints fund shares to a particular account\\r\\n    /// @param _target The account for which to burn shares\\r\\n    /// @param _amount The amount of shares to mint\\r\\n    function mintShares(address _target, uint256 _amount) external override onlyAccessor {\\r\\n        __mint(_target, _amount);\\r\\n    }\\r\\n\\r\\n    /// @notice Transfers fund shares from one account to another\\r\\n    /// @param _from The account from which to transfer shares\\r\\n    /// @param _to The account to which to transfer shares\\r\\n    /// @param _amount The amount of shares to transfer\\r\\n    function transferShares(\\r\\n        address _from,\\r\\n        address _to,\\r\\n        uint256 _amount\\r\\n    ) external override onlyAccessor {\\r\\n        __transfer(_from, _to, _amount);\\r\\n    }\\r\\n\\r\\n    // ERC20 overrides\\r\\n\\r\\n    /// @dev Disallows the standard ERC20 approve() function\\r\\n    function approve(address, uint256) public override returns (bool) {\\r\\n        revert(\\\"Unimplemented\\\");\\r\\n    }\\r\\n\\r\\n    /// @notice Gets the `symbol` value of the shares token\\r\\n    /// @return symbol_ The `symbol` value\\r\\n    /// @dev Defers the shares symbol value to the Dispatcher contract\\r\\n    function symbol() public view override returns (string memory symbol_) {\\r\\n        return IDispatcher(creator).getSharesTokenSymbol();\\r\\n    }\\r\\n\\r\\n    /// @dev Disallows the standard ERC20 transfer() function\\r\\n    function transfer(address, uint256) public override returns (bool) {\\r\\n        revert(\\\"Unimplemented\\\");\\r\\n    }\\r\\n\\r\\n    /// @dev Disallows the standard ERC20 transferFrom() function\\r\\n    function transferFrom(\\r\\n        address,\\r\\n        address,\\r\\n        uint256\\r\\n    ) public override returns (bool) {\\r\\n        revert(\\\"Unimplemented\\\");\\r\\n    }\\r\\n\\r\\n    ///////////////////\\r\\n    // STATE GETTERS //\\r\\n    ///////////////////\\r\\n\\r\\n    /// @notice Gets the `accessor` variable\\r\\n    /// @return accessor_ The `accessor` variable value\\r\\n    function getAccessor() external view override returns (address accessor_) {\\r\\n        return accessor;\\r\\n    }\\r\\n\\r\\n    /// @notice Gets the `creator` variable\\r\\n    /// @return creator_ The `creator` variable value\\r\\n    function getCreator() external view returns (address creator_) {\\r\\n        return creator;\\r\\n    }\\r\\n\\r\\n    /// @notice Gets the `migrator` variable\\r\\n    /// @return migrator_ The `migrator` variable value\\r\\n    function getMigrator() external view returns (address migrator_) {\\r\\n        return migrator;\\r\\n    }\\r\\n\\r\\n    /// @notice Gets the `owner` variable\\r\\n    /// @return owner_ The `owner` variable value\\r\\n    function getOwner() external view override returns (address owner_) {\\r\\n        return owner;\\r\\n    }\\r\\n\\r\\n    /// @notice Gets the `trackedAssets` variable\\r\\n    /// @return trackedAssets_ The `trackedAssets` variable value\\r\\n    function getTrackedAssets() external view override returns (address[] memory trackedAssets_) {\\r\\n        return trackedAssets;\\r\\n    }\\r\\n\\r\\n    /// @notice Check whether an address is a tracked asset of the fund\\r\\n    /// @param _asset The address to check\\r\\n    /// @return isTrackedAsset_ True if the address is a tracked asset of the fund\\r\\n    function isTrackedAsset(address _asset) public view override returns (bool isTrackedAsset_) {\\r\\n        return assetToIsTracked[_asset];\\r\\n    }\\r\\n}\\r\\n\",\"keccak256\":\"0xfcf4999cea473da844818fb18e4657210266c7a20f9cb59eccb0e703876c093c\",\"license\":\"GPL-3.0\"}},\"version\":1}",
  "bytecode": "0x608060405234801561001057600080fd5b506122ae806100206000396000f3fe608060405234801561001057600080fd5b50600436106101da5760003560e01c806370a0823111610104578063a90cce4b116100a2578063c6f2a4b411610071578063c6f2a4b414610681578063cd63d578146106b7578063dd62ed3e146106bf578063ee7a7c04146106ed576101da565b8063a90cce4b1461054d578063ab9253ac146105cd578063bfc77beb146105f3578063c4b9737014610629576101da565b80637de07cea116100de5780637de07cea14610517578063893d20e81461053d57806395d89b4114610545578063a9059cbb1461025c576101da565b806370a08231146104a557806370fbf134146104cb578063797ed339146104f1576101da565b80634140d6071161017c57806352d1902d1161014b57806352d1902d146104045780635a53e3481461040c5780635c9a6d3714610414578063682cea191461049d576101da565b80634140d60714610356578063495d753c1461037c5780634ef0762e146103b2578063528c198a146103d8576101da565b806318160ddd116101b857806318160ddd146102c057806323b872dd146102da57806323cf311814610310578063313ce56714610338576101da565b806306fdde03146101df578063095ea7b31461025c5780630ee2cb101461029c575b600080fd5b6101e7610719565b6040805160208082528351818301528351919283929083019185019080838360005b83811015610221578181015183820152602001610209565b50505050905090810190601f16801561024e5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6102886004803603604081101561027257600080fd5b506001600160a01b0381351690602001356107af565b604080519115158252519081900360200190f35b6102a46107ee565b604080516001600160a01b039092168252519081900360200190f35b6102c86107fd565b60408051918252519081900360200190f35b610288600480360360608110156102f057600080fd5b506001600160a01b038135811691602081013590911690604001356107af565b6103366004803603602081101561032657600080fd5b50356001600160a01b0316610803565b005b610340610911565b6040805160ff9092168252519081900360200190f35b6103366004803603602081101561036c57600080fd5b50356001600160a01b0316610916565b6103366004803603606081101561039257600080fd5b506001600160a01b038135811691602081013590911690604001356109bd565b610336600480360360208110156103c857600080fd5b50356001600160a01b0316610a6a565b610336600480360360408110156103ee57600080fd5b506001600160a01b038135169060200135610bb5565b6102c8610c0c565b6102a4610c30565b6103366004803603606081101561042a57600080fd5b6001600160a01b03823581169260208101359091169181019060608101604082013564010000000081111561045e57600080fd5b82018360208201111561047057600080fd5b8035906020019184600183028401116401000000008311171561049257600080fd5b509092509050610c3f565b6102a4610d2d565b6102c8600480360360208110156104bb57600080fd5b50356001600160a01b0316610d52565b610336600480360360208110156104e157600080fd5b50356001600160a01b0316610d6d565b6102886004803603602081101561050757600080fd5b50356001600160a01b0316610dbf565b6102886004803603602081101561052d57600080fd5b50356001600160a01b0316610ddd565b6102a4610e0f565b6101e7610e1e565b6103366004803603604081101561056357600080fd5b6001600160a01b03823516919081019060408101602082013564010000000081111561058e57600080fd5b8201836020820111156105a057600080fd5b803590602001918460018302840111640100000000831117156105c257600080fd5b509092509050610f54565b610336600480360360208110156105e357600080fd5b50356001600160a01b031661109a565b6103366004803603606081101561060957600080fd5b506001600160a01b038135811691602081013590911690604001356110ec565b610631611145565b60408051602080825283518183015283519192839290830191858101910280838360005b8381101561066d578181015183820152602001610655565b505050509050019250505060405180910390f35b6103366004803603606081101561069757600080fd5b506001600160a01b038135811691602081013590911690604001356111a6565b6102a46112a4565b6102c8600480360360408110156106d557600080fd5b506001600160a01b03813581169160200135166112b3565b6103366004803603604081101561070357600080fd5b506001600160a01b0381351690602001356112de565b60008054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156107a55780601f1061077a576101008083540402835291602001916107a5565b820191906000526020600020905b81548152906001019060200180831161078857829003601f168201915b5050505050905090565b6040805162461bcd60e51b815260206004820152600d60248201526c155b9a5b5c1b195b595b9d1959609a1b6044820152905160009181900360640190fd5b6006546001600160a01b031690565b60025490565b6008546001600160a01b0316331461084c5760405162461bcd60e51b81526004018080602001828103825260328152602001806121186032913960400191505060405180910390fd5b6007546001600160a01b039081169082168114156108b1576040805162461bcd60e51b815260206004820152601e60248201527f7365744d69677261746f723a2056616c756520616c7265616479207365740000604482015290519081900360640190fd5b600780546001600160a01b0319166001600160a01b03848116918217909255604080519284168352602083019190915280517f9d0761a1fa4d686cd87f8dbf8ca52f90cf19c3c4dc36e66ebbf08fc5ba203f2c9281900390910190a15050565b601290565b6006546001600160a01b0316331461095f5760405162461bcd60e51b81526004018080602001828103825260328152602001806120946032913960400191505060405180910390fd5b6000610969610d2d565b905061097482611331565b604080516001600160a01b0380841682528416602082015281517fe504a0278c9d64c1a72d2f528a0c5e3686e093fcd478b3b1224a5c6983207df6929181900390910190a15050565b6005546001600160a01b03163314610a065760405162461bcd60e51b815260040180806020018281038252602f8152602001806120c6602f913960400191505060405180910390fd5b610a1a6001600160a01b0384168383611417565b816001600160a01b0316836001600160a01b03167f6f9cbac839b826cc524f53d10416c053fce34ec15fd1001720e777cc49720e76836040518082815260200191505060405180910390a3505050565b6005546001600160a01b03163314610ab35760405162461bcd60e51b815260040180806020018281038252602f8152602001806120c6602f913960400191505060405180910390fd5b610abc81610dbf565b610bb257600954601411610b17576040805162461bcd60e51b815260206004820152601f60248201527f616464547261636b656441737365743a204c696d697420657863656564656400604482015290519081900360640190fd5b6001600160a01b0381166000818152600a60209081526040808320805460ff191660019081179091556009805491820181559093527f6e1540171b6c0c960b71a7020d9f60077f6af931a8bbf590da0223dacf75c7af90920180546001600160a01b03191684179055815192835290517fa0d2bfad19dc0c6970d2a2fcff65458a6d7c4fa3b6d904f44961b2c744bdf5919281900390910190a15b50565b6005546001600160a01b03163314610bfe5760405162461bcd60e51b815260040180806020018281038252602f8152602001806120c6602f913960400191505060405180910390fd5b610c088282611469565b5050565b7f027b9570e9fedc1a80b937ae9a06861e5faef3992491af30b684a64b3fbec7a590565b6005546001600160a01b031690565b6006546001600160a01b031615610c9d576040805162461bcd60e51b815260206004820152601f60248201527f696e69743a2050726f787920616c726561647920696e697469616c697a656400604482015290519081900360640190fd5b600680546001600160a01b03191633179055610cbb60008383611ef2565b50610cc58361154f565b610cce846115f7565b7fe504a0278c9d64c1a72d2f528a0c5e3686e093fcd478b3b1224a5c6983207df66000610cf9610d2d565b60405180836001600160a01b03168152602001826001600160a01b031681526020019250505060405180910390a150505050565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5490565b6001600160a01b031660009081526003602052604090205490565b6005546001600160a01b03163314610db65760405162461bcd60e51b815260040180806020018281038252602f8152602001806120c6602f913960400191505060405180910390fd5b610bb2816116eb565b6001600160a01b03166000908152600a602052604090205460ff1690565b6008546000906001600160a01b0383811691161480610e0957506007546001600160a01b038381169116145b92915050565b6008546001600160a01b031690565b60065460408051625a3d8360e91b815290516060926001600160a01b03169163b47b0600916004808301926000929190829003018186803b158015610e6257600080fd5b505afa158015610e76573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526020811015610e9f57600080fd5b8101908080516040519392919084640100000000821115610ebf57600080fd5b908301906020820185811115610ed457600080fd5b8251640100000000811182820188101715610eee57600080fd5b82525081516020918201929091019080838360005b83811015610f1b578181015183820152602001610f03565b50505050905090810190601f168015610f485780820380516001836020036101000a031916815260200191505b50604052505050905090565b6005546001600160a01b03163314610f9d5760405162461bcd60e51b815260040180806020018281038252602f8152602001806120c6602f913960400191505060405180910390fd5b60006060846001600160a01b03168484604051808383808284376040519201945060009350909150508083038183865af19150503d8060008114610ffd576040519150601f19603f3d011682016040523d82523d6000602084013e611002565b606091505b50915091508181906110925760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561105757818101518382015260200161103f565b50505050905090810190601f1680156110845780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050505050565b6006546001600160a01b031633146110e35760405162461bcd60e51b81526004018080602001828103825260328152602001806121756032913960400191505060405180910390fd5b610bb28161154f565b6005546001600160a01b031633146111355760405162461bcd60e51b815260040180806020018281038252602f8152602001806120c6602f913960400191505060405180910390fd5b611140838383611843565b505050565b606060098054806020026020016040519081016040528092919081815260200182805480156107a557602002820191906000526020600020905b81546001600160a01b0316815260019091019060200180831161117f575050505050905090565b6005546001600160a01b031633146111ef5760405162461bcd60e51b815260040180806020018281038252602f8152602001806120c6602f913960400191505060405180910390fd5b60008390506000816001600160a01b03166370a08231856040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b15801561124357600080fd5b505afa158015611257573d6000803e3d6000fd5b505050506040513d602081101561126d57600080fd5b5051111561128a5761128a6001600160a01b038216846000611995565b61129e6001600160a01b0382168484611995565b50505050565b6007546001600160a01b031690565b6001600160a01b03918216600090815260046020908152604080832093909416825291909152205490565b6005546001600160a01b031633146113275760405162461bcd60e51b815260040180806020018281038252602f8152602001806120c6602f913960400191505060405180910390fd5b610c088282611aa8565b806001600160a01b03166352d1902d6040518163ffffffff1660e01b815260040160206040518083038186803b15801561136a57600080fd5b505afa15801561137e573d6000803e3d6000fd5b505050506040513d602081101561139457600080fd5b50517f027b9570e9fedc1a80b937ae9a06861e5faef3992491af30b684a64b3fbec7a5146113f35760405162461bcd60e51b8152600401808060200182810382526031815260200180611fcb6031913960400191505060405180910390fd5b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc55565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b179052611140908490611b98565b6001600160a01b0382166114c4576040805162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015290519081900360640190fd5b6002546114d19082611c49565b6002556001600160a01b0382166000908152600360205260409020546114f79082611c49565b6001600160a01b03831660008181526003602090815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b6001600160a01b0381166115945760405162461bcd60e51b815260040180806020018281038252602c8152602001806121ed602c913960400191505060405180910390fd5b600580546001600160a01b038381166001600160a01b0319831681179093556040805191909216808252602082019390935281517fb5a9def940973a936e331170816650368964b0602957d4bc60f5ddc2dc1b69cd929181900390910190a15050565b6001600160a01b03811661163c5760405162461bcd60e51b81526004018080602001828103825260268152602001806120226026913960400191505060405180910390fd5b6008546001600160a01b0390811690821681141561168b5760405162461bcd60e51b815260040180806020018281038252602b81526020018061214a602b913960400191505060405180910390fd5b600880546001600160a01b0319166001600160a01b03848116918217909255604080519284168352602083019190915280517f342827c97908e5e2f71151c08502a66d44b6f758e3ac2f1de95f02eb95f0a7359281900390910190a15050565b6116f481610dbf565b15610bb2576001600160a01b0381166000908152600a60205260408120805460ff19169055600954905b8181101561180257826001600160a01b03166009828154811061173d57fe5b6000918252602090912001546001600160a01b031614156117fa57600182038110156117c8576009600183038154811061177357fe5b600091825260209091200154600980546001600160a01b03909216918390811061179957fe5b9060005260206000200160006101000a8154816001600160a01b0302191690836001600160a01b031602179055505b60098054806117d357fe5b600082815260209020810160001990810180546001600160a01b0319169055019055611802565b60010161171e565b50604080516001600160a01b038416815290517f22c4fcf23b40d39b02733ec19a3975b31172f2a5b2ce5d0f1831525276cd71569181900360200190a15050565b6001600160a01b0383166118885760405162461bcd60e51b81526004018080602001828103825260258152602001806121c86025913960400191505060405180910390fd5b6001600160a01b0382166118cd5760405162461bcd60e51b8152600401808060200182810382526023815260200180611f866023913960400191505060405180910390fd5b61190a81604051806060016040528060268152602001611ffc602691396001600160a01b0386166000908152600360205260409020549190611c94565b6001600160a01b0380851660009081526003602052604080822093909355908416815220546119399082611c49565b6001600160a01b0380841660008181526003602090815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b801580611a1b575060408051636eb1769f60e11b81523060048201526001600160a01b03848116602483015291519185169163dd62ed3e91604480820192602092909190829003018186803b1580156119ed57600080fd5b505afa158015611a01573d6000803e3d6000fd5b505050506040513d6020811015611a1757600080fd5b5051155b611a565760405162461bcd60e51b81526004018080602001828103825260368152602001806122436036913960400191505060405180910390fd5b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663095ea7b360e01b179052611140908490611b98565b6001600160a01b038216611aed5760405162461bcd60e51b81526004018080602001828103825260218152602001806121a76021913960400191505060405180910390fd5b611b2a81604051806060016040528060228152602001611fa9602291396001600160a01b0385166000908152600360205260409020549190611c94565b6001600160a01b038316600090815260036020526040902055600254611b509082611cee565b6002556040805182815290516000916001600160a01b038516917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9181900360200190a35050565b6060611bed826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b0316611d139092919063ffffffff16565b80519091501561114057808060200190516020811015611c0c57600080fd5b50516111405760405162461bcd60e51b815260040180806020018281038252602a815260200180612219602a913960400191505060405180910390fd5b600082820183811015611c8d5760405162461bcd60e51b81526004018080602001828103825260238152602001806120f56023913960400191505060405180910390fd5b9392505050565b60008184841115611ce65760405162461bcd60e51b815260206004820181815283516024840152835190928392604490910191908501908083836000831561105757818101518382015260200161103f565b505050900390565b6000611c8d838360405180606001604052806026815260200161206e60269139611c94565b6060611d228484600085611d2a565b949350505050565b606082471015611d6b5760405162461bcd60e51b81526004018080602001828103825260268152602001806120486026913960400191505060405180910390fd5b611d7485611e86565b611dc5576040805162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015290519081900360640190fd5b60006060866001600160a01b031685876040518082805190602001908083835b60208310611e045780518252601f199092019160209182019101611de5565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d8060008114611e66576040519150601f19603f3d011682016040523d82523d6000602084013e611e6b565b606091505b5091509150611e7b828286611e8c565b979650505050505050565b3b151590565b60608315611e9b575081611c8d565b825115611eab5782518084602001fd5b60405162461bcd60e51b815260206004820181815284516024840152845185939192839260440191908501908083836000831561105757818101518382015260200161103f565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10611f335782800160ff19823516178555611f60565b82800160010185558215611f60579182015b82811115611f60578235825591602001919060010190611f45565b50611f6c929150611f70565b5090565b5b80821115611f6c5760008155600101611f7156fe45524332303a207472616e7366657220746f20746865207a65726f206164647265737345524332303a206275726e20616d6f756e7420657863656564732062616c616e63655f5f757064617465436f6465416464726573733a205f6e6578745661756c744c6962206e6f7420636f6d70617469626c6545524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e63655f5f7365744f776e65723a205f6e6578744f776e65722063616e6e6f7420626520656d707479416464726573733a20696e73756666696369656e742062616c616e636520666f722063616c6c5661756c744c6962536166654d6174683a207375627472616374696f6e206f766572666c6f777365745661756c744c69623a204f6e6c792063616c6c61626c652062792074686520636f6e74726163742063726561746f724f6e6c79207468652064657369676e61746564206163636573736f722063616e206d616b6520746869732063616c6c5661756c744c6962536166654d6174683a206164646974696f6e206f766572666c6f777365744d69677261746f723a204f6e6c7920746865206f776e65722063616e2063616c6c20746869732066756e6374696f6e5f5f7365744f776e65723a205f6e6578744f776e6572206973207468652063757272656e74206f776e65727365744163636573736f723a204f6e6c792063616c6c61626c652062792074686520636f6e74726163742063726561746f7245524332303a206275726e2066726f6d20746865207a65726f206164647265737345524332303a207472616e736665722066726f6d20746865207a65726f20616464726573735f5f7365744163636573736f723a205f6e6578744163636573736f722063616e6e6f7420626520656d7074795361666545524332303a204552433230206f7065726174696f6e20646964206e6f7420737563636565645361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f20746f206e6f6e2d7a65726f20616c6c6f77616e6365a2646970667358221220a7b299b04c8d8018bde7f45183ba9c76b985d6d07f18e5508a5116312afcacf764736f6c634300060c0033",
  "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106101da5760003560e01c806370a0823111610104578063a90cce4b116100a2578063c6f2a4b411610071578063c6f2a4b414610681578063cd63d578146106b7578063dd62ed3e146106bf578063ee7a7c04146106ed576101da565b8063a90cce4b1461054d578063ab9253ac146105cd578063bfc77beb146105f3578063c4b9737014610629576101da565b80637de07cea116100de5780637de07cea14610517578063893d20e81461053d57806395d89b4114610545578063a9059cbb1461025c576101da565b806370a08231146104a557806370fbf134146104cb578063797ed339146104f1576101da565b80634140d6071161017c57806352d1902d1161014b57806352d1902d146104045780635a53e3481461040c5780635c9a6d3714610414578063682cea191461049d576101da565b80634140d60714610356578063495d753c1461037c5780634ef0762e146103b2578063528c198a146103d8576101da565b806318160ddd116101b857806318160ddd146102c057806323b872dd146102da57806323cf311814610310578063313ce56714610338576101da565b806306fdde03146101df578063095ea7b31461025c5780630ee2cb101461029c575b600080fd5b6101e7610719565b6040805160208082528351818301528351919283929083019185019080838360005b83811015610221578181015183820152602001610209565b50505050905090810190601f16801561024e5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6102886004803603604081101561027257600080fd5b506001600160a01b0381351690602001356107af565b604080519115158252519081900360200190f35b6102a46107ee565b604080516001600160a01b039092168252519081900360200190f35b6102c86107fd565b60408051918252519081900360200190f35b610288600480360360608110156102f057600080fd5b506001600160a01b038135811691602081013590911690604001356107af565b6103366004803603602081101561032657600080fd5b50356001600160a01b0316610803565b005b610340610911565b6040805160ff9092168252519081900360200190f35b6103366004803603602081101561036c57600080fd5b50356001600160a01b0316610916565b6103366004803603606081101561039257600080fd5b506001600160a01b038135811691602081013590911690604001356109bd565b610336600480360360208110156103c857600080fd5b50356001600160a01b0316610a6a565b610336600480360360408110156103ee57600080fd5b506001600160a01b038135169060200135610bb5565b6102c8610c0c565b6102a4610c30565b6103366004803603606081101561042a57600080fd5b6001600160a01b03823581169260208101359091169181019060608101604082013564010000000081111561045e57600080fd5b82018360208201111561047057600080fd5b8035906020019184600183028401116401000000008311171561049257600080fd5b509092509050610c3f565b6102a4610d2d565b6102c8600480360360208110156104bb57600080fd5b50356001600160a01b0316610d52565b610336600480360360208110156104e157600080fd5b50356001600160a01b0316610d6d565b6102886004803603602081101561050757600080fd5b50356001600160a01b0316610dbf565b6102886004803603602081101561052d57600080fd5b50356001600160a01b0316610ddd565b6102a4610e0f565b6101e7610e1e565b6103366004803603604081101561056357600080fd5b6001600160a01b03823516919081019060408101602082013564010000000081111561058e57600080fd5b8201836020820111156105a057600080fd5b803590602001918460018302840111640100000000831117156105c257600080fd5b509092509050610f54565b610336600480360360208110156105e357600080fd5b50356001600160a01b031661109a565b6103366004803603606081101561060957600080fd5b506001600160a01b038135811691602081013590911690604001356110ec565b610631611145565b60408051602080825283518183015283519192839290830191858101910280838360005b8381101561066d578181015183820152602001610655565b505050509050019250505060405180910390f35b6103366004803603606081101561069757600080fd5b506001600160a01b038135811691602081013590911690604001356111a6565b6102a46112a4565b6102c8600480360360408110156106d557600080fd5b506001600160a01b03813581169160200135166112b3565b6103366004803603604081101561070357600080fd5b506001600160a01b0381351690602001356112de565b60008054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156107a55780601f1061077a576101008083540402835291602001916107a5565b820191906000526020600020905b81548152906001019060200180831161078857829003601f168201915b5050505050905090565b6040805162461bcd60e51b815260206004820152600d60248201526c155b9a5b5c1b195b595b9d1959609a1b6044820152905160009181900360640190fd5b6006546001600160a01b031690565b60025490565b6008546001600160a01b0316331461084c5760405162461bcd60e51b81526004018080602001828103825260328152602001806121186032913960400191505060405180910390fd5b6007546001600160a01b039081169082168114156108b1576040805162461bcd60e51b815260206004820152601e60248201527f7365744d69677261746f723a2056616c756520616c7265616479207365740000604482015290519081900360640190fd5b600780546001600160a01b0319166001600160a01b03848116918217909255604080519284168352602083019190915280517f9d0761a1fa4d686cd87f8dbf8ca52f90cf19c3c4dc36e66ebbf08fc5ba203f2c9281900390910190a15050565b601290565b6006546001600160a01b0316331461095f5760405162461bcd60e51b81526004018080602001828103825260328152602001806120946032913960400191505060405180910390fd5b6000610969610d2d565b905061097482611331565b604080516001600160a01b0380841682528416602082015281517fe504a0278c9d64c1a72d2f528a0c5e3686e093fcd478b3b1224a5c6983207df6929181900390910190a15050565b6005546001600160a01b03163314610a065760405162461bcd60e51b815260040180806020018281038252602f8152602001806120c6602f913960400191505060405180910390fd5b610a1a6001600160a01b0384168383611417565b816001600160a01b0316836001600160a01b03167f6f9cbac839b826cc524f53d10416c053fce34ec15fd1001720e777cc49720e76836040518082815260200191505060405180910390a3505050565b6005546001600160a01b03163314610ab35760405162461bcd60e51b815260040180806020018281038252602f8152602001806120c6602f913960400191505060405180910390fd5b610abc81610dbf565b610bb257600954601411610b17576040805162461bcd60e51b815260206004820152601f60248201527f616464547261636b656441737365743a204c696d697420657863656564656400604482015290519081900360640190fd5b6001600160a01b0381166000818152600a60209081526040808320805460ff191660019081179091556009805491820181559093527f6e1540171b6c0c960b71a7020d9f60077f6af931a8bbf590da0223dacf75c7af90920180546001600160a01b03191684179055815192835290517fa0d2bfad19dc0c6970d2a2fcff65458a6d7c4fa3b6d904f44961b2c744bdf5919281900390910190a15b50565b6005546001600160a01b03163314610bfe5760405162461bcd60e51b815260040180806020018281038252602f8152602001806120c6602f913960400191505060405180910390fd5b610c088282611469565b5050565b7f027b9570e9fedc1a80b937ae9a06861e5faef3992491af30b684a64b3fbec7a590565b6005546001600160a01b031690565b6006546001600160a01b031615610c9d576040805162461bcd60e51b815260206004820152601f60248201527f696e69743a2050726f787920616c726561647920696e697469616c697a656400604482015290519081900360640190fd5b600680546001600160a01b03191633179055610cbb60008383611ef2565b50610cc58361154f565b610cce846115f7565b7fe504a0278c9d64c1a72d2f528a0c5e3686e093fcd478b3b1224a5c6983207df66000610cf9610d2d565b60405180836001600160a01b03168152602001826001600160a01b031681526020019250505060405180910390a150505050565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc5490565b6001600160a01b031660009081526003602052604090205490565b6005546001600160a01b03163314610db65760405162461bcd60e51b815260040180806020018281038252602f8152602001806120c6602f913960400191505060405180910390fd5b610bb2816116eb565b6001600160a01b03166000908152600a602052604090205460ff1690565b6008546000906001600160a01b0383811691161480610e0957506007546001600160a01b038381169116145b92915050565b6008546001600160a01b031690565b60065460408051625a3d8360e91b815290516060926001600160a01b03169163b47b0600916004808301926000929190829003018186803b158015610e6257600080fd5b505afa158015610e76573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526020811015610e9f57600080fd5b8101908080516040519392919084640100000000821115610ebf57600080fd5b908301906020820185811115610ed457600080fd5b8251640100000000811182820188101715610eee57600080fd5b82525081516020918201929091019080838360005b83811015610f1b578181015183820152602001610f03565b50505050905090810190601f168015610f485780820380516001836020036101000a031916815260200191505b50604052505050905090565b6005546001600160a01b03163314610f9d5760405162461bcd60e51b815260040180806020018281038252602f8152602001806120c6602f913960400191505060405180910390fd5b60006060846001600160a01b03168484604051808383808284376040519201945060009350909150508083038183865af19150503d8060008114610ffd576040519150601f19603f3d011682016040523d82523d6000602084013e611002565b606091505b50915091508181906110925760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561105757818101518382015260200161103f565b50505050905090810190601f1680156110845780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b505050505050565b6006546001600160a01b031633146110e35760405162461bcd60e51b81526004018080602001828103825260328152602001806121756032913960400191505060405180910390fd5b610bb28161154f565b6005546001600160a01b031633146111355760405162461bcd60e51b815260040180806020018281038252602f8152602001806120c6602f913960400191505060405180910390fd5b611140838383611843565b505050565b606060098054806020026020016040519081016040528092919081815260200182805480156107a557602002820191906000526020600020905b81546001600160a01b0316815260019091019060200180831161117f575050505050905090565b6005546001600160a01b031633146111ef5760405162461bcd60e51b815260040180806020018281038252602f8152602001806120c6602f913960400191505060405180910390fd5b60008390506000816001600160a01b03166370a08231856040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b15801561124357600080fd5b505afa158015611257573d6000803e3d6000fd5b505050506040513d602081101561126d57600080fd5b5051111561128a5761128a6001600160a01b038216846000611995565b61129e6001600160a01b0382168484611995565b50505050565b6007546001600160a01b031690565b6001600160a01b03918216600090815260046020908152604080832093909416825291909152205490565b6005546001600160a01b031633146113275760405162461bcd60e51b815260040180806020018281038252602f8152602001806120c6602f913960400191505060405180910390fd5b610c088282611aa8565b806001600160a01b03166352d1902d6040518163ffffffff1660e01b815260040160206040518083038186803b15801561136a57600080fd5b505afa15801561137e573d6000803e3d6000fd5b505050506040513d602081101561139457600080fd5b50517f027b9570e9fedc1a80b937ae9a06861e5faef3992491af30b684a64b3fbec7a5146113f35760405162461bcd60e51b8152600401808060200182810382526031815260200180611fcb6031913960400191505060405180910390fd5b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc55565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b179052611140908490611b98565b6001600160a01b0382166114c4576040805162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015290519081900360640190fd5b6002546114d19082611c49565b6002556001600160a01b0382166000908152600360205260409020546114f79082611c49565b6001600160a01b03831660008181526003602090815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b6001600160a01b0381166115945760405162461bcd60e51b815260040180806020018281038252602c8152602001806121ed602c913960400191505060405180910390fd5b600580546001600160a01b038381166001600160a01b0319831681179093556040805191909216808252602082019390935281517fb5a9def940973a936e331170816650368964b0602957d4bc60f5ddc2dc1b69cd929181900390910190a15050565b6001600160a01b03811661163c5760405162461bcd60e51b81526004018080602001828103825260268152602001806120226026913960400191505060405180910390fd5b6008546001600160a01b0390811690821681141561168b5760405162461bcd60e51b815260040180806020018281038252602b81526020018061214a602b913960400191505060405180910390fd5b600880546001600160a01b0319166001600160a01b03848116918217909255604080519284168352602083019190915280517f342827c97908e5e2f71151c08502a66d44b6f758e3ac2f1de95f02eb95f0a7359281900390910190a15050565b6116f481610dbf565b15610bb2576001600160a01b0381166000908152600a60205260408120805460ff19169055600954905b8181101561180257826001600160a01b03166009828154811061173d57fe5b6000918252602090912001546001600160a01b031614156117fa57600182038110156117c8576009600183038154811061177357fe5b600091825260209091200154600980546001600160a01b03909216918390811061179957fe5b9060005260206000200160006101000a8154816001600160a01b0302191690836001600160a01b031602179055505b60098054806117d357fe5b600082815260209020810160001990810180546001600160a01b0319169055019055611802565b60010161171e565b50604080516001600160a01b038416815290517f22c4fcf23b40d39b02733ec19a3975b31172f2a5b2ce5d0f1831525276cd71569181900360200190a15050565b6001600160a01b0383166118885760405162461bcd60e51b81526004018080602001828103825260258152602001806121c86025913960400191505060405180910390fd5b6001600160a01b0382166118cd5760405162461bcd60e51b8152600401808060200182810382526023815260200180611f866023913960400191505060405180910390fd5b61190a81604051806060016040528060268152602001611ffc602691396001600160a01b0386166000908152600360205260409020549190611c94565b6001600160a01b0380851660009081526003602052604080822093909355908416815220546119399082611c49565b6001600160a01b0380841660008181526003602090815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b801580611a1b575060408051636eb1769f60e11b81523060048201526001600160a01b03848116602483015291519185169163dd62ed3e91604480820192602092909190829003018186803b1580156119ed57600080fd5b505afa158015611a01573d6000803e3d6000fd5b505050506040513d6020811015611a1757600080fd5b5051155b611a565760405162461bcd60e51b81526004018080602001828103825260368152602001806122436036913960400191505060405180910390fd5b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663095ea7b360e01b179052611140908490611b98565b6001600160a01b038216611aed5760405162461bcd60e51b81526004018080602001828103825260218152602001806121a76021913960400191505060405180910390fd5b611b2a81604051806060016040528060228152602001611fa9602291396001600160a01b0385166000908152600360205260409020549190611c94565b6001600160a01b038316600090815260036020526040902055600254611b509082611cee565b6002556040805182815290516000916001600160a01b038516917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9181900360200190a35050565b6060611bed826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b0316611d139092919063ffffffff16565b80519091501561114057808060200190516020811015611c0c57600080fd5b50516111405760405162461bcd60e51b815260040180806020018281038252602a815260200180612219602a913960400191505060405180910390fd5b600082820183811015611c8d5760405162461bcd60e51b81526004018080602001828103825260238152602001806120f56023913960400191505060405180910390fd5b9392505050565b60008184841115611ce65760405162461bcd60e51b815260206004820181815283516024840152835190928392604490910191908501908083836000831561105757818101518382015260200161103f565b505050900390565b6000611c8d838360405180606001604052806026815260200161206e60269139611c94565b6060611d228484600085611d2a565b949350505050565b606082471015611d6b5760405162461bcd60e51b81526004018080602001828103825260268152602001806120486026913960400191505060405180910390fd5b611d7485611e86565b611dc5576040805162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015290519081900360640190fd5b60006060866001600160a01b031685876040518082805190602001908083835b60208310611e045780518252601f199092019160209182019101611de5565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d8060008114611e66576040519150601f19603f3d011682016040523d82523d6000602084013e611e6b565b606091505b5091509150611e7b828286611e8c565b979650505050505050565b3b151590565b60608315611e9b575081611c8d565b825115611eab5782518084602001fd5b60405162461bcd60e51b815260206004820181815284516024840152845185939192839260440191908501908083836000831561105757818101518382015260200161103f565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10611f335782800160ff19823516178555611f60565b82800160010185558215611f60579182015b82811115611f60578235825591602001919060010190611f45565b50611f6c929150611f70565b5090565b5b80821115611f6c5760008155600101611f7156fe45524332303a207472616e7366657220746f20746865207a65726f206164647265737345524332303a206275726e20616d6f756e7420657863656564732062616c616e63655f5f757064617465436f6465416464726573733a205f6e6578745661756c744c6962206e6f7420636f6d70617469626c6545524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e63655f5f7365744f776e65723a205f6e6578744f776e65722063616e6e6f7420626520656d707479416464726573733a20696e73756666696369656e742062616c616e636520666f722063616c6c5661756c744c6962536166654d6174683a207375627472616374696f6e206f766572666c6f777365745661756c744c69623a204f6e6c792063616c6c61626c652062792074686520636f6e74726163742063726561746f724f6e6c79207468652064657369676e61746564206163636573736f722063616e206d616b6520746869732063616c6c5661756c744c6962536166654d6174683a206164646974696f6e206f766572666c6f777365744d69677261746f723a204f6e6c7920746865206f776e65722063616e2063616c6c20746869732066756e6374696f6e5f5f7365744f776e65723a205f6e6578744f776e6572206973207468652063757272656e74206f776e65727365744163636573736f723a204f6e6c792063616c6c61626c652062792074686520636f6e74726163742063726561746f7245524332303a206275726e2066726f6d20746865207a65726f206164647265737345524332303a207472616e736665722066726f6d20746865207a65726f20616464726573735f5f7365744163636573736f723a205f6e6578744163636573736f722063616e6e6f7420626520656d7074795361666545524332303a204552433230206f7065726174696f6e20646964206e6f7420737563636565645361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f20746f206e6f6e2d7a65726f20616c6c6f77616e6365a2646970667358221220a7b299b04c8d8018bde7f45183ba9c76b985d6d07f18e5508a5116312afcacf764736f6c634300060c0033",
  "devdoc": {
    "author": "Enzyme Council <security@enzyme.finance>",
    "details": "The difference in terminology between \"asset\" and \"trackedAsset\" is intentional. A fund might actually have asset balances of un-tracked assets, but only tracked assets are used in gav calculations. Note that this contract inherits VaultLibSafeMath (a verbatim Open Zeppelin SafeMath copy) from SharesTokenBase via VaultLibBase1",
    "kind": "dev",
    "methods": {
      "addTrackedAsset(address)": {
        "details": "Allows addition of already tracked assets to fail silently.",
        "params": {
          "_asset": "The asset to add"
        }
      },
      "allowance(address,address)": {
        "details": "Standard implementation of ERC20's allowance(). Can be overridden."
      },
      "approve(address,uint256)": {
        "details": "Disallows the standard ERC20 approve() function"
      },
      "approveAssetSpender(address,address,uint256)": {
        "params": {
          "_amount": "The amount of the allowance",
          "_asset": "The asset for which to grant an allowance",
          "_target": "The spender of the allowance"
        }
      },
      "balanceOf(address)": {
        "details": "Standard implementation of ERC20's balanceOf(). Can be overridden."
      },
      "burnShares(address,uint256)": {
        "params": {
          "_amount": "The amount of shares to burn",
          "_target": "The account for which to burn shares"
        }
      },
      "callOnContract(address,bytes)": {
        "params": {
          "_callData": "The call data for the call",
          "_contract": "The contract to call"
        }
      },
      "canMigrate(address)": {
        "params": {
          "_who": "The account to check"
        },
        "returns": {
          "canMigrate_": "True if the account is allowed to migrate the VaultProxy"
        }
      },
      "decimals()": {
        "details": "Standard implementation of ERC20's decimals(). Can not be overridden."
      },
      "getAccessor()": {
        "returns": {
          "accessor_": "The `accessor` variable value"
        }
      },
      "getCreator()": {
        "returns": {
          "creator_": "The `creator` variable value"
        }
      },
      "getMigrator()": {
        "returns": {
          "migrator_": "The `migrator` variable value"
        }
      },
      "getOwner()": {
        "returns": {
          "owner_": "The `owner` variable value"
        }
      },
      "getTrackedAssets()": {
        "returns": {
          "trackedAssets_": "The `trackedAssets` variable value"
        }
      },
      "getVaultLib()": {
        "returns": {
          "vaultLib_": "The address of the VaultLib target"
        }
      },
      "init(address,address,string)": {
        "details": "Serves as a per-proxy pseudo-constructor",
        "params": {
          "_accessor": "The address to set as the permissioned accessor of the VaultLib",
          "_fundName": "The name of the fund",
          "_owner": "The address to set as the fund owner"
        }
      },
      "isTrackedAsset(address)": {
        "params": {
          "_asset": "The address to check"
        },
        "returns": {
          "isTrackedAsset_": "True if the address is a tracked asset of the fund"
        }
      },
      "mintShares(address,uint256)": {
        "params": {
          "_amount": "The amount of shares to mint",
          "_target": "The account for which to burn shares"
        }
      },
      "name()": {
        "details": "Standard implementation of ERC20's name(). Can be overridden."
      },
      "proxiableUUID()": {
        "details": "The UUID is `bytes32(keccak256('mln.proxiable.vaultlib'))`",
        "returns": {
          "uuid_": "The bytes32 hash representing the UUID"
        }
      },
      "removeTrackedAsset(address)": {
        "params": {
          "_asset": "The asset to remove"
        }
      },
      "setAccessor(address)": {
        "params": {
          "_nextAccessor": "The address to set as the permissioned accessor of the VaultLib"
        }
      },
      "setMigrator(address)": {
        "details": "Set to address(0) to remove the migrator.",
        "params": {
          "_nextMigrator": "The account to set as the allowed migrator"
        }
      },
      "setVaultLib(address)": {
        "details": "This function is absolutely critical. __updateCodeAddress() validates that the target is a valid Proxiable contract instance. Does not block _nextVaultLib from being the same as the current VaultLib",
        "params": {
          "_nextVaultLib": "The address to set as the VaultLib"
        }
      },
      "symbol()": {
        "details": "Defers the shares symbol value to the Dispatcher contract",
        "returns": {
          "symbol_": "The `symbol` value"
        }
      },
      "totalSupply()": {
        "details": "Standard implementation of ERC20's totalSupply(). Can be overridden."
      },
      "transfer(address,uint256)": {
        "details": "Disallows the standard ERC20 transfer() function"
      },
      "transferFrom(address,address,uint256)": {
        "details": "Disallows the standard ERC20 transferFrom() function"
      },
      "transferShares(address,address,uint256)": {
        "params": {
          "_amount": "The amount of shares to transfer",
          "_from": "The account from which to transfer shares",
          "_to": "The account to which to transfer shares"
        }
      },
      "withdrawAssetTo(address,address,uint256)": {
        "params": {
          "_amount": "The amount of asset to withdraw",
          "_asset": "The asset to withdraw",
          "_target": "The account to which to withdraw the asset"
        }
      }
    },
    "title": "VaultLib Contract",
    "version": 1
  },
  "userdoc": {
    "kind": "user",
    "methods": {
      "addTrackedAsset(address)": {
        "notice": "Adds a tracked asset to the fund"
      },
      "approveAssetSpender(address,address,uint256)": {
        "notice": "Grants an allowance to a spender to use the fund's asset"
      },
      "burnShares(address,uint256)": {
        "notice": "Burns fund shares from a particular account"
      },
      "callOnContract(address,bytes)": {
        "notice": "Makes an arbitrary call with this contract as the sender"
      },
      "canMigrate(address)": {
        "notice": "Checks whether an account is allowed to migrate the VaultProxy"
      },
      "getAccessor()": {
        "notice": "Gets the `accessor` variable"
      },
      "getCreator()": {
        "notice": "Gets the `creator` variable"
      },
      "getMigrator()": {
        "notice": "Gets the `migrator` variable"
      },
      "getOwner()": {
        "notice": "Gets the `owner` variable"
      },
      "getTrackedAssets()": {
        "notice": "Gets the `trackedAssets` variable"
      },
      "getVaultLib()": {
        "notice": "Gets the VaultLib target for the VaultProxy"
      },
      "init(address,address,string)": {
        "notice": "Initializes the VaultProxy with core configuration"
      },
      "isTrackedAsset(address)": {
        "notice": "Check whether an address is a tracked asset of the fund"
      },
      "mintShares(address,uint256)": {
        "notice": "Mints fund shares to a particular account"
      },
      "proxiableUUID()": {
        "notice": "Returns a unique bytes32 hash for VaultLib instances"
      },
      "removeTrackedAsset(address)": {
        "notice": "Removes a tracked asset from the fund"
      },
      "setAccessor(address)": {
        "notice": "Sets the permissioned accessor of the VaultLib"
      },
      "setMigrator(address)": {
        "notice": "Sets the account that is allowed to migrate a fund to new releases"
      },
      "setVaultLib(address)": {
        "notice": "Sets the VaultLib target for the VaultProxy"
      },
      "symbol()": {
        "notice": "Gets the `symbol` value of the shares token"
      },
      "transferShares(address,address,uint256)": {
        "notice": "Transfers fund shares from one account to another"
      },
      "withdrawAssetTo(address,address,uint256)": {
        "notice": "Withdraws an asset from the VaultProxy to a given account"
      }
    },
    "notice": "The per-release proxiable library contract for VaultProxy",
    "version": 1
  },
  "storageLayout": {
    "storage": [
      {
        "astId": 8618,
        "contract": "contracts/release/core/fund/vault/VaultLib.sol:VaultLib",
        "label": "sharesName",
        "offset": 0,
        "slot": "0",
        "type": "t_string_storage"
      },
      {
        "astId": 8620,
        "contract": "contracts/release/core/fund/vault/VaultLib.sol:VaultLib",
        "label": "sharesSymbol",
        "offset": 0,
        "slot": "1",
        "type": "t_string_storage"
      },
      {
        "astId": 8622,
        "contract": "contracts/release/core/fund/vault/VaultLib.sol:VaultLib",
        "label": "sharesTotalSupply",
        "offset": 0,
        "slot": "2",
        "type": "t_uint256"
      },
      {
        "astId": 8626,
        "contract": "contracts/release/core/fund/vault/VaultLib.sol:VaultLib",
        "label": "sharesBalances",
        "offset": 0,
        "slot": "3",
        "type": "t_mapping(t_address,t_uint256)"
      },
      {
        "astId": 8632,
        "contract": "contracts/release/core/fund/vault/VaultLib.sol:VaultLib",
        "label": "sharesAllowances",
        "offset": 0,
        "slot": "4",
        "type": "t_mapping(t_address,t_mapping(t_address,t_uint256))"
      },
      {
        "astId": 8308,
        "contract": "contracts/release/core/fund/vault/VaultLib.sol:VaultLib",
        "label": "accessor",
        "offset": 0,
        "slot": "5",
        "type": "t_address"
      },
      {
        "astId": 8310,
        "contract": "contracts/release/core/fund/vault/VaultLib.sol:VaultLib",
        "label": "creator",
        "offset": 0,
        "slot": "6",
        "type": "t_address"
      },
      {
        "astId": 8312,
        "contract": "contracts/release/core/fund/vault/VaultLib.sol:VaultLib",
        "label": "migrator",
        "offset": 0,
        "slot": "7",
        "type": "t_address"
      },
      {
        "astId": 8314,
        "contract": "contracts/release/core/fund/vault/VaultLib.sol:VaultLib",
        "label": "owner",
        "offset": 0,
        "slot": "8",
        "type": "t_address"
      },
      {
        "astId": 8265,
        "contract": "contracts/release/core/fund/vault/VaultLib.sol:VaultLib",
        "label": "trackedAssets",
        "offset": 0,
        "slot": "9",
        "type": "t_array(t_address)dyn_storage"
      },
      {
        "astId": 8269,
        "contract": "contracts/release/core/fund/vault/VaultLib.sol:VaultLib",
        "label": "assetToIsTracked",
        "offset": 0,
        "slot": "10",
        "type": "t_mapping(t_address,t_bool)"
      }
    ],
    "types": {
      "t_address": {
        "encoding": "inplace",
        "label": "address",
        "numberOfBytes": "20"
      },
      "t_array(t_address)dyn_storage": {
        "base": "t_address",
        "encoding": "dynamic_array",
        "label": "address[]",
        "numberOfBytes": "32"
      },
      "t_bool": {
        "encoding": "inplace",
        "label": "bool",
        "numberOfBytes": "1"
      },
      "t_mapping(t_address,t_bool)": {
        "encoding": "mapping",
        "key": "t_address",
        "label": "mapping(address => bool)",
        "numberOfBytes": "32",
        "value": "t_bool"
      },
      "t_mapping(t_address,t_mapping(t_address,t_uint256))": {
        "encoding": "mapping",
        "key": "t_address",
        "label": "mapping(address => mapping(address => uint256))",
        "numberOfBytes": "32",
        "value": "t_mapping(t_address,t_uint256)"
      },
      "t_mapping(t_address,t_uint256)": {
        "encoding": "mapping",
        "key": "t_address",
        "label": "mapping(address => uint256)",
        "numberOfBytes": "32",
        "value": "t_uint256"
      },
      "t_string_storage": {
        "encoding": "bytes",
        "label": "string",
        "numberOfBytes": "32"
      },
      "t_uint256": {
        "encoding": "inplace",
        "label": "uint256",
        "numberOfBytes": "32"
      }
    }
  }
}