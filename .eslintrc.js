module.exports = {
    root: true,
    parserOptions: {
        parser: "babel-eslint",
        sourceType: 'module'
    },
    env: {
        browser: true,
        jest: true
    },
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    extends: [
        "standard",
        "plugin:vue/recommended",
        "plugin:jest/recommended"
    ],
    plugins: [
        "html",
        "standard",
        "vue",
        "jest"
    ],
    // add your custom rules here
    rules: {
        // allow async-await
        'generator-star-spacing': 'off',
        'indent': ['error', 4],
        'semi': ['error', 'always'],
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        "jest/no-disabled-tests": "warn",
        "jest/no-focused-tests": "error",
        "jest/no-identical-title": "error",
        "jest/prefer-to-have-length": "warn",
        "jest/valid-expect": "error"
    }
};