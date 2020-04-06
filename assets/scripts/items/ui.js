'use strict'
const store = require('../store')

const showItemsTemplate = require('../templates/item-listing.handlebars')

const onIndexSucces = function (apiAnswer) {
  // Map a new array to only display specific inventory items
  const newArray = apiAnswer.items.map(x => x.inventory_id === store.inventory.id ? x : false)
  // create the items template and added to the html
  const showItemsHtml = showItemsTemplate({ items: newArray })
  $('.items').html(showItemsHtml)
}

const failure = function () {
  // error message to handle all errors
  $('#Messages').text('Error').removeClass('success').addClass('failure')
}

// export all functions
module.exports = {
  failure,
  onIndexSucces
}
