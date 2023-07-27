export default {
	"ABI version": 2,
	"version": "2.2",
	"header": ["pubkey", "time", "expire"],
	"functions": [
		{
			"name": "constructor",
			"inputs": [
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
			"name": "acceptVaultUpgrade",
			"inputs": [
				{"name":"code","type":"cell"},
				{"name":"version","type":"uint32"},
				{"name":"remainingGasTo","type":"address"},
				{"name":"upgradeParams","type":"cell"}
			],
			"outputs": [
			]
		},
		{
			"name": "onTokenRootDeployed",
			"inputs": [
				{"name":"value0","type":"uint32"},
				{"name":"token_root","type":"address"}
			],
			"outputs": [
			]
		},
		{
			"name": "onDeployLPWallet",
			"inputs": [
				{"name":"tip3_wallet","type":"address"}
			],
			"outputs": [
			]
		},
		{
			"name": "onDeployWallet",
			"inputs": [
				{"name":"tip3_wallet","type":"address"}
			],
			"outputs": [
			]
		},
		{
			"name": "onAcceptTokensBurn",
			"inputs": [
				{"name":"amount","type":"uint128"},
				{"name":"value1","type":"address"},
				{"name":"value2","type":"address"},
				{"name":"remainingGasTo","type":"address"},
				{"name":"payload","type":"cell"}
			],
			"outputs": [
			]
		},
		{
			"name": "onAcceptTokensTransfer",
			"inputs": [
				{"name":"tokenRoot","type":"address"},
				{"name":"amount","type":"uint128"},
				{"name":"sender","type":"address"},
				{"name":"value3","type":"address"},
				{"name":"remainingGasTo","type":"address"},
				{"name":"value5","type":"cell"}
			],
			"outputs": [
			]
		},
		{
			"name": "onGetVaultValue",
			"inputs": [
				{"name":"vaultValues","type":"cell"}
			],
			"outputs": [
			]
		},
		{
			"name": "requestVaultCodeUpdate",
			"inputs": [
				{"name":"remainingGasTo","type":"address"}
			],
			"outputs": [
			]
		},
		{
			"name": "destr",
			"inputs": [
			],
			"outputs": [
			]
		},
		{
			"name": "flesh",
			"inputs": [
			],
			"outputs": [
			]
		},
		{
			"name": "lp_token_root",
			"inputs": [
			],
			"outputs": [
				{"name":"lp_token_root","type":"address"}
			]
		},
		{
			"name": "_RootAddressToWallet",
			"inputs": [
			],
			"outputs": [
				{"name":"_RootAddressToWallet","type":"map(address,address)"}
			]
		},
		{
			"name": "_RootAddressToParams",
			"inputs": [
			],
			"outputs": [
				{"name":"_RootAddressToParams","type":"map(address,cell)"}
			]
		},
		{
			"name": "_RootAddressToBalance",
			"inputs": [
			],
			"outputs": [
				{"name":"_RootAddressToBalance","type":"map(address,uint128)"}
			]
		}
	],
	"data": [
	],
	"events": [
		{
			"name": "vaultUpgraded",
			"inputs": [
				{"name":"codeHash","type":"uint256"}
			],
			"outputs": [
			]
		},
		{
			"name": "LPTokenRootDeployed",
			"inputs": [
				{"name":"tokenRoot","type":"address"}
			],
			"outputs": [
			]
		},
		{
			"name": "LPTokensRedeemed",
			"inputs": [
				{"name":"lpAmount","type":"uint128"},
				{"name":"tokenAmount","type":"uint128"},
				{"name":"share","type":"uint128"},
				{"name":"totalSupply","type":"uint128"}
			],
			"outputs": [
			]
		},
		{
			"name": "LPTokensMinted",
			"inputs": [
				{"name":"lpAmount","type":"uint128"},
				{"name":"sender","type":"address"},
				{"name":"tokenRoot","type":"address"},
				{"name":"depositAmount","type":"uint128"}
			],
			"outputs": [
			]
		}
	],
	"fields": [
		{"name":"_pubkey","type":"uint256"},
		{"name":"_timestamp","type":"uint64"},
		{"name":"_constructorFlag","type":"bool"},
		{"name":"nonce","type":"uint32"},
		{"name":"platform_code","type":"cell"},
		{"name":"_platform_params","type":"cell"},
		{"name":"current_version","type":"uint32"},
		{"name":"type_id","type":"uint8"},
		{"name":"lp_token_root","type":"address"},
		{"name":"lp_token_wallet","type":"address"},
		{"name":"priceInterpreter","type":"address"},
		{"name":"symbol","type":"bytes"},
		{"name":"name","type":"bytes"},
		{"name":"LPdecimals","type":"uint8"},
		{"name":"token_factory","type":"address"},
		{"name":"supportedTokens","type":"map(address,cell)"},
		{"name":"_RootAddressToWallet","type":"map(address,address)"},
		{"name":"_RootAddressToParams","type":"map(address,cell)"},
		{"name":"_RootAddressToBalance","type":"map(address,uint128)"},
		{"name":"_owner","type":"address"},
		{"name":"_comptroller","type":"address"},
		{"name":"_fundDeployer","type":"address"},
		{"name":"contract_params","type":"cell"}
	]
}
