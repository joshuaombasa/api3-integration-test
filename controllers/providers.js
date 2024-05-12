const express = require('express')
const Provider = require('../models/provider')

const providerRouter = express.Router()

providerRouter.get('/', async (request,response,next) => {
  const providers = await Provider.find({})
  try {
    response.send(providers)
  } catch (error) {
    next(error)
  }
})

// providerRouter.get('/', async (request,response,next) => {
//   const providers = await Provider.find({})
//   try {
//     response.send(providers)
//   } catch (error) {
//     next(error)
//   }
// })

module.exports = providerRouter