export default {
	"ABI version": 2,
	"version": "2.2",
	"header": ["pubkey", "time", "expire"],
	"functions": [
		{
			"name": "constructor",
			"inputs": [
				{"name":"remainingGasTo","type":"address"},
				{"name":"comptrollerCode","type":"cell"},
				{"name":"vaultCode","type":"cell"},
				{"name":"tokenFactory","type":"address"},
				{"name":"priceInterpreterCode","type":"cell"},
				{"name":"dexRoot","type":"address"},
				{"name":"tip3UsdtRoot","type":"address"},
				{"name":"tip3LpUsdtWvenomRoot","type":"address"},
				{"name":"tip3WvenomRoot","type":"address"}
			],
			"outputs": [
			]
		},
		{
			"name": "transferOwnership",
			"inputs": [
				{"name":"newOwner","type":"address"},
				{"name":"remainingGasTo","type":"address"}
			],
			"outputs": [
			]
		},
		{
			"name": "acceptOwnership",
			"inputs": [
				{"name":"remainingGasTo","type":"address"}
			],
			"outputs": [
			]
		},
		{
			"name": "sendSurplusGas",
			"inputs": [
				{"name":"to","type":"address"}
			],
			"outputs": [
			]
		},
		{
			"name": "setVaultCode",
			"inputs": [
				{"name":"code","type":"cell"}
			],
			"outputs": [
			]
		},
		{
			"name": "setPriceInterpreterCode",
			"inputs": [
				{"name":"code","type":"cell"}
			],
			"outputs": [
			]
		},
		{
			"name": "setComptrollerCode",
			"inputs": [
				{"name":"code","type":"cell"}
			],
			"outputs": [
			]
		},
		{
			"name": "requestUpgradeComptroller",
			"inputs": [
				{"name":"currentVersion","type":"uint32"},
				{"name":"nonce","type":"uint32"},
				{"name":"owner","type":"address"},
				{"name":"remainingGasTo","type":"address"},
				{"name":"upgrade_params","type":"cell"}
			],
			"outputs": [
			]
		},
		{
			"name": "comptrollerOf",
			"inputs": [
				{"name":"answerId","type":"uint32"},
				{"name":"owner","type":"address"},
				{"name":"nonce","type":"uint32"}
			],
			"outputs": [
				{"name":"value0","type":"address"}
			]
		},
		{
			"name": "requestUpgradeVault",
			"inputs": [
				{"name":"number","type":"uint32"},
				{"name":"currentVersion","type":"uint32"},
				{"name":"comptroller","type":"address"},
				{"name":"remainingGasTo","type":"address"}
			],
			"outputs": [
			]
		},
		{
			"name": "deployVault",
			"inputs": [
				{"name":"answerId","type":"uint32"},
				{"name":"deployComptrollerValue","type":"uint128"},
				{"name":"symbol","type":"string"},
				{"name":"name","type":"string"},
				{"name":"supportedTokensAndParams","type":"cell"},
				{"name":"deployVaultValue","type":"uint128"},
				{"name":"remainingGasTo","type":"address"}
			],
			"outputs": [
				{"name":"vault","type":"address"},
				{"name":"comptroller","type":"address"}
			]
		},
		{
			"name": "vaultOf",
			"inputs": [
				{"name":"answerId","type":"uint32"},
				{"name":"number","type":"uint32"},
				{"name":"comptroller","type":"address"}
			],
			"outputs": [
				{"name":"value0","type":"address"}
			]
		},
		{
			"name": "calculateShareBuy",
			"inputs": [
				{"name":"amount","type":"uint128"},
				{"name":"decimals","type":"uint8"},
				{"name":"currentDepositValue","type":"uint128"},
				{"name":"vaultValue","type":"uint128"},
				{"name":"LPTotalSupply","type":"uint128"}
			],
			"outputs": [
				{"name":"sharePrice","type":"uint128"},
				{"name":"newShareAmount","type":"uint128"}
			]
		},
		{
			"name": "calculateShareRedeem",
			"inputs": [
				{"name":"amount","type":"uint128"},
				{"name":"LPTotalSupply","type":"uint128"},
				{"name":"currentBalance","type":"uint128"}
			],
			"outputs": [
				{"name":"share","type":"uint256"},
				{"name":"tokenAmount","type":"uint256"},
				{"name":"decimals","type":"uint256"}
			]
		},
		{
			"name": "upgradePriceInterpreter",
			"inputs": [
				{"name":"remainingGasTo","type":"address"}
			],
			"outputs": [
			]
		},
		{
			"name": "upgrade",
			"inputs": [
				{"name":"code","type":"cell"},
				{"name":"send_gas_to","type":"address"},
				{"name":"upgrade_params","type":"cell"}
			],
			"outputs": [
			]
		},
		{
			"name": "fundDeployerOwner",
			"inputs": [
				{"name":"answerId","type":"uint32"}
			],
			"outputs": [
				{"name":"value0","type":"address"}
			]
		},
		{
			"name": "comptrollerVersion",
			"inputs": [
				{"name":"answerId","type":"uint32"}
			],
			"outputs": [
				{"name":"value0","type":"uint32"}
			]
		},
		{
			"name": "vaultVersion",
			"inputs": [
				{"name":"answerId","type":"uint32"}
			],
			"outputs": [
				{"name":"value0","type":"uint32"}
			]
		},
		{
			"name": "platformCode",
			"inputs": [
				{"name":"answerId","type":"uint32"}
			],
			"outputs": [
				{"name":"value0","type":"cell"}
			]
		},
		{
			"name": "vaultCode",
			"inputs": [
				{"name":"answerId","type":"uint32"}
			],
			"outputs": [
				{"name":"value0","type":"cell"}
			]
		},
		{
			"name": "comptrollerCode",
			"inputs": [
				{"name":"answerId","type":"uint32"}
			],
			"outputs": [
				{"name":"value0","type":"cell"}
			]
		},
		{
			"name": "vaultVersion_",
			"inputs": [
			],
			"outputs": [
				{"name":"vaultVersion_","type":"uint32"}
			]
		},
		{
			"name": "comptrollerVersion_",
			"inputs": [
			],
			"outputs": [
				{"name":"comptrollerVersion_","type":"uint32"}
			]
		},
		{
			"name": "dexVault_",
			"inputs": [
			],
			"outputs": [
				{"name":"dexVault_","type":"address"}
			]
		},
		{
			"name": "vaultNumber",
			"inputs": [
			],
			"outputs": [
				{"name":"vaultNumber","type":"uint32"}
			]
		}
	],
	"data": [
		{"key":1,"name":"randomNonce_","type":"uint256"},
		{"key":2,"name":"deployer_","type":"address"},
		{"key":3,"name":"platformCode_","type":"cell"},
		{"key":4,"name":"fundDeployerOwner_","type":"address"}
	],
	"events": [
		{
			"name": "transferOwnershipRequest",
			"inputs": [
				{"name":"newOwner","type":"address"}
			],
			"outputs": [
			]
		},
		{
			"name": "ownershipAccepted",
			"inputs": [
				{"name":"newOwner","type":"address"}
			],
			"outputs": [
			]
		},
		{
			"name": "vaultCodeUpdated",
			"inputs": [
				{"name":"newCodeHash","type":"uint256"}
			],
			"outputs": [
			]
		},
		{
			"name": "comptrollerCodeUpdated",
			"inputs": [
				{"name":"newCodeHash","type":"uint256"}
			],
			"outputs": [
			]
		},
		{
			"name": "upgradeVaultCodeRequested",
			"inputs": [
				{"name":"currentVersion","type":"uint32"},
				{"name":"owner","type":"address"},
				{"name":"comptroller","type":"address"}
			],
			"outputs": [
			]
		},
		{
			"name": "upgradeComptrollerRequested",
			"inputs": [
				{"name":"currentVersion","type":"uint32"},
				{"name":"owner","type":"address"},
				{"name":"comptroller","type":"address"}
			],
			"outputs": [
			]
		},
		{
			"name": "vaultDeployed",
			"inputs": [
				{"name":"owner","type":"address"},
				{"name":"comptroller","type":"address"},
				{"name":"vault","type":"address"},
				{"name":"symbol","type":"string"},
				{"name":"name","type":"string"}
			],
			"outputs": [
			]
		}
	],
	"fields": [
		{"name":"_pubkey","type":"uint256"},
		{"name":"_timestamp","type":"uint64"},
		{"name":"_constructorFlag","type":"bool"},
		{"name":"randomNonce_","type":"uint256"},
		{"name":"deployer_","type":"address"},
		{"name":"platformCode_","type":"cell"},
		{"name":"fundDeployerOwner_","type":"address"},
		{"name":"priceInterpreter","type":"address"},
		{"name":"newOwner_","type":"address"},
		{"name":"vaultCode_","type":"cell"},
		{"name":"comptrollerCode_","type":"cell"},
		{"name":"tokenFactory_","type":"address"},
		{"name":"vaultVersion_","type":"uint32"},
		{"name":"comptrollerVersion_","type":"uint32"},
		{"name":"priceInterpreterCode_","type":"cell"},
		{"name":"priceInterpreterVersion_","type":"uint32"},
		{"name":"dexRoot_","type":"address"},
		{"name":"dexVault_","type":"address"},
		{"name":"tip3UsdtRoot_","type":"address"},
		{"name":"vaultNumber","type":"uint32"}
	]
}
