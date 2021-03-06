'use strict'
const store = require('../store')
const invEvents = require('../invapp/events')

const signUpSuccess = function (data) {
  $('#Messages').text('Signed up Succesfully, you have to Log in').removeClass('failure').addClass('success')
  $('.dropdown-menu').removeClass('show')
  document.getElementById('sign-up').reset()
  setTimeout(function () { $('#Messages').text('') }, 750)
}
const signUpFailure = function () {
  $('#Messages').text('Error Signing up').removeClass('success').addClass('failure')
  document.getElementById('sign-up').reset()
  setTimeout(function () { $('#Messages').text('') }, 750)
}

const signInSuccess = function (data) {
  $('#Messages').text('Signed in Succesfully').removeClass('failure').addClass('success')
  $('.logout-pass, .cards').removeClass('hide')
  $('.siging, .jumbotron').addClass('hide')
  $('.dropdown-menu').removeClass('show')
  setTimeout(function () { $('#Messages').text('') }, 750)
  document.getElementById('sign-in').reset()
  store.user = data.user
  invEvents.onIndex()
}
const signInFailure = function () {
  $('#Messages').text('Error Signing in').removeClass('success').addClass('failure')
  document.getElementById('sign-in').reset()
  setTimeout(function () { $('#Messages').text('') }, 750)
}

const changePWSuccess = function () {
  $('#Messages').text('Changed Password Succesfully').removeClass('failure').addClass('success')
  document.getElementById('change-Pw').reset()
  setTimeout(function () { $('#Messages').text('') }, 750)
}
const changePWFailure = function () {
  $('#Messages').text('Error changing Password').removeClass('success').addClass('failure')
  document.getElementById('change-Pw').reset()
  setTimeout(function () { $('#Messages').text('') }, 750)
}

const signOutSuccess = function () {
  $('#Messages').text('Signed out Succesfully').removeClass('failure').addClass('success')
  $('.logout-pass, .cards, .inv-area, #index-btn').addClass('hide')
  $('.siging, .jumbotron').removeClass('hide')
  setTimeout(function () { $('#Messages').text('') }, 750)
}

const signOutFailure = function () {
  $('#Messages').text('Error Signing out').removeClass('success').addClass('failure')
  setTimeout(function () { $('#Messages').text('') }, 750)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePWSuccess,
  changePWFailure,
  signOutSuccess,
  signOutFailure
}
