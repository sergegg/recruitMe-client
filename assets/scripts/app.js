'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events')
const profileEvents = require('./profile/events.js')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('#pre-signIn').show()
  $('#post-signIn').hide()
  $('#edit-profile').hide()
  $('#authenticated').hide()
  $('#sign-up').on('submit', authEvents.onSignUp)
  // set up the sign up
  $('#sign-in').on('submit', authEvents.onSignIn)
  // set up the sign up
  $('#change-pw').on('submit', authEvents.onChangePw)
  // set up the sign up
  $('#sign-out').on('click', authEvents.onSignOut)
  // events for creating the profiles
  // create a new profile
  $('#create-profile').on('submit', profileEvents.onCreateProfile)
  // edit your profile
  $('#display-profile').on('click', '.edit-button', profileEvents.onGetProfileEdit)
  // on get profile
  $('#get-profile').on('click', profileEvents.onViewProfile)
  // on delete profile
  $('#display-profile').on('click', '.delete-button', profileEvents.onDeleteProfile)
  // on edit profile
  $('#edit-profile').on('submit', profileEvents.onEditProfile)
  // show the exmaple profile on click
  // $('#example-post').on('click', profileEvents.onExample)
})
