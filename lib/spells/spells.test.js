const spells = require('./spells');
const axios = require('axios');
const mockResolvedData = {
    status: 200,
    statusText: 'OK',
    data: {
      index: 'spell-name',
      name: 'Spell',
      desc: ['A Spell'],
      higher_level: ['Something Happens'],
      range: '60 feet',
      components: ['V', 'S', 'M'],
      material: 'Some Stuff',
      ritual: true,
      duration: 'Instantaneous',
      casting_time: '1 action',
      level: 1,
      attack_type: 'ranged'
    }
  }

jest.mock('axios', () => jest.fn(() => {
  return Promise.resolve(mockResolvedData)
}))
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
      expect(axios).toHaveBeenCalled()
      expect(typeof data).toBe('object')
      expect(data).toEqual(mockResolvedData.data)
    })
  })
})
