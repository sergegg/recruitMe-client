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

const getProfile = function (id) {
  return $.ajax({
    url: config.apiUrl + '/recruitMes/' + id + '/',
    method: 'GET',
    headers: {
      authorization: 'Token ' + store.user.token
    }
  })
}

const editProfile = function (data, id) {
  console.log('i api data is ', data)
  console.log('in api id is ', id)
  return $.ajax({
    url: config.apiUrl + '/recruitMes/' + id + '/',
    method: 'PATCH',
    headers: {
      authorization: 'Token ' + store.user.token
    },
    data: JSON.stringify(data)
  })
}

const index = function () {
  return $.ajax({
    url: config.apiUrl + '/recruitMes/',
    method: 'GET',
    headers: {
      authorization: 'Token ' + store.user.token
    }
  })
}
const deleteOne = function (id) {
  // console.log(data)
  // console.log(JSON.stringify(data))
  // console.log(id)
  return $.ajax({
    url: config.apiUrl + '/recruitMes/' + id,
    method: 'DELETE',
    // data: JSON.stringify(data),
    headers: {
      authorization: 'Token ' + store.user.token
    }
  })
}
module.exports = {
  createProfile,
  getProfile,
  editProfile,
  index,
  deleteOne
}
