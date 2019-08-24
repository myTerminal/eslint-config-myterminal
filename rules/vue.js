/* global module require */

module.exports = {
    parser: 'vue-eslint-parser',
    extends: [
        'airbnb'
    ].concat([
        './base'
    ].map(require.resolve))
};
