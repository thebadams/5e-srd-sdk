const axios = require('axios');
console.log(axios)
const spells = {
  endpoint: 'https://www.dnd5eapi.co/api/spells',
  find: async function() {
    const result = await axios.get(this.endpoint)
    return result
  }
}

module.exports = spells