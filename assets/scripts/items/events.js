'use strict'

// require all necessary documents
const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields')

// New inventory Event
const onCreateItem = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  // console.log('in item events')
  api.createItem(data)
    .then(function () {
      indexItems()
    })
    .catch(ui.failure)
}

// Index all items Event
const indexItems = function () {
  api.indexAllItems()
    .then(ui.onIndexSucces)
    .catch(ui.failure)
}

// New inventory Event
const onDeleteItem = function (event) {
  event.preventDefault()
  api.deleteItem($(event.target).data('id'))
    .then(function () {
      indexItems()
    })
    .catch(ui.failure)
}

// export all functions
module.exports = {
  onCreateItem,
  indexItems,
  onDeleteItem
}
