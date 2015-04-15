# benderjs-promise

A polyfill for ES6-style Promises for [Bender.js](https://github.com/benderjs/benderjs).

Based on [ES6 Promise Polyfill](https://github.com/Octane/Promise).

## Installation

```
npm install benderjs-promise
```

## Usage

Add `benderjs-promise` to the `plugins` array in your `bender.js` configuration file:

```javascript
var config = {
    applications: {...}

    browsers: [...],

    plugins: ['benderjs-promise'], // load the plugin

    tests: {...}
};

module.exports = config;
```

From now on you should be able to use Promises in browsers that don't support them natively.

## License

MIT, for license details see: [LICENSE.md](https://github.com/benderjs/benderjs-sinon/blob/master/LICENSE.md).
