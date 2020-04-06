'use strict'

const config = require('../config')
const store = require('../store')

// Create inventory call
const createInv = function (data) {
  return $.ajax({
    url: config.apiUrl + '/inventories',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

// Update inventory call
const updateInv = function (data, id) {
  return $.ajax({
    url: config.apiUrl + '/inventories/' + id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

// Index All inventories call
const indexInv = function () {
  return $.ajax({
    url: config.apiUrl + '/inventories',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

// Show one inventory call
const showInv = function (id) {
  return $.ajax({
    url: config.apiUrl + '/inventories/' + id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

// delete one inventory call
const deleteInv = function (id) {
  return $.ajax({
    url: config.apiUrl + '/inventories/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

// export all functions
module.exports = {
  createInv,
  indexInv,
  deleteInv,
  showInv,
  updateInv
}
