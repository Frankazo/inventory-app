'use strict'
const store = require('../store')
const showInventoryTemplate = require('../templates/inventory-listing.handlebars')

const createInvSuccess = function (apiAnswer) {
  console.log('in ui')
  console.log(apiAnswer.inventory)
  $('.inv-area, #index-btn').removeClass('hide')
  $('.cards').addClass('hide')
  store.inventory = apiAnswer.inventory
}

const failure = function () {
  $('#Messages').text('Error').removeClass('success').addClass('failure')
}

const onIndexSucces = (data) => {
  console.log(data)
  const showInventoriesHtml = showInventoryTemplate({ inventories: data.inventories })
  $('.deck').html(showInventoriesHtml)
  $('.cards').removeClass('hide')
  $('#index-btn, .inv-area').addClass('hide')
}

module.exports = {
  createInvSuccess,
  onIndexSucces,
  failure
}
