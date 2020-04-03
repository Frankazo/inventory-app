'use strict'
const store = require('../store')
const showInventoryTemplate = require('../templates/inventory-listing.handlebars')

const onShowSucces = function (apiAnswer) {
  $('.inv-area, #index-btn').removeClass('hide')
  $('.cards').addClass('hide')
  store.inventory = apiAnswer.inventory
  console.log(store.inventory)
}

const failure = function () {
  $('#Messages').text('Error').removeClass('success').addClass('failure')
}

const onIndexSucces = (data) => {
  const showInventoriesHtml = showInventoryTemplate({ inventories: data.inventories })
  $('.deck').html(showInventoriesHtml)
  $('.cards').removeClass('hide')
  $('#index-btn, .inv-area').addClass('hide')
}

module.exports = {
  onShowSucces,
  onIndexSucces,
  failure
}
