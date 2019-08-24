# eslint-config-myterminal

[![npm version](https://badge.fury.io/js/eslint-config-myterminal.svg)](https://badge.fury.io/js/eslint-config-myterminal)
[![npm downloads](https://img.shields.io/npm/dt/eslint-config-myterminal.svg)](https://www.npmjs.com/package/eslint-config-myterminal)  
[![Dependency Status](https://david-dm.org/myTerminal/eslint-config-myterminal.svg)](https://david-dm.org/myTerminal/eslint-config-myterminal)
[![devDependency Status](https://david-dm.org/myTerminal/eslint-config-myterminal/dev-status.svg)](https://david-dm.org/myTerminal/eslint-config-myterminal#info=devDependencies)
[![peer Dependency Status](https://david-dm.org/myTerminal/eslint-config-myterminal/peer-status.svg)](https://david-dm.org/myTerminal/eslint-config-myterminal#info=peerDependencies)  
[![License](https://img.shields.io/github/license/myTerminal/ample-alerts.svg)](https://opensource.org/licenses/MIT)  
[![NPM](https://nodei.co/npm/eslint-config-myterminal.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/eslint-config-myterminal/)

An ESLint configuration according to my preferred coding style based on the ones from [airbnb](https://www.npmjs.com/package/eslint-config-airbnb)

## Base

Out of all the configs that I came across all these years, I found the ones from [airbnb](https://www.npmjs.com/package/eslint-config-airbnb) to be the most compatible with my coding with a few exceptions. The first example that comes to my mind is 4 spaces for indentations as opposed to 2. I made an attempt to create my configs from scratch a while back but the process being so overwhelming and time-consuming, I decided to take a step back and spend that time to write actual code rather than to create extensive coding style configuration.

## Usage

Follow the below-mentioned steps for a smooth setup or feel free to do it your way if you feel adventurous.

### Install this package from NPM

Run the below command for an install using NPM, or use an equivalent one if you use [yarn](https://www.npmjs.com/package/yarn):

    npm install --save-dev eslint eslint-config-myterminal

> Note: You definitely need to install [eslint](https://www.npmjs.com/package/eslint) to be able to use this config, otherwise what would you do with this config anyway?

### Refer it in your config file

Create an ESLint [config file](https://eslint.org/docs/user-guide/configuring) and extend it from `eslint-config-myterminal` or just `myterminal` as shown below:

    {
      "extends": "myterminal",
      "rules": {}
    }

### Install the peer-dependencies

This config depends on a few [peer dependencies](https://nodejs.org/es/blog/npm/peer-dependencies) that need to be installed as well. Below is a list:

- [babel-eslint](https://www.npmjs.com/package/babel-eslint)
- [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb)
- [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import)
- [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react)
- [eslint-plugin-jsx-a11y](https://www.npmjs.com/package/eslint-plugin-jsx-a11y)

You can either install these manually using the below command:

    npm install --save-dev babel-eslint eslint-config-airbnb eslint-plugin-import eslint-plugin-react eslint-plugin-jsx-a11y

or if you have **NPM 5+**, simply use the below command:

    npx install-peerdeps --dev eslint-config-myterminal

### (Optional) Override according to your preference

There's a high probability you won't agree with at least some rules from this config. If that is the case and you need to override one, feel free to do that in your `.eslintrc` file as shown below:

    {
      "extends": "myterminal",
      "rules": {
        "indent": ["error", 3],
      }
    }

The above example demonstrates how one can enforce an indent of 3 spaces which is rather unusual, but that's just an example. You don't need this line at all if you're a 4 spaces person as that's the rule in this config and if you're the 2 spaces type, you might as well skip this config and use the one from [airbnb](https://www.npmjs.com/package/eslint-config-airbnb) directly.

### (Optional) Use only a specific rule-set

If you only need to impose only a particular set of rules, you can do it like

    {
      "extends": "myterminal/rules/base",
      "rules": {}
    }

The above will not include rules for [React](https://reactjs.org). There are a few individual rule-sets to choose from:

- `base`
- `react`
- `vue` (includes `base` and needs `vue-eslint-parser` and `eslint-plugin-vue` installed as peer-dependencies)

However, if you need all of them, just stick to `"myterminal"`.

## Rules that are different from [airbnb](https://www.npmjs.com/package/eslint-config-airbnb)

> (Coming soon)

## Badge

If you use this config in your project and want people to know it, use the below badge in your README.md file.

[![js-myterminal-style](https://img.shields.io/badge/code%20style-myterminal-blue.svg)](https://www.npmjs.com/package/eslint-config/myterminal)

    [![js-myterminal-style](https://img.shields.io/badge/code%20style-myterminal-blue.svg)](https://www.npmjs.com/package/eslint-config/myterminal)

## To-Do

* Separate out rules even further into multiple rule-sets
* Add rules for a few more disciplines
