const axios = require('axios');
const spells = {
  endpoint: 'https://www.dnd5eapi.co/api/spells',
  find: async function() {
    try {
      const {data, status, statusText} = await axios({ url:this.endpoint, method: 'GET' })
      if(status !== 200) {
        throw new Error(status, statusText)
      } else {
        console.log(data)
        return data
      }
    } catch (error) {
      if(error.response) {
        console.log(error.response.status, error.response.statusText)
        return {
          status: error.response.status,
          statusText: error.response.statusText
        }
      } else if(error.request) {
        console.log(error.request)
        return error.resquest
      } else {
        console.log(error.message)
        return {
          message: error.message
        }
      }
    }
    
    
  }
}

spells.find()

module.exports = spells