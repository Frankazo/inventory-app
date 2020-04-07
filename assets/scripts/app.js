'use strict'

const authEvents = require('./auth/events.js')
const invEvents = require('./invapp/events')
const itemEvents = require('./items/events')

$(() => {
  // inv event handlers, for create, update, show and delete
  invEvents.addHandlers()
  // items event handlers, for create, update, show and delete
  itemEvents.addHandlers()
  // auth event handlers, for Sign Up, Sign In, Change Password and Sign Out
  authEvents.addHandlers()
})
