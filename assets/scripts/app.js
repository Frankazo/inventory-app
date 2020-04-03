'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events')
const invEvents = require('./invapp/events')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // inv event handlers, for create, update, show and delete
  $('.deck').on('submit', '#create-btn', invEvents.onNewInv)
  $('.deck').on('click', '.delete-inv-btn', invEvents.onDeleteInv)
  $('.deck').on('click', '.show-inv-btn', invEvents.onShowInv)
  $('.deck').on('click', '.edit-inv-btn', invEvents.onEditInv)
  $('.deck').on('submit', '.update-inv-btn', invEvents.onUpdateInv)
  $('#index-btn').on('submit', invEvents.onIndexbtn)

  // auth event handlers, for Sign Up, Sign In, Change Password and Sign Out
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-Pw').on('submit', authEvents.onChangePW)
  $('#sign-out').on('submit', authEvents.onSignOut)
})
