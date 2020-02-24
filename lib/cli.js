/*
 * CLI-related tasks
 *
 */

// Dependencies
var readline = require('readline');
var util = require('util');
var debug = util.debuglog('cli');
var events = require('events');
class _events extends events{};
var e = new _events();
var os = require('os');
var v8 = require('v8');
var _data = require('./data');
var helpers = require('./helpers');

// Instantiate the cli module object
var cli = {};

// Input handlers
e.on('man',function(str){
    cli.responders.help();
});
  
e.on('help',function(str){
    cli.responders.help();
});

e.on('exit',function(str){
    cli.responders.exit();
});

e.on('menu',function(str){
    cli.responders.menu();
});

e.on('orders',function(str){
    cli.responders.orders();
});

e.on('more order info',function(str){
    cli.responders.moreOrderInfo(str);
});

/*
 *
 * Responders
 * 
 */

// Responders object
cli.responders = {};

// Exit
cli.responders.exit = function(){
    process.exit(0);
};

// Help / Man
cli.responders.help = function(){

  // Codify the commands and their explanations
  var commands = {
    'exit' : 'Kill the CLI (and the rest of the application)',
    'man' : 'Show this help page',
    'help' : 'Alias of the "man" command',
    'menu' : 'Show the menu items available for ordering',
    'orders' : 'View all the recent orders in the system (orders placed in the last 24 hours)',
    'more order info --{orderId}' : 'Lookup the details of a specific order by order ID',
    'list users' :  'View all the users who have signed up in the last 24 hours',
    'more user info --{userEmail}' : 'Lookup the details of a specific user by email address'
  };

  // Show a header for the help page that is as wide as the screen
  cli.horizontalLine();
  cli.centered('CLI MANUAL');
  cli.horizontalLine();
  cli.verticalSpace(2);

  // Show each command, followed by its explanation, in white and yellow respectively
  for(var key in commands){
     if(commands.hasOwnProperty(key)){
        var value = commands[key];
        var line = '      \x1b[33m '+key+'      \x1b[0m';
        var padding = 60 - line.length;
        for (i = 0; i < padding; i++) {
            line+=' ';
        }
        line+=value;
        console.log(line);
        cli.verticalSpace();
     }
  }
  cli.verticalSpace(1);

  // End with another horizontal line
  cli.horizontalLine();

};

// Show menu Items
cli.responders.menu = function(){
    // Lookup the menu file
    _data.read('menus','menus',function(err,menuData){
        if(!err && menuData){
            menuData.items.forEach(element => {
                cli.verticalSpace();
                console.log(element.topping , "$" + element.price / 100);
                cli.verticalSpace();
            });
        }
    });
};

// Show all orders for the past 24 hours
cli.responders.orders = function(){
    // Lookup the menu file
    _data.list('orders',function(err,ordersIds){
        if(!err && ordersIds && ordersIds.length > 0){

            // We delete the .gitkeep in orders folder from the list of orders ids
            var gitkeepIndex = ordersIds.indexOf('.gitkeep');
            ordersIds.splice(gitkeepIndex,1);
            // Set up a counter i for listing orders
            var i = 1;
            // Command response title 
            console.log("Orders placed in the last 24 hours by ID\n");
            ordersIds.forEach(function(orderId){
                _data.read('orders',orderId,function(err,orderData){
                    if(!err && orderData){
                        // If the order was placed less than 24 hours ago proceed
                        if ((orderData.date + 1000 * 60 * 60 * 24) >= Date.now()){
                            console.log(i + ": ",orderData.orderId);

                            // We increment the list counter
                            i++;
                        }   
                    }
                });
            });
        }
    });
};

// More order info
cli.responders.moreOrderInfo = function(str){
  // Get ID from string
  var arr = str.split('--');
  var orderId = typeof(arr[1]) == 'string' && arr[1].trim().length > 0 ? arr[1].trim() : false;
  if(orderId){
    // Lookup the user
    _data.read('orders',orderId,function(err,orderData){
      if(!err && orderData){

        // Print their JSON object with text highlighting
        cli.verticalSpace();
        console.dir(orderData,{'colors' : true});
        cli.verticalSpace();
      }
    });
  }
};




/*
 *
 * Layout functions
 * 
 */

// Create a vertical space
cli.verticalSpace = function(lines){
    lines = typeof(lines) == 'number' && lines > 0 ? lines : 1;
    for (i = 0; i < lines; i++) {
        console.log('');
    }
};

// Create a horizontal line across the screen
cli.horizontalLine = function(){

    // Get the available screen size
    var width = process.stdout.columns;

    // Put in enough dashes to go across the screen
    var line = '';
    for (i = 0; i < width; i++) {
        line+='-';
    }
    console.log(line);
};

// Create centered text on the screen
cli.centered = function(str){
    str = typeof(str) == 'string' && str.trim().length > 0 ? str.trim() : '';

    // Get the available screen size
    var width = process.stdout.columns;

    // Calculate the left padding there should be
    var leftPadding = Math.floor((width - str.length) / 2);

    // Put in left padded spaces before the string itself
    var line = '';
    for (i = 0; i < leftPadding; i++) {
        line+=' ';
    }
    line+= str;
    console.log(line);
};
   

// Input processor
cli.processInput = function(str){
    str = typeof(str) == 'string' && str.trim().length > 0 ? str.trim() : false;
    // Only process the input if the user actually wrote something, otherwise ignore it
    if(str){
        // Codify the unique strings that identify the different unique questions allowed be the asked
        var uniqueInputs = [
        'man',
        'help',
        'exit',
        'menu',
        'orders',
        'more order info',
        'list users',
        'more user info'
        ];

        // Go through the possible inputs, emit event when a match is found
        var matchFound = false;
        var counter = 0;
        uniqueInputs.some(function(input){
            if(str.toLowerCase().indexOf(input) > -1){
                matchFound = true;
                // Emit event matching the unique input, and include the full string given
                e.emit(input,str);
                return true;
            }
        });

        // If no match is found, tell the user to try again
        if(!matchFound){
            console.log("\nSorry, try again\n");
        }

    }
};

// Init script
cli.init = function(){

    // Send to console, in dark blue
    console.log('\x1b[34m%s\x1b[0m','The Pizza CLI is running');

    // Start the interface
    var _interface = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: ''
    });

    // Create an initial prompt
    _interface.prompt();

    // Handle each line of input separately
    _interface.on('line', function(str){

        // Send to the input processor
        cli.processInput(str);

        // Re-initialize the prompt afterwards
        _interface.prompt();
    });

    // If the user stops the CLI, kill the associated process
    _interface.on('close', function(){
        process.exit(0);
    });

};
  
// Export the module
module.exports = cli;