'use strict'
const config = require('./../config')
const store = require('./../store')

const createProfile = function (data) {
  // console.log('whats the data when we create a profile in API', data)
  // console.log(JSON.stringify(data))
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
  // console.log(data)
  return $.ajax({
    url: config.apiUrl + '/recruitMes/' + data.recruitMes._id,
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
  // console.log(data)
  // console.log(JSON.stringify(data))
  return $.ajax({
    url: config.apiUrl + '/recruitMes/' + data.recruitMes._id,
    method: 'DELETE',
    data: JSON.stringify(data),
    headers: {
      authorization: 'Token ' + store.user.token
    }
  })
}
module.exports = {
  createProfile,
  editProfile,
  index,
  deleteOne
}
