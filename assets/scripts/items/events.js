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
    .then(ui.createItemSucces)
    .catch(ui.failure)
}

// Index all items Event
const indexItems = function () {
  // event.preventDefault()
  api.indexItems()
    .then(ui.onIndexSucces)
    .catch(ui.failure)
}

// export all functions
module.exports = {
  onCreateItem,
  indexItems
}
