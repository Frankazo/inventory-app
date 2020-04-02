'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // auth event handlers, for Sign Up, Sign In, Change Password and Sign Out
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-Pw').on('submit', authEvents.onChangePW)
  $('#sign-out').on('submit', authEvents.onSignOut)
})
