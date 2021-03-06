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
  const id = $(event.target).data('id')
  api.getProfile(id)
    .then(ui.onGetProfileEditSuccess)
    .then(() => $('#edit-profile').attr('data-id', id))
    .catch(ui.onGetProfileEditFailure)
}

const onEditProfile = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  const id = $(event.target).data('id')
  api.editProfile(data, id)
    .then(ui.onEditProfileSuccess)
    .catch(ui.onError)
}

const onViewProfile = function (event) {
  event.preventDefault()
  api.index()
    .then(ui.onGetProfilesSuccess)
    .catch(ui.onError)
}

const onDeleteProfile = function (event) {
  event.preventDefault()
  const id = $(event.target).data('id')
  api.deleteOne(id)
    .then(ui.onDeleteProfileSuccess)
    .catch(ui.onError)
}

// const onExample = function (event) {
//   event.preventDefault()
//   console.log(event)
//   $('#example-post').show()
// }

module.exports = {
  onCreateProfile,
  onGetProfileEdit,
  onEditProfile,
  onViewProfile,
  onDeleteProfile
  // onExample
}
