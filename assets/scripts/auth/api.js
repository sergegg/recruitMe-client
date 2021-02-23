'use strict'

// import config
const config = require('./../config')

// {
//   credentials: {
//     email: data.credentials.email,
//     password: data.credentials.password,
//     password_confirmation: data.credentials.passwordConfirmation
//   }
// }
// store is required in order for the user token that we save
// when the user signs in
const store = require('./../store')

const signUp = function (data) {
  console.log('what is data', data)
  console.log('what is data', data.credentials)
  return $.ajax({
    url: config.apiUrl + '/sign-up/',
    method: 'POST',
    data: JSON.stringify(data)
  })
}

const signIn = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-in/',
    method: 'POST',
    data: JSON.stringify(data)
  })
}

const changePw = function (data) {
  console.log('data is: ', data)
  return $.ajax({
    url: config.apiUrl + '/change-pw/',
    method: 'PATCH',
    data: JSON.stringify(data),
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
