'use strict'

// require all necessary documents
const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields')

// New inventory Event
const onCreateItem = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.createItem(data)
    .then(ui.createItemSucces)
    .catch(ui.Failure)
}

// export all functions
module.exports = {
  onCreateItem
}
