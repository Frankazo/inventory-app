'use strict'
// const store = require('../store')

const createItemSucces = function (apiAnswer) {
  console.log(apiAnswer)
}
const failure = function () {
  $('#Messages').text('Error').removeClass('success').addClass('failure')
}

// export all functions
module.exports = {
  failure,
  createItemSucces
}
