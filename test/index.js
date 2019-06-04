const { camelCase } = require('lodash')
const test = require('ava')

const map = require('..')

const toCamel = (value, key) => camelCase(key)

test('camelCase keys of plain objects', t => {
  t.deepEqual(map({ banana_pie: null, APPLE_JUICE: null }, toCamel), {
    bananaPie: null,
    appleJuice: null
  })

  t.deepEqual(map({ bananaPie: null }, toCamel), { bananaPie: null })

  t.deepEqual(
    map({ banana_pie: { banana_pie: { banana_pie: null } } }, toCamel),
    { bananaPie: { bananaPie: { bananaPie: null } } }
  )
})

test('camelCase keys of plain objects with array of objects', t => {
  t.deepEqual(
    map(
      { pies: [{ banana_pie: { banana_pie: null } }, { apple_pie: null }] },
      toCamel
    ),
    { pies: [{ bananaPie: { bananaPie: null } }, { applePie: null }] }
  )
})

test('Do nothing on non plain objects', t => {
  t.deepEqual(map('foo', toCamel), 'foo')
  t.deepEqual(map(123, toCamel), 123)
  t.deepEqual(map(false, toCamel), false)
  t.deepEqual(map(null, toCamel), null)
  t.deepEqual(map(undefined, toCamel), undefined)
  const now = new Date()
  t.deepEqual(map(now, toCamel), now)
})
