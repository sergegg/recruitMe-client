'use strict'

const store = require('./../store')

const onError = function (error) {
  $('#auth-message').text('Failed to execute, please try again or fix the code. ', error)
}
const signUpSuccess = function (response) {
  $('#auth-message').text('User signed up successfully!! :) welcome to the website')
  $('form').trigger('reset')
}
const signInSuccess = function (response) {
  $('#auth-message').text('Signed in successfully, enjoy your time! ')
  $('#post-signIn').show()
  $('#pre-signIn').hide()
  $('#authenticated').show()
  $('#create-profile').show()
  // $('#example-post').hide()
  store.user = response.user
  $('form').trigger('reset')
}
const changePwSuccess = function (response) {
  $('#auth-message').text('Changed Password Successfully. ')
  $('form').trigger('reset')
}
const signOutSuccess = function (response) {
  $('#auth-message').text('Signed out successfully, come back soon! ')
  $('#post-signIn').hide()
  $('#pre-signIn').show()
  $('#authenticated').hide()
  store.user = null
  $('form').trigger('reset')
}

module.exports = {
  onError,
  signUpSuccess,
  signInSuccess,
  changePwSuccess,
  signOutSuccess
}
