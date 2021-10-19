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

  const NoDataReturned = {
    status: 404,
    statusText: 'Not Found',
    data: undefined
  }

  const RequestRejected = {
    request: {
      message: 'Request Failed'
    }
  }

  const NoRequestMade = {
    message: 'Request Failed To Be Called'
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
    describe('Spells Find Function Success', () => {
      test('Spells find function returns Expected Data As defined in the mockresolveddata', async () => {
      const data = await spells.find()
      expect(axios).toHaveBeenCalled()
      expect(typeof data).toBe('object')
      expect(data).toEqual(mockResolvedData.data)
      })
    })
    describe('Spells Find Function Failures', () => {
      test.todo('If there is no data returned, but there was a successful response, return with mockRejectedData')
      test.todo('If there is no response from the axios call, return with rejected request object')
      test.todo('If there was no response OR request made, return with error message')
    })
  })
})
