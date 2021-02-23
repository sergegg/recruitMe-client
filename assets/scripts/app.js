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
  $('#edit-profile').on('click', profileEvents.onEditProfile)
  // on get profile
  $('#get-profile').on('click', profileEvents.onViewProfile)
  // on delete profile
  $('#delete-profile').on('click', profileEvents.onDeleteProfile)
})
