/* global module require */

module.exports = {
    globals: {},
    parser: 'babel-eslint',
    extends: [
        'airbnb'
    ].concat([
        './rules/base',
        './rules/react'
    ].map(require.resolve)),
    rules: {}
};
