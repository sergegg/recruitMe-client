'use strict'
// https://helprecruitme.herokuapp.com
let apiUrl
const apiUrls = {
  production: 'https://helprecruitme.herokuapp.com',
  development: 'http://localhost:8000'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

module.exports = {
  apiUrl
}
