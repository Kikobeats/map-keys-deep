'use strict'

const { map, isArray, isPlainObject, mapKeys, mapValues } = require('lodash')

const mapKeysDeep = (obj, fn) =>
  isArray(obj)
    ? map(obj, innerObj => mapKeysDeep(innerObj, fn))
    : isPlainObject(obj)
      ? mapValues(mapKeys(obj, fn), value => mapKeysDeep(value, fn))
      : obj

module.exports = mapKeysDeep
