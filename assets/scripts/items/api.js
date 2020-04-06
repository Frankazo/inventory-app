'use strict'

const config = require('../config')
const store = require('../store')

// Create item call
const createItem = function (data) {
  console.log('in items api')
  return $.ajax({
    url: config.apiUrl + '/items',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: {
      'item': {
        'name': data.items.name,
        'quantity': data.items.quantity,
        'inventory_id': store.inventory.id
      }
    }
  })
}

// Index All items call
const indexItems = function () {
  return $.ajax({
    url: config.apiUrl + '/items',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

// export all functions
module.exports = {
  createItem,
  indexItems
}
