const Sequelize = require('sequelize');
const path = require('path');
const fs = require('fs');

var app;

module.exports = function (_app) {

    app = _app;
    app.context.models = {};

    connect(app.settings.db);
}

function connect(config) {

    app.context.sequelize = new Sequelize(config.database, config.username, config.password, {
        host: config.hostname,
        dialect: 'mysql',
        pool: {
            max: 5,
            min: 0,
            idle: 30000
        }
    });
}

function loadModels() {
    
    const loadDir = path.join(app.settings.appDir, 'components/models');
    
    for (let name of app.settings.models) {

        app.context.models[name] = require(path.join(loadDir, name))(app);
    }
}