'use strict'
const config = require('./../config')
const store = require('./../store')

const createProfile = function (data) {
  return $.ajax({
    url: config.apiUrl + '/recruitMes/',
    method: 'POST',
    headers: {
      authorization: 'Token ' + store.user.token
    },
    data: JSON.stringify(data)
  })
}
const editProfile = function (data) {
  return $.ajax({
    url: config.apiUrl + '/recruitMes/' + data.recruitMe._id,
    method: 'PATCH',
    headers: {
      authorization: 'Token ' + store.user.token
    },
    data: JSON.stringify(data)
  })
}

// const viewProfile = function (data) {
//   return $.ajax({
//     url: config.apiUrl + '/Profiles/' + data.Profile._id,
//     method: 'GET',
//     headers: {
//       authorization: 'Token ' + store.user.token
//     },
//     data: data
//   })
// }

const index = function () {
  return $.ajax({
    url: config.apiUrl + '/recruitMes/',
    method: 'GET',
    headers: {
      authorization: 'Token ' + store.user.token
    }
  })
}
const deleteOne = function (data) {
  return $.ajax({
    url: config.apiUrl + '/recruitMes/' + data.recruitMe._id,
    method: 'DELETE',
    headers: {
      authorization: 'Token ' + store.user.token
    },
    data: data
  })
}
module.exports = {
  createProfile,
  editProfile,
  index,
  deleteOne
}
