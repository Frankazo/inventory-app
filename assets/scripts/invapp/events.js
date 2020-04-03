'use strict'

// require all necessary documents
const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields')

const onNewInv = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  // console.log(data)
  // console.log('in Events')
  api.createInv(data)
    .then(ui.createInvSuccess)
    .catch(ui.Failure)
}
// export all functions
module.exports = {
  onNewInv
}
