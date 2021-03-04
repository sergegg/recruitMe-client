'use strict'
const profileEvents = require('./events.js')

// const store = require('./../store')

const onError = function (error) {
  $('#message2').text('Failed to execute, please try again or fix the code. ', error)
}

const onCreateProfileSuccess = function (event) {
  // console.log('whats the data when we create a profile in API', event)
  $('#profile-message').text('You have created your Profile successfully!')
  $('#display-Profile').hide()
  $('#display-Profile').show()
  const profileHTML = `
    <h4>The profile name is: ${event.recruitMe.full_name}</h4>
    <h6>The D.O.B. is: ${event.recruitMe.date_of_birth}</h6>
    <h6>The ID of the new post is: ${event.recruitMe.id}</h6>
    <h6>Resume URL is: ${event.recruitMe.resume_Url}</h6>
    <h6>Extra skills are:  ${event.recruitMe.extra_skills}</h6>
  `
  $('#profile-message').text(profileHTML)
  $('form').trigger('reset')
}
const onEditProfileSuccess = function (res) {
  $('#profile-message').text('The edit was a success, view new Profile using the view Profile option')
  $('form').trigger('reset')
}

const onGetProfilesSuccess = function (event) {
  $('#profile-message').text('Below are all of the Profiles')
  $('#profile-message').hide()
  $('#profile-message').text('')
  $('#profile-message').show()
  for (let i = 0; i < event.recruitMes.length; i++) {
    const profileHTML = `
  <h4>The Profile name is: ${event.recruitMes[i].full_name}</h4>
  <h6>The id is: ${event.recruitMes[i].id}</h6>
  <h6>The D.O.B. is: ${event.recruitMes[i].date_of_birth}</h6>
  <h6>Related URL: ${event.recruitMes[i].resume_Url}</h6>
  <h6>Extra skills are:  ${event.recruitMes[i].extra_skills}</h6>
  <button class="delete-button" data-id="${event.recruitMes[i].id}">Delete</button>
  <button class="edit-button" data-id="${event.recruitMes[i].id}">Edit</button>
  `
    $('#profile-message').append(profileHTML)
  }
}

const onGetProfileEditSuccess = function (res) {
  $('#profile-message').text('you have requested to edit the following post')
  console.log(res)
  $('form').trigger('reset')
  const data = res.recruitMe
  console.log('data is', data)
  console.log('data is fullname', data.full_name)
  $('#edit-profile-name').val(data.full_name)
  $('#edit-profile-dob').val(data.date_of_birth)
  $('#edit-profile-url').val(data.resume_Url)
  $('#edit-profile-skills').val(data.extra_skills)
  // $('#edit-profile-name').val(data.full_name)
  // $('form').trigger('reset')
}
const onDeleteProfileSuccess = function (event) {
  $('#profile-message').text('You have deleted the requested Profile')
  $('form').trigger('reset')
  $('#display-Profile').text('')
}
module.exports = {
  onError,
  onCreateProfileSuccess,
  onEditProfileSuccess,
  onGetProfileEditSuccess,
  onGetProfilesSuccess,
  onDeleteProfileSuccess
}
