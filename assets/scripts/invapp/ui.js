'use strict'
// require all the necesary files
const store = require('../store')
const eventsItem = require('../items/events.js')

// handlebards
const showInventoryTemplate = require('../templates/inventory-listing.handlebars')
const showEditTemplate = require('../templates/edit-state.handlebars')
const showUpdatedTemplate = require('../templates/updated-listing.handlebars')

// On show function
const onShowSucces = function (apiAnswer) {
  $('.inv-area, #index-btn').removeClass('hide')
  $('.cards').addClass('hide')
  store.inventory = apiAnswer.inventory
  eventsItem.indexItems()
}

// Error message
const failure = function () {
  $('#Messages').text('Error').removeClass('success').addClass('failure')
  setTimeout(function () { $('#Messages').text('') }, 750)
}

const onIndexSucces = (data) => {
  for (let i = 0; i < data.inventories.length; i++) {
    data.inventories[i].date = data.inventories[i].date.slice(0, 10)
  }
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
  data.inventory.date = data.inventory.date.slice(0, 10)
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
