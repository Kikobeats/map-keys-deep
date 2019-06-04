'use strict'

const { isPlainObject, mapKeys, mapValues } = require('lodash')

const mapKeysDeep = (obj, fn) =>
  Array.isArray(obj)
    ? obj.map(item => mapKeysDeep(item, fn))
    : isPlainObject(obj)
      ? mapValues(mapKeys(obj, fn), value => mapKeysDeep(value, fn))
      : obj

module.exports = mapKeysDeep
