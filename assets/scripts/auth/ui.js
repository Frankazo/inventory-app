'use strict'
const store = require('../store')
const signUpSuccess = function (data) {
  $('#Messages').text('Signed up Succesfully, you have to Log in').removeClass('failure').addClass('success')
  $('.dropdown-menu').removeClass('show')
  document.getElementById('sign-up').reset()
}
const signUpFailure = function () {
  $('#Messages').text('Error Signing up').removeClass('success').addClass('failure')
  document.getElementById('sign-up').reset()
}

const signInSuccess = function (data) {
  $('#Messages').text('Signed in Succesfully').removeClass('failure').addClass('success')
  $('#navbarDropdown3, #sign-out, .cards').removeClass('hide')
  $('#navbarDropdown1, #navbarDropdown2').addClass('hide')
  $('.dropdown-menu').removeClass('show')

  document.getElementById('sign-in').reset()
  store.user = data.user
}
const signInFailure = function () {
  $('#Messages').text('Error Signing in').removeClass('success').addClass('failure')
  document.getElementById('sign-in').reset()
}

const changePWSuccess = function () {
  $('#Messages').text('Changed Password Succesfully').removeClass('failure').addClass('success')
  document.getElementById('change-Pw').reset()
}
const changePWFailure = function () {
  $('#Messages').text('Error changing Password').removeClass('success').addClass('failure')
  document.getElementById('change-Pw').reset()
}

const signOutSuccess = function () {
  $('#Messages').text('Signed out Succesfully').removeClass('failure').addClass('success')
  $('#sign-out, #navbarDropdown3, .cards').addClass('hide')
  $('#navbarDropdown1, #navbarDropdown2').removeClass('hide')
}
const signOutFailure = function () {
  $('#Messages').text('Error Signing out').removeClass('success').addClass('failure')
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
