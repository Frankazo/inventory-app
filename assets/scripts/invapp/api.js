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

const indexInv = function () {
  console.log('in api')
  return $.ajax({
    url: config.apiUrl + '/inventories',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  createInv,
  indexInv
}
