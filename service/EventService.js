'use strict';

let sqlDb;

exports.eventsDbSetup = function(connection) {
  sqlDb = connection;
  console.log('Checking if the table events exists');
  return sqlDb.schema.hasTable('events').then( (exists) => {
    if(!exists) {
      console.log('Table events doesn´t exists');
    } else {
      console.log('Table events exists');
    };
  });
};


/**
 * Events organized by the association
 * Returns a list of events
 *
 * limit Integer This is de number of items retrived, by default is 10 (optional)
 * offset Integer Pagination offset, by default is 0 (optional)
 * date String Text search between events by date (optional)
 * manager Integer Text search between events by id of the manager who organizes it (optional)
 * service String Text search between events by service (optional)
 * returns List
 **/
exports.eventsGET = function(limit,offset,date,manager,service) {
  if(!limit) limit = 10;
  if(!offset) offset = 0;

  var query = sqlDb('activities').limit(limit).offset(offset);
  var query = query.join('events', 'activities.id_activity', 'events.id_activity');
  var query = query.select(
    'activities.id_activity', 'activities.location', 'activities.title', 'activities.description', 
    'activities.start_time', 'activities.end_time', 'activities.image', 'events.event_date', 'events.id_manager', 
    'events.id_service');

  if(date) query = query.where('event_date', date);
  if(manager) query = query.where('id_manager', manager);
  if(service) query = query.where('id_service', service);

  return query.then(data => {
    return data.map( e => {
      console.log(e);
      return e;
    });
  });
};


/**
 * Events organized by the association this month
 * Returns a list of events
 *
 * limit Integer This is de number of items retrived, by default is 10 (optional)
 * offset Integer Pagination offset, by default is 0 (optional)
 * returns List
 **/
exports.eventsMonthGET = function(limit,offset) {
  if(!limit) limit = 10;
  if(!offset) offset = 0;

  var date = new Date();
  var month = date.getMonth() + 1;

  var query = sqlDb('activities').limit(limit).offset(offset);
  var query = query.join('events', 'activities.id_activity', 'events.id_activity');
  var query = query.select(
    'activities.id_activity', 'activities.location', 'activities.title', 'activities.description', 
    'activities.start_time', 'activities.end_time', 'activities.image', 'events.event_date', 'events.id_manager', 
    'events.id_service');
  var query = query.andWhereRaw(`EXTRACT(MONTH FROM events.event_date::date) = ?`, [month]);

  return query.then(data => {
    return data.map( e => {
      console.log(e);
      return e;
    });
  });
};


/**
 * Find a events by ID
 * Returns a event
 *
 * eventId Long ID of event to return
 * returns Event
 **/
exports.eventsEventIdGET = function(eventId) {
  var query = sqlDb('activities');
  var query = query.join('events', 'activities.id_activity', 'events.id_activity');
  var query = query.select(
    'activities.id_activity', 'activities.location', 'activities.title', 'activities.description', 
    'activities.start_time', 'activities.end_time', 'activities.image', 'events.event_date', 'events.id_manager', 
    'events.id_service');
  var query = query.where('events.id_activity', eventId);

  return query.then(data => {
    return data.map( e => {
      console.log(e);
      return e;
    });
  });
};


/**
 * Volunteers that participates in the event with ID
 * Returns a list of volunteers
 *
 * eventId Long ID of event to return
 * returns List
 **/
exports.eventsEventIdVolunteersGET = function(eventId) {
  var query = sqlDb('persons');
  var query = query.join('volunteers', 'persons.id_person', 'volunteers.id_person');
  var query = query.join('volunteers_events', 'volunteers.id_person', 'volunteers_events.id_volunteer');
  var query = query.select(
    'persons.id_person', 'persons.name', 'persons.surename', 'persons.email', 
    'persons.description', 'persons.photo', 'volunteers.volunteer_time');
  var query = query.where('volunteers_events.id_event', eventId);

  return query.then(data => {
    return data.map( e => {
      console.log(e);
      return e;
    });
  });
};

