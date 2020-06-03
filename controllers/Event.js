'use strict';

var utils = require('../utils/writer.js');
var Event = require('../service/EventService');

module.exports.eventsEventIdGET = function eventsEventIdGET (req, res, next) {
  var eventId = req.swagger.params['eventId'].value;
  Event.eventsEventIdGET(eventId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.eventsEventIdVolunteersGET = function eventsEventIdVolunteersGET (req, res, next) {
  var eventId = req.swagger.params['eventId'].value;
  Event.eventsEventIdVolunteersGET(eventId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.eventsGET = function eventsGET (req, res, next) {
  var limit = req.swagger.params['limit'].value;
  var offset = req.swagger.params['offset'].value;
  var date = req.swagger.params['date'].value;
  var manager = req.swagger.params['manager'].value;
  var service = req.swagger.params['service'].value;
  var order = req.swagger.params['order'].value;
  Event.eventsGET(limit,offset,date,manager,service)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.eventsMonthGET = function eventsMonthGET (req, res, next) {
  var limit = req.swagger.params['limit'].value;
  var offset = req.swagger.params['offset'].value;
  Event.eventsMonthGET(limit,offset)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
