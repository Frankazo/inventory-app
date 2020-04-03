'use strict'

// require all necessary documents
const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields')

// New inventory Event
const onNewInv = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.createInv(data)
    .then(function () {
      onIndex(event)
    })
    .catch(ui.Failure)
}

// Index All Event
const onIndex = function () {
  api.indexInv()
    .then(ui.onIndexSucces)
    .catch(ui.Failure)
}

// Index all on button Event
const onIndexbtn = function () {
  event.preventDefault()
  api.indexInv()
    .then(ui.onIndexSucces)
    .catch(ui.Failure)
}

// Delete inventory Event
const onDeleteInv = function (event) {
  event.preventDefault()
  api.deleteInv($(event.target).data('id'))
    .then(function () {
      onIndex(event)
    })
    .catch(ui.Failure)
}

// Show inventory Event
const onShowInv = function (event) {
  event.preventDefault()
  api.showInv($(event.target).data('id'))
    .then(ui.onShowSucces)
    .catch(ui.Failure)
}

// Edit button Event - Card State
const onEditInv = function (event) {
  event.preventDefault()
  ui.onEditstate($(event.target).data('id'))
}

// Update inventory Event - Card State
const onUpdateInv = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.updateInv(data, event.target.id)
    .then(ui.onUpdateSucces)
    .catch(ui.Failure)
}

// export all functions
module.exports = {
  onNewInv,
  onIndex,
  onDeleteInv,
  onShowInv,
  onEditInv,
  onUpdateInv,
  onIndexbtn
}
