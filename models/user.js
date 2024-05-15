const mongoose = require('mongoose')


const userSchema = new mongoose.Schema({
  email: {type: String, required: true},
  password: {type: Boolean, required: true},
  // providers: [{type: String, required: false}],
})

userSchema.set('toJSON', {
  transform: (document, returnObject) => {
    returnObject.id = returnObject._id.toString()

    delete returnObject.__v
    delete returnObject._d
    delete returnObject.password
  }
})


module.exports = mongoose.model('User', userSchema)