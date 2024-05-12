const mongoose = require('mongoose')


const providerSchema = new mongoose.Schema({
  name: {type: String, required: true},
  licenced: {type: Boolean, required: true},
})

providerSchema.set('toJSON', {
  transform: (document, returnObject) => {
    returnObject.id = returnObject._id.toString()

    delete returnObject.__v
    delete returnObject._d
  }
})


module.exports = mongoose.model('Provider', providerSchema)