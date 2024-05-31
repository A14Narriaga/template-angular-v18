// @ts-check
const eslint = require("@eslint/js")
const tseslint = require("typescript-eslint")
const angular = require("angular-eslint")
const simpleImportSort = require("eslint-plugin-simple-import-sort")
const eslintPluginPrettierRecommended = require("eslint-plugin-prettier/recommended")
const eslintPluginUnicorn = require("eslint-plugin-unicorn")

module.exports = tseslint.config(
	{
		plugins: {
			simpleImportSort,
			eslintPluginUnicorn
		},
		files: ["**/*.ts"],
		extends: [
			eslint.configs.recommended,
			...tseslint.configs.strict,
			...tseslint.configs.stylistic,
			...angular.configs.tsRecommended
		],
		processor: angular.processInlineTemplates,
		ignores: ["tests/coverage/", "src/main.ts"],
		rules: {
			"@angular-eslint/directive-selector": [
				"error",
				{
					type: "attribute",
					// prefix: "app",
					style: "camelCase"
				}
			],
			"@angular-eslint/component-selector": [
				"error",
				{
					type: "element",
					// prefix: "app",
					style: "kebab-case"
				}
			],
			"simpleImportSort/imports": [
				"error",
				{
					groups: [
						[
							"^(assert|buffer|child_process|cluster|console|constants|crypto|dgram|dns|domain|events|fs|http|https|module|net|os|path|punycode|querystring|readline|repl|stream|string_decoder|sys|timers|tls|tty|url|util|vm|zlib|freelist|v8|process|async_hooks|http2|perf_hooks)(/.*|$)"
						],
						["^@?\\w.*\\u0000$", "^[^.].*\\u0000$", "^\\..*\\u0000$"],
						["^\\u0000"],
						["^@?\\w"],
						["^@app(/.*|$)"],
						["^@shared(/.*|$)"],
						["^@tests(/.*|$)"],
						["^"],
						["^\\."]
					]
				}
			],
			"id-length": ["error", { min: 2 }],
			"comma-dangle": ["error", "never"],
			"simpleImportSort/exports": "error",
			"eslintPluginUnicorn/prefer-module": "off",
			"eslintPluginUnicorn/prefer-top-level-await": "off",
			"eslintPluginUnicorn/prevent-abbreviations": "off",
			"no-console": "warn",
			"no-process-exit": "off"
		}
	},
	{
		files: ["**/*.html"],
		extends: [
			...angular.configs.templateRecommended,
			...angular.configs.templateAccessibility
		],
		rules: {}
	},
	{
		files: ["src/**/*.module.ts"],
		rules: {
			"@typescript-eslint/no-extraneous-class": "off"
		}
	},
	eslintPluginPrettierRecommended
)
