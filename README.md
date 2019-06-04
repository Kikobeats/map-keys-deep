# @kikobeats/map-keys-deep

![Last version](https://img.shields.io/github/tag/Kikobeats/map-keys-deep.svg?style=flat-square)
[![Build Status](https://img.shields.io/travis/com/Kikobeats/map-keys-deep/master.svg?style=flat-square)](https://travis-ci.com/Kikobeats/map-keys-deep)
[![Coverage Status](https://img.shields.io/coveralls/Kikobeats/map-keys-deep.svg?style=flat-square)](https://coveralls.io/github/Kikobeats/map-keys-deep)
[![Dependency status](https://img.shields.io/david/Kikobeats/map-keys-deep.svg?style=flat-square)](https://david-dm.org/Kikobeats/map-keys-deep)
[![Dev Dependencies Status](https://img.shields.io/david/dev/Kikobeats/map-keys-deep.svg?style=flat-square)](https://david-dm.org/Kikobeats/map-keys-deep#info=devDependencies)
[![NPM Status](https://img.shields.io/npm/dm/map-keys-deep.svg?style=flat-square)](https://www.npmjs.org/package/map-keys-deep)

> Recursive lodash.mapKeys

## Install

```bash
$ npm install lodash map-keys-deep --save
```

## Usage

```js
const mapKeysDeep = require('map-keys-deep')

mapKeysDeep({ Hello: { World: true } }, (value, key) => key.toLowerCase())
// => { hello: { world: true } }
```
## License

**map-keys-deep** © [Kiko Beats](https://kikobeats.com), released under the [MIT](https://github.com/Kikobeats/map-keys-deep/blob/master/LICENSE.md) License.<br>
Authored and maintained by Kiko Beats with help from [contributors](https://github.com/Kikobeats/map-keys-deep/contributors).

> [kikobeats.com](https://kikobeats.com) · GitHub [Kiko Beats](https://github.com/Kikobeats) · Twitter [@Kikobeats](https://twitter.com/Kikobeats)
