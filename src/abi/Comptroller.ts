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
		{"name":"vaultCode","type":"cell"},
		{"name":"vaultVersion","type":"uint32"},
		{"name":"tokenFactory","type":"address"},
		{"name":"priceInterpreter","type":"address"},
		{"name":"_owner","type":"address"},
		{"name":"contract_params","type":"cell"}
	]
}
