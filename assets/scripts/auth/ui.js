'use strict'

const store = require('./../store')

const onError = function (error) {
  $('#message').text('Failed to execute, please try again or fix the code. ', error)
}
const signUpSuccess = function (response) {
  // console.log('did we make it into ui?? ', response)
  $('#message').text('User signed up successfully!! :) welcome to the website')
  // reset form
  $('form').trigger('reset')
}
const signInSuccess = function (response) {
  $('#message').text('Signed in successfully, enjoy your time! ')
  $('#post-signIn').show()
  // store the token which was assigned to the user upon sign in.
  store.user = response.user
  // reset form
  $('form').trigger('reset')
}
const changePwSuccess = function (response) {
  $('#message').text('Changed Password Successfully. ')
  // reset form again
  $('form').trigger('reset')
}
const signOutSuccess = function (response) {
  $('#message').text('Signed out successfully, come back soon! ')
  // erase user token
  $('#post-signIn').hide()
  store.user = null
  // reset
  $('form').trigger('reset')
}

module.exports = {
  onError,
  signUpSuccess,
  signInSuccess,
  changePwSuccess,
  signOutSuccess
}
