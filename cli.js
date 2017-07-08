#! /usr/bin/env node

const weatherApi = require('weather')

weatherApi()
  .then(result => {
    const string = result.city +
      ',' +
      result.region +
      ': ' +
      result.temp +
      ' ' +
      result.unit +
      ' degrees.'
    console.log(string)
  })
  .catch(error => {
    console.log(error)
  })
