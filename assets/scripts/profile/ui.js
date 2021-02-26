'use strict'
const profileEvents = require('./events.js')

// const store = require('./../store')

const onError = function (error) {
  $('#message2').text('Failed to execute, please try again or fix the code. ', error)
}

const onCreateProfileSuccess = function (event) {
  // console.log('whats the data when we create a profile in API', event)
  $('#message').text('You have created your Profile successfully!')
  $('#display-Profile').hide()
  $('#display-Profile').show()
  $('#display-Profile-template').hide()
  // console.log('what is event', event)
  console.log('whats event', event.recruitMe)
  const profileHTML = `
    <h4>The Profile name is: ${event.recruitMe.full_name}</h4>
    <h6>The owner is: ${event.recruitMe.id}</h6>
    <h6>Related URL: ${event.recruitMe.resume_Url}</h6>
    <h6>Extra skills are:  ${event.recruitMe.extra_skills}</h6>
  `
  $('#message').html(profileHTML)
  $('form').trigger('reset')
}
const onEditProfileSuccess = function (event) {
  $('#message').text('The edit was a success, view new Profile using the view Profile option')

  $('form').trigger('reset')
}

const onGetProfilesSuccess = function (event) {
  // console.log('event in ui.js index', event)
  $('#message').text('Below are all of the Profiles')
  $('#message').hide()
  $('#message').text('')
  // console.log('whats event ', event)
  $('#message').show()
  console.log('event in get', event)
  console.log('id', event.recruitMes.id)
  for (let i = 0; i < event.recruitMes.length; i++) {
    const profileHTML = `
  <h4>The Profile name is: ${event.recruitMes[i].full_name}</h4>
  <h6>The id is: ${event.recruitMes[i].id}</h6>
  <h6>Related URL: ${event.recruitMes[i].resume_Url}</h6>
  <h6>Extra skills are:  ${event.recruitMes[i].extra_skills}</h6>
  <button id="delete-button" onclick = profileEvents.onDeleteProfile" class="remove" name="delete-button">delete</button>
  <button id="edit-button" name="edit-button">edit</button>
`
// $('#delete-button').on('click', profileEvents.onDeleteProfile)

    // onclick="document.getElementById("recruitMe").remove()"
    // $('#delete-button').on('onClick', '.remove', function () {
    //   // console.log(event)
    //   $(this).parent('.single').remove()
    // })

    // $('#delete-me').on('click', function (event) {
    // console.log('event in onclick', event)
    //   const item = event.recruitMes
    // console.log('whats item ', item)
    // })
    $('#message').append(profileHTML)
  }
}

const onDeleteProfileSuccess = function (event) {
  $('#message2').text('You have deleted the requested Profile')
  $('form').trigger('reset')
  $('#display-Profile').text('')
}
module.exports = {
  onError,
  onCreateProfileSuccess,
  onEditProfileSuccess,
  // onViewProfileSuccess,
  onGetProfilesSuccess,
  onDeleteProfileSuccess
}
