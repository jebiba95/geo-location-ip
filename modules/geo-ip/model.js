'use strict';

var mongoose = require('mongoose');

//Model of position.
var GeoIpSchema = new mongoose.Schema({
  ip: {
    type: String,
    required: true,
    index: true
  },
  city: {
    type: String
  },
  country: {
    type: String
  },
  lat: {
    type: String
  },
  lng: {
    type: String
  },
  region: {
    type: String
  },
  organization: {
    type: String
  },
  dateTime: {
    type: Date
  }
});

module.exports = mongoose.model('GeoIp', GeoIpSchema);