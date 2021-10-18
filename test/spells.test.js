const spells = require('../lib/spells');
describe('Spell', () => {
  test('Spells is an object', () => {
  expect(typeof spells).toBe('object')
  })
  describe('Spell endpoint Attribute', () => {
    test('Spell has an attrubute, endpoint', () => {
    expect(spells.endpoint).toBeDefined()
    })
    test('Spell endpoint attribute should be a string equalling "https://www.dnd5eapi.co/api/spells"', () => {
      expect(typeof spells.endpoint).toBe('string')
      expect(spells.endpoint).toEqual('https://www.dnd5eapi.co/api/spells')
    })
  })
  describe('Spell find Attribute', () => {
    test('Spell has an attribute, "find"', () => {
    expect(spells.find).toBeDefined()
    })
    test('Spell.find is a function', () => {
    expect(typeof spells.find).toBe('function')
    })
    test('Spells find function returns json', async () => {
      const data = await spells.find()
      expect(typeof data).toBe('object')
    })
  })
})
