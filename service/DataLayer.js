let { managersDbSetup } = require('./ManagerService');
let { volunteersDbSetup } = require('./VolunteerService');
let { servicesDbSetup } = require('./ServiceService');
let { eventsDbSetup } = require('./EventService');
let { categoriesDbSetup } = require('./CategoryService');

const sqlDbFactory = require('knex');

var types = require('pg').types;
// override parsing date column to Date()
types.setTypeParser(1082, val => val);

let sqlDb = sqlDbFactory({
    client: 'pg',
    debug: true,
    connection: {
        host : 'localhost',
        user : 'postgres',
        password : '1234',
        database : 'voluntary'
      }
    //connection: process.env.DATABASE_URL,
    //ssl: true
});

function setupDataLayerManagers() {
    console.log('Setting up managers data layer');
    return managersDbSetup(sqlDb);
};

function setupDataLayerVolunteers() {
    console.log('Setting up volunteers data layer');
    return volunteersDbSetup(sqlDb);
};

function setupDataLayerServices() {
    console.log('Setting up services data layer');
    return servicesDbSetup(sqlDb);
};

function setupDataLayerEvents() {
    console.log('Setting up events data layer');
    return eventsDbSetup(sqlDb);
};

function setupDataLayerCategories() {
    console.log('Setting up categories data layer');
    return categoriesDbSetup(sqlDb);
}

function setupDataLayer() {
    setupDataLayerManagers();
    setupDataLayerVolunteers();
    setupDataLayerServices();
    setupDataLayerEvents();
    return setupDataLayerCategories();
}

module.exports = { database: sqlDb, setupDataLayer };