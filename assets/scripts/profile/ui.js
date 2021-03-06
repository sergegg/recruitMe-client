'use strict'
// const profileEvents = require('./events.js')
// const store = require('./../store')
const profileList = require('./../templates/postList.handlebars')
const profileOne = require('./../templates/postOne.handlebars')
const onError = function (error) {
  $('#message2').text('Failed to execute, please try again or fix the code. ', error)
}

const onCreateProfileSuccess = function (event) {
  $('#profile-message').text('You have created your post successfully, here it is below!!')
  $('#example-post').hide()
  const createdProfileHTML = profileOne({ recruitMe: event.recruitMe })
  $('#display-profile').html(createdProfileHTML)
  $('form').trigger('reset')
}

const onEditProfileSuccess = function (res) {
  $('#profile-message').text('The edit was a success, view by clicking "See All Posts" button')
  $('#create-profile').show()
  $('#get-profile').show()
  $('#edit-profile').hide()
  $('form').trigger('reset')
}

const onGetProfilesSuccess = function (event) {
  $('#profile-message').text('Below are all of the Posts')
  $('#display-profile').hide()
  $('#display-profile').text('')
  $('#display-profile').show()
  $('#create-profile').show()
  $('#edit-profile').hide()
  const profileHTML = profileList({ profiles: event.recruitMes })
  $('#display-profile').append(profileHTML)
}

const onGetProfileEditFailure = function (res) {
  $('#profile-message').text('you have requested to edit something that is not yours!')
  $('#edit-profile').hide()
  $('form').trigger('reset')
}

const onGetProfileEditSuccess = function (res) {
  $('#profile-message').text('you have requested to edit the following post')
  $('form').trigger('reset')
  $('#create-profile').hide()
  $('#display-profile').hide()
  const data = res.recruitMe
  $('#edit-profile-name').val(data.full_name)
  $('#edit-profile-dob').val(data.date_of_birth)
  $('#edit-profile-url').val(data.resume_Url)
  $('#edit-profile-skills').val(data.extra_skills)
}
const onDeleteProfileSuccess = function (event) {
  $('#profile-message').text('You have deleted the requested Post')
  $('#display-profile').hide()
  $('form').trigger('reset')
  $('#display-Profile').text('')
}
module.exports = {
  onError,
  onCreateProfileSuccess,
  onGetProfileEditFailure,
  onEditProfileSuccess,
  onGetProfileEditSuccess,
  onGetProfilesSuccess,
  onDeleteProfileSuccess
}
