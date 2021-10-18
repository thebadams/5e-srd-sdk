const spells = require('../lib/spells');

test('Spells is an object', () => {
  expect(typeof spells).toBe('object')
})
test('Spell has an attribute, "find"', () => {
  expect(spells.find).toBeDefined()
})
test('Spell.find is a function', () => {
  expect(typeof spells.find).toBe('function')
})