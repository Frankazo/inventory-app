'use strict'

const config = require('../config')
const store = require('../store')

const createInv = function (data) {
  console.log('in api')
  return $.ajax({
    url: config.apiUrl + '/inventories',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}
module.exports = {
  createInv
}
