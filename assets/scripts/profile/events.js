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
const onGetProfileEdit = function (event) {
  event.preventDefault()
  $('#edit-profile').show()
  // console.log(event)
  // console.log(event.data)
  const id = $(event.target).data('id')
  api.getProfile(id)
    .then(ui.onGetProfileEditSuccess)
    .then(() => $('#edit-profile').attr('data-id', id))
    .catch(ui.onError)
}

const onEditProfile = function (event) {
  event.preventDefault()
  // $('#edit-profile').text()
  const data = getFormFields(event.target)
  const id = $(event.target).data('id')
  api.editProfile(data, id)
    .then(ui.onEditProfileSuccess)
    .catch(ui.onError)
}

const onViewProfile = function (event) {
  event.preventDefault()
  // console.log('event in events.js index', event)
  api.index()
    .then(ui.onGetProfilesSuccess)
    .catch(ui.onError)
}

const onDeleteProfile = function (event) {
  // console.log('event in delete in events.js ', event)
  event.preventDefault()
  // const data = getFormFields(event.target)
  const id = $(event.target).data('id')
  // console.log('in events ', event.target)
  api.deleteOne(id)
    .then(ui.onDeleteProfileSuccess)
    .catch(ui.onError)
}

module.exports = {
  onCreateProfile,
  onGetProfileEdit,
  onEditProfile,
  onViewProfile,
  onDeleteProfile
}
