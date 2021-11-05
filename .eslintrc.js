module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	parserOptions: {
		ecmaVersion: 13,
		sourceType: 'module',
	},
	rules: {
		quotes: ['error', 'single'],
		semi: ['error', 'always'],
		'no-multi-spaces': ['error'],
	},
};
