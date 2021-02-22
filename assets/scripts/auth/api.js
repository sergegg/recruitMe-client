'use strict'

// import config
const config = require('./../config')

// store is required in order for the user token that we save
// when the user signs in
const store = require('./../store')

const signUp = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-up/',
    method: 'POST',
    data
  })
}

const signIn = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-in/',
    method: 'POST',
    data
  })
}

const changePw = function (data) {
  console.log('data is: ', data)
  return $.ajax({
    url: config.apiUrl + '/change-pw/',
    method: 'PATCH',
    data,
    headers: {
      Authorization: 'Token ' + store.user.token
    }
  })
}

const signOut = function (formData) {
  return $.ajax({
    url: config.apiUrl + '/sign-out/',
    method: 'DELETE',
    headers: {
      Authorization: 'Token ' + store.user.token
    }
  })
}

module.exports = {
  signUp,
  signIn,
  changePw,
  signOut
}
