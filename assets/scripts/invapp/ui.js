'use strict'
const store = require('../store')
const eventsItem = require('../items/events.js')
const showInventoryTemplate = require('../templates/inventory-listing.handlebars')
const showEditTemplate = require('../templates/edit-state.handlebars')
const showUpdatedTemplate = require('../templates/updated-listing.handlebars')

const onShowSucces = function (apiAnswer) {
  $('.inv-area, #index-btn').removeClass('hide')
  $('.cards').addClass('hide')
  store.inventory = apiAnswer.inventory
  eventsItem.indexItems()
}

const failure = function () {
  $('#Messages').text('Error').removeClass('success').addClass('failure')
}

const onIndexSucces = (data) => {
  const showInventoriesHtml = showInventoryTemplate({ inventories: data.inventories })
  $('.deck').html(showInventoriesHtml)
  $('.cards').removeClass('hide')
  $('#index-btn, .inv-area').addClass('hide')
  $('.items').html('')
}
const onEditstate = (id) => {
  const showEditHtml = showEditTemplate({ id: id })
  $(`[data-id= ${id}]`).html(showEditHtml)
}

const onUpdateSucces = (data) => {
  const showUpdateHtml = showUpdatedTemplate({ inventory: data.inventory })
  $(`[data-id= ${data.inventory.id}]`).html(showUpdateHtml)
}

module.exports = {
  onShowSucces,
  onIndexSucces,
  failure,
  onEditstate,
  onUpdateSucces
}
