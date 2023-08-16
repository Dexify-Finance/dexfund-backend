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
			"name": "onGetExpectedDexAccountAddress",
			"inputs": [
				{"name":"dexAccountAddress","type":"address"}
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
			"name": "dexLiquidityAddPairOperation",
			"inputs": [
				{"name":"leftRoot","type":"address"},
				{"name":"rightRoot","type":"address"}
			],
			"outputs": [
			]
		},
		{
			"name": "dexLiquidityRemoveOperation",
			"inputs": [
				{"name":"call_id","type":"uint64"},
				{"name":"payload","type":"cell"},
				{"name":"send_gas_to","type":"address"},
				{"name":"lp_amount","type":"uint128"},
				{"name":"dex_pair","type":"address"},
				{"name":"left_root","type":"address"},
				{"name":"right_root","type":"address"},
				{"name":"expected_lp_root","type":"address"}
			],
			"outputs": [
			]
		},
		{
			"name": "onAcceptTokensMint",
			"inputs": [
				{"name":"root","type":"address"},
				{"name":"amount","type":"uint128"},
				{"name":"remainingGasTo","type":"address"},
				{"name":"value3","type":"cell"}
			],
			"outputs": [
			]
		},
		{
			"name": "dexLiquidityDepositOperation",
			"inputs": [
				{"name":"left_root","type":"address"},
				{"name":"right_root","type":"address"},
				{"name":"send_gas_to","type":"address"},
				{"name":"call_id","type":"uint64"},
				{"name":"left_amount","type":"uint128"},
				{"name":"right_amount","type":"uint128"},
				{"name":"expected_lp_root","type":"address"},
				{"name":"auto_change","type":"bool"}
			],
			"outputs": [
			]
		},
		{
			"name": "dexLiquidityTokensDeposit",
			"inputs": [
				{"name":"leftToken","type":"address"},
				{"name":"rightToken","type":"address"},
				{"name":"leftTokenAmount","type":"uint128"},
				{"name":"rightTokenAmount","type":"uint128"}
			],
			"outputs": [
			]
		},
		{
			"name": "dexAccountOnSuccess",
			"inputs": [
				{"name":"callId","type":"uint64"}
			],
			"outputs": [
			]
		},
		{
			"name": "dexSwapOperation",
			"inputs": [
				{"name":"callId","type":"uint64"},
				{"name":"left_root","type":"address"},
				{"name":"right_root","type":"address"},
				{"name":"left_token_amount","type":"uint128"},
				{"name":"payload","type":"cell"},
				{"name":"dexPair","type":"address"},
				{"name":"remainingGasTo","type":"address"}
			],
			"outputs": [
			]
		},
		{
			"name": "onGetTokenVault",
			"inputs": [
				{"name":"dex_token_vault","type":"address"}
			],
			"outputs": [
			]
		},
		{
			"name": "dexPairOperationCancelled",
			"inputs": [
				{"name":"_callId","type":"uint64"}
			],
			"outputs": [
			]
		},
		{
			"name": "dexPairDepositLiquiditySuccess",
			"inputs": [
				{"name":"_callId","type":"uint64"},
				{"name":"_isViaAccount","type":"bool"},
				{"components":[{"name":"step_1_left_deposit","type":"uint128"},{"name":"step_1_right_deposit","type":"uint128"},{"name":"step_1_lp_reward","type":"uint128"},{"name":"step_2_left_to_right","type":"bool"},{"name":"step_2_right_to_left","type":"bool"},{"name":"step_2_spent","type":"uint128"},{"name":"step_2_fee","type":"uint128"},{"name":"step_2_received","type":"uint128"},{"name":"step_3_left_deposit","type":"uint128"},{"name":"step_3_right_deposit","type":"uint128"},{"name":"step_3_lp_reward","type":"uint128"}],"name":"_result","type":"tuple"}
			],
			"outputs": [
			]
		},
		{
			"name": "dexPairWithdrawSuccess",
			"inputs": [
				{"name":"_callId","type":"uint64"},
				{"name":"_isViaAccount","type":"bool"},
				{"components":[{"name":"lp","type":"uint128"},{"name":"left","type":"uint128"},{"name":"right","type":"uint128"}],"name":"result","type":"tuple"}
			],
			"outputs": [
			]
		},
		{
			"name": "dexPairExchangeSuccess",
			"inputs": [
				{"name":"_callId","type":"uint64"},
				{"name":"_isViaAccount","type":"bool"},
				{"components":[{"name":"left_to_right","type":"bool"},{"name":"spent","type":"uint128"},{"name":"fee","type":"uint128"},{"name":"received","type":"uint128"}],"name":"result","type":"tuple"}
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
				{"name":"payload","type":"cell"}
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
		},
		{
			"name": "_dexAccount",
			"inputs": [
			],
			"outputs": [
				{"name":"_dexAccount","type":"address"}
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
				{"name":"sender","type":"address"},
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
		{"name":"dexVault","type":"address"},
		{"name":"supportedTokens","type":"map(address,cell)"},
		{"name":"_RootAddressToWallet","type":"map(address,address)"},
		{"name":"_RootAddressToParams","type":"map(address,cell)"},
		{"name":"_RootAddressToBalance","type":"map(address,uint128)"},
		{"components":[{"name":"dexPair","type":"address"},{"name":"leftTokenVault","type":"address"},{"name":"rightTokenVault","type":"address"}],"name":"_tmpOperations","type":"map(uint64,tuple)"},
		{"name":"_owner","type":"address"},
		{"name":"_comptroller","type":"address"},
		{"name":"_fundDeployer","type":"address"},
		{"name":"dexRoot_","type":"address"},
		{"name":"_dexAccount","type":"address"},
		{"name":"contract_params","type":"cell"},
		{"name":"t","type":"uint8"}
	]
}
