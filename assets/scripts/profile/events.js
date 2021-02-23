'use strict'

const api = require('./api')
const ui = require('./ui')

const getFormFields = require('./../../../lib/get-form-fields')

const onCreateProfile = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.createProfile(data)
    .then(ui.onCreateProfileSuccess)
    .catch(ui.onError)
}
const onEditProfile = function (event) {
  event.preventDefault()
  console.log(event)
  console.log(event.data)
  const data = getFormFields(event.target)
  api.editProfile(data)
    .then(ui.onEditProfileSuccess)
    .catch(ui.onError)
}
// const onViewProfile = function (event) {
//   event.preventDefault()
//   const data = getFormFields(event.target)
//   if (data.profile._id === '') {
//     $('#message2').text('Please enter a valid ID & try again...')
//   } else {
//     api.viewProfile(data)
//       .then(ui.onViewProfileSuccess)
//       .catch(ui.onError)
//   }
// }

const onViewProfile = function (event) {
  event.preventDefault()
  console.log('event in events.js index', event)
  api.index()
    .then(ui.onGetProfilesSuccess)
    .catch(ui.onError)
}

const onDeleteProfile = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.deleteOne(data)
    .then(ui.onDeleteProfileSuccess)
    .catch(ui.onError)
}

module.exports = {
  onCreateProfile,
  onEditProfile,
  onViewProfile,
  onDeleteProfile
}
