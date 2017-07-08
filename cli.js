#! /usr/bin/env node

require('weather')(result => {
  if (result.error) {
    console.log('Unable to load the weather.')
    return
  }

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
