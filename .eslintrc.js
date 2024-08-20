module.exports = {
	// Specify the environment for your code (e.g., browser, node).
	env: {
		browser: true,
		node: true,
		es6: true,
		jest: true,
	},
	// Extend from the recommended Next.js ESLint configuration.
	extends: ["next", "next/core-web-vitals", "eslint:recommended", "prettier"],
	// Add any additional rules or overrides here.
	overrides: [
		{
			files: ["**/*.ts", "**/*.tsx"],
			plugins: ["prettier", "@typescript-eslint"],
			extends: ["next/core-web-vitals", "prettier"],
			parser: "@typescript-eslint/parser",
			parserOptions: {
				project: "./tsconfig.json",
				sourceType: "module",
				createDefaultProgram: true,
			},
			settings: {
				"import/resolver": {
					node: {
						moduleDirectory: ["node_modules", "src/"],
					},
					typescript: {
						alwaysTryTypes: true,
					},
				},
			},
			rules: {
				"react/jsx-filename-extension": "off",
				"no-param-reassign": "off",
				"react/prop-types": "off",
				"react/require-default-props": "off",
				"react/no-array-index-key": "off",
				"react/react-in-jsx-scope": "off",
				"react/jsx-props-no-spreading": "off",
				"import/order": "off",
				"no-console": "off",
				"no-shadow": "off",
				"@typescript-eslint/naming-convention": "off",
				"import/no-cycle": "off",
				"prefer-destructuring": "off",
				"import/no-extraneous-dependencies": "off",
				"react/display-name": "off",
				"import/no-unresolved": ["off", { caseSensitive: false }],
				"@typescript-eslint/no-unused-vars": [
					"error",
					{
						vars: "all",
						argsIgnorePattern: "^_",
					},
				],
				"no-unused-vars": [
					"error",
					{
						vars: "all",
						argsIgnorePattern: "^_",
					},
				],
				"no-loss-of-precision": "off",
				"no-undef": "off",
			},
		},
	],
};
