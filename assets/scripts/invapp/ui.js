'use strict'
const store = require('../store')

const createInvSuccess = function (apiAnswer) {
  console.log('in ui')
  console.log(apiAnswer.inventory)
  store.inventory = apiAnswer.inventory
}

const failure = function () {
  $('#Messages').text('Error').removeClass('success').addClass('failure')
}

module.exports = {
  createInvSuccess,
  failure
}
