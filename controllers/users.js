const express = require('express')
const User = require('../models/user')

const userRouter = express.Router()

userRouter.get('/', async (request, response, next) => {
  const users = await User.find({})
  try {
    response.send(users)
  } catch (error) {
    next(error)
  }
})


// userRouter.get('/', async (request, response, next) => {
//   const users = await User.find({})
//   try {
//     response.send(users)
//   } catch (error) {
//     next(error)
//   }
// })



module.exports = { userRouter }