/*
 * Primary file for API
 *
 */

// Dependencies
var server = require('./lib/server');
var cli = require('lib/cli');


// Declare the app
var app = {};

// Init function
app.init = function(){

  // Start the server
  server.init();

  // Start the cli (make sure it runs last)
  setTimeout(function(){
    cli.init();
  },50);

};

// Self executing
app.init();


// Export the app
module.exports = app;
