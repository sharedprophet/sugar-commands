module.exports = {
	env: {
		commonjs: true,
		es6: true,
		node: true,
		browser: true,
	},
	globals: {
		atom: true,
	},
	extends: 'eslint:recommended',
	parserOptions: {
		sourceType: 'module',
	},
	rules: {
		indent: ['error', 'tab', {
			SwitchCase: 1
		}],
		'linebreak-style': ['error', 'unix'],
		quotes: ['error', 'single'],
		semi: ['error', 'always'],
		'comma-dangle': ['error', 'always-multiline'],
    'no-console': 'off',
	}
}
