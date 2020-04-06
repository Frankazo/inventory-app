'use strict'

const config = require('../config')
const store = require('../store')

// Create item call
const createItem = function (data) {
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
const indexAllItems = function () {
  return $.ajax({
    url: config.apiUrl + '/items',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

// Delete an item call
const deleteItem = function (id) {
  return $.ajax({
    url: config.apiUrl + '/items/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

// export all functions
module.exports = {
  createItem,
  indexAllItems,
  deleteItem
}
