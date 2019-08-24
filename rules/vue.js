/* global module require */

module.exports = {
    parser: 'vue-eslint-parser',
    extends: [
        'airbnb',
        'plugin:vue/essential'
    ].concat([
        './base'
    ].map(require.resolve))
};
