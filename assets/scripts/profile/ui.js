'use strict'
// const profileEvents = require('./events.js')
// const store = require('./../store')
const profileList = require('./../templates/postList.handlebars')
const profileOne = require('./../templates/postOne.handlebars')
const onError = function (error) {
  $('#message2').text('Failed to execute, please try again or fix the code. ', error)
}

const onCreateProfileSuccess = function (event) {
  // console.log('whats the data when we create a profile in API', event)
  $('#profile-message').text('You have created your post successfully, here it is below!!')
  // $('#display-Profile').hide()
  // $('#display-Profile').show()
  // console.log(event.recruitMe)
  // if ((event.recruitMe.full_name) === ('<' || '>')) {
  //   $('profile-message').text('please enter a valid value ')
  // } else {
  // element.textContent=data;
  // const data = event.recruitMe
  // console.log(data.toString())
  // data.toString()
  const createdProfileHTML = profileOne({ recruitMe: event.recruitMe })
  $('#display-profile').html(createdProfileHTML)
  // }
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
  $('#edit-profile').hide()
  const profileHTML = profileList({ profiles: event.recruitMes })
  $('#display-profile').append(profileHTML)
}

const onGetProfileEditFailure = function (res) {
  $('#profile-message').text('you have requested to edit something that is not yours!')
  $('#edit-profile').hide()
  // console.log('error res', res.responseJSON.detail)
  $('form').trigger('reset')
}

const onGetProfileEditSuccess = function (res) {
  $('#profile-message').text('you have requested to edit the following post')
  // console.log('res', res)
  // if (!res) {
  //   $('#edit-profile').hide()
  //   $('#profile-message').text('you cannot edit that which you dont own')
  // }
  $('form').trigger('reset')
  $('#create-profile').hide()
  $('#display-profile').hide()
  const data = res.recruitMe
  // console.log('data is', data)
  // console.log('data is fullname', data.full_name)
  $('#edit-profile-name').val(data.full_name)
  $('#edit-profile-dob').val(data.date_of_birth)
  $('#edit-profile-url').val(data.resume_Url)
  $('#edit-profile-skills').val(data.extra_skills)
  // $('#edit-profile-name').val(data.full_name)
  // $('form').trigger('reset')
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
