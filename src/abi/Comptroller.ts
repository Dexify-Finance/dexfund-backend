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
			"name": "acceptComptrollerCodeUpgrade",
			"inputs": [
				{"name":"code","type":"cell"},
				{"name":"version","type":"uint32"},
				{"name":"send_gas_to","type":"address"},
				{"name":"upgrade_params","type":"cell"}
			],
			"outputs": [
			]
		},
		{
			"name": "vaultLiquidityAddPair",
			"inputs": [
				{"name":"left_root","type":"address"},
				{"name":"right_root","type":"address"}
			],
			"outputs": [
			]
		},
		{
			"name": "vaultLiquidityAccountDeposit",
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
			"name": "vaultLiquidityDeposit",
			"inputs": [
				{"name":"left_root","type":"address"},
				{"name":"right_root","type":"address"},
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
			"name": "vaultLiquidityRemove",
			"inputs": [
				{"name":"call_id","type":"uint64"},
				{"name":"lp_tokens_amount","type":"uint128"},
				{"name":"expectedLeftAmount","type":"uint128"},
				{"name":"expectedRightAmount","type":"uint128"},
				{"name":"deploy_wallet_grams","type":"uint128"},
				{"name":"lp_root","type":"address"},
				{"name":"dex_pair_address","type":"address"},
				{"name":"left_root","type":"address"},
				{"name":"right_root","type":"address"}
			],
			"outputs": [
			]
		},
		{
			"name": "vaultTokensSwap",
			"inputs": [
				{"name":"left_root","type":"address"},
				{"name":"right_root","type":"address"},
				{"name":"swap_amount","type":"uint128"},
				{"name":"remainingGasTo","type":"address"}
			],
			"outputs": [
			]
		},
		{
			"name": "onGetExpectedPairAddress",
			"inputs": [
				{"name":"dex_pair_address","type":"address"}
			],
			"outputs": [
			]
		},
		{
			"name": "onExpectedExchange",
			"inputs": [
				{"name":"value0","type":"uint128"},
				{"name":"expected_fee","type":"uint128"}
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
			"name": "requestComptrollerCodeUpdate",
			"inputs": [
				{"name":"upgrade_data","type":"cell"},
				{"name":"remainingGasTo","type":"address"}
			],
			"outputs": [
			]
		}
	],
	"data": [
	],
	"events": [
		{
			"name": "comptrollerUpdated",
			"inputs": [
				{"name":"newCodeHash","type":"uint256"}
			],
			"outputs": [
			]
		},
		{
			"name": "vaultDeployed",
			"inputs": [
				{"name":"vault","type":"address"}
			],
			"outputs": [
			]
		},
		{
			"name": "upgradeVaultRequested",
			"inputs": [
				{"name":"vault","type":"address"}
			],
			"outputs": [
			]
		},
		{
			"name": "vaultCodeUpgradeAccepted",
			"inputs": [
				{"name":"newCodeHash","type":"uint256"}
			],
			"outputs": [
			]
		}
	],
	"fields": [
		{"name":"_pubkey","type":"uint256"},
		{"name":"_timestamp","type":"uint64"},
		{"name":"_constructorFlag","type":"bool"},
		{"name":"fundDeployer","type":"address"},
		{"name":"platform_code","type":"cell"},
		{"name":"_platform_params","type":"cell"},
		{"name":"current_version","type":"uint32"},
		{"name":"type_id","type":"uint8"},
		{"name":"nonce","type":"uint32"},
		{"name":"vaultCode","type":"cell"},
		{"name":"vaultVersion","type":"uint32"},
		{"name":"tokenFactory","type":"address"},
		{"name":"priceInterpreter","type":"address"},
		{"name":"_owner","type":"address"},
		{"name":"dexRoot","type":"address"},
		{"name":"_vault","type":"address"},
		{"name":"contract_params","type":"cell"},
		{"components":[{"name":"tokenRoot","type":"address"},{"name":"rightTokenRoot","type":"address"},{"name":"tokenAmount","type":"uint128"},{"name":"dexPair","type":"address"},{"name":"remainingGasTo","type":"address"},{"name":"vault","type":"address"},{"name":"right_root","type":"address"}],"name":"_tmpOperations","type":"map(uint64,tuple)"},
		{"name":"_DexPairToRootAddress","type":"map(address,address)"}
	]
}
