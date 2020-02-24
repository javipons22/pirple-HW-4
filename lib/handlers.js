/*
 * Request Handlers
 *
 */

// Dependencies
var _data = require('./data');
var helpers = require('./helpers');
var config = require('./config');

// Define all the handlers
var handlers = {};

/*
 * HTML Handlers
 *
 */

// Index
handlers.index = function (data, callback) {
  // Reject any request that isn't a GET
  if (data.method == 'get') {
    // Prepare data for interpolation
    var templateData = {
      'head.title': 'Uptime Monitoring - Made Simple',
      'head.description': 'We offer free, simple uptime monitoring for HTTP/HTTPS sites all kinds. When your site goes down, we\'ll send you a text to let you know',
      'body.class': 'index'
    };
    // Read in a template as a string
    helpers.getTemplate('index', templateData, function (err, str) {
      if (!err && str) {
        // Add the universal header and footer
        helpers.addUniversalTemplates(str, templateData, function (err, str) {
          if (!err && str) {
            // Return that page as HTML
            callback(200, str, 'html');
          } else {
            callback(500, undefined, 'html');
          }
        });
      } else {
        callback(500, undefined, 'html');
      }
    });
  } else {
    callback(405, undefined, 'html');
  }
};

// Create Account
handlers.accountCreate = function (data, callback) {
  // Reject any request that isn't a GET
  if (data.method == 'get') {
    // Prepare data for interpolation
    var templateData = {
      'head.title': 'Create an Account',
      'head.description': 'Signup is easy and only takes a few seconds.',
      'body.class': 'accountCreate'
    };
    // Read in a template as a string
    helpers.getTemplate('accountCreate', templateData, function (err, str) {
      if (!err && str) {
        // Add the universal header and footer
        helpers.addUniversalTemplates(str, templateData, function (err, str) {
          if (!err && str) {
            // Return that page as HTML
            callback(200, str, 'html');
          } else {
            callback(500, undefined, 'html');
          }
        });
      } else {
        callback(500, undefined, 'html');
      }
    });
  } else {
    callback(405, undefined, 'html');
  }
};

// Create New Session
handlers.sessionCreate = function (data, callback) {
  // Reject any request that isn't a GET
  if (data.method == 'get') {
    // Prepare data for interpolation
    var templateData = {
      'head.title': 'Login to your account.',
      'head.description': 'Please enter your email and password to access your account.',
      'body.class': 'sessionCreate'
    };
    // Read in a template as a string
    helpers.getTemplate('sessionCreate', templateData, function (err, str) {
      if (!err && str) {
        // Add the universal header and footer
        helpers.addUniversalTemplates(str, templateData, function (err, str) {
          if (!err && str) {
            // Return that page as HTML
            callback(200, str, 'html');
          } else {
            callback(500, undefined, 'html');
          }
        });
      } else {
        callback(500, undefined, 'html');
      }
    });
  } else {
    callback(405, undefined, 'html');
  }
};

// Edit Your Account
handlers.accountEdit = function (data, callback) {
  // Reject any request that isn't a GET
  if (data.method == 'get') {
    // Prepare data for interpolation
    var templateData = {
      'head.title': 'Account Settings',
      'body.class': 'accountEdit'
    };
    // Read in a template as a string
    helpers.getTemplate('accountEdit', templateData, function (err, str) {
      if (!err && str) {
        // Add the universal header and footer
        helpers.addUniversalTemplates(str, templateData, function (err, str) {
          if (!err && str) {
            // Return that page as HTML
            callback(200, str, 'html');
          } else {
            callback(500, undefined, 'html');
          }
        });
      } else {
        callback(500, undefined, 'html');
      }
    });
  } else {
    callback(405, undefined, 'html');
  }
};

// Session has been deleted
handlers.sessionDeleted = function (data, callback) {
  // Reject any request that isn't a GET
  if (data.method == 'get') {
    // Prepare data for interpolation
    var templateData = {
      'head.title': 'Logged Out',
      'head.description': 'You have been logged out of your account.',
      'body.class': 'sessionDeleted'
    };
    // Read in a template as a string
    helpers.getTemplate('sessionDeleted', templateData, function (err, str) {
      if (!err && str) {
        // Add the universal header and footer
        helpers.addUniversalTemplates(str, templateData, function (err, str) {
          if (!err && str) {
            // Return that page as HTML
            callback(200, str, 'html');
          } else {
            callback(500, undefined, 'html');
          }
        });
      } else {
        callback(500, undefined, 'html');
      }
    });
  } else {
    callback(405, undefined, 'html');
  }
};

// Account has been deleted
handlers.accountDeleted = function (data, callback) {
  // Reject any request that isn't a GET
  if (data.method == 'get') {
    // Prepare data for interpolation
    var templateData = {
      'head.title': 'Account Deleted',
      'head.description': 'Your account has been deleted.',
      'body.class': 'accountDeleted'
    };
    // Read in a template as a string
    helpers.getTemplate('accountDeleted', templateData, function (err, str) {
      if (!err && str) {
        // Add the universal header and footer
        helpers.addUniversalTemplates(str, templateData, function (err, str) {
          if (!err && str) {
            // Return that page as HTML
            callback(200, str, 'html');
          } else {
            callback(500, undefined, 'html');
          }
        });
      } else {
        callback(500, undefined, 'html');
      }
    });
  } else {
    callback(405, undefined, 'html');
  }
};

// Create a new order
handlers.ordersCreate = function (data, callback) {
  // Reject any request that isn't a GET
  if (data.method == 'get') {
    _data.read('menus', 'menus', function (err, userData) {
      if (!err && userData) {
        helpers.getMenuItemCheckboxes(userData, function (htmlString) {
          var templateData = {
            'head.title': 'Create a New Order!',
            'body.class': 'ordersCreate',
            'body.pizzaMenu': htmlString
          };
          // Read in a template as a string
          helpers.getTemplate('ordersCreate', templateData, function (err, str) {
            if (!err && str) {
              // Add the universal header and footer
              helpers.addUniversalTemplates(str, templateData, function (err, str) {
                if (!err && str) {
                  // Return that page as HTML
                  callback(200, str, 'html');
                } else {
                  callback(500, undefined, 'html');
                }
              });
            } else {
              callback(500, undefined, 'html');
            }
          });
        });
      } else {
        callback(500, undefined, 'html');
      }
    });
  } else {
    callback(405, undefined, 'html');
  }
};

// Dashboard (view all orders)
handlers.ordersList = function (data, callback) {
  // Reject any request that isn't a GET
  if (data.method == 'get') {
    // Prepare data for interpolation
    var templateData = {
      'head.title': 'Dashboard',
      'body.class': 'ordersList'
    };
    // Read in a template as a string
    helpers.getTemplate('ordersList', templateData, function (err, str) {
      if (!err && str) {
        // Add the universal header and footer
        helpers.addUniversalTemplates(str, templateData, function (err, str) {
          if (!err && str) {
            // Return that page as HTML
            callback(200, str, 'html');
          } else {
            callback(500, undefined, 'html');
          }
        });
      } else {
        callback(500, undefined, 'html');
      }
    });
  } else {
    callback(405, undefined, 'html');
  }
};

// Edit an order
handlers.ordersEdit = function (data, callback) {
  // Reject any request that isn't a GET
  if (data.method == 'get') {
    // Prepare data for interpolation
    var templateData = {
      'head.title': 'Order Details',
      'body.class': 'ordersEdit'
    };
    // Read in a template as a string
    helpers.getTemplate('ordersEdit', templateData, function (err, str) {
      if (!err && str) {
        // Add the universal header and footer
        helpers.addUniversalTemplates(str, templateData, function (err, str) {
          if (!err && str) {
            // Return that page as HTML
            callback(200, str, 'html');
          } else {
            callback(500, undefined, 'html');
          }
        });
      } else {
        callback(500, undefined, 'html');
      }
    });
  } else {
    callback(405, undefined, 'html');
  }
};

// Favicon
handlers.favicon = function (data, callback) {
  // Reject any request that isn't a GET
  if (data.method == 'get') {
    // Read in the favicon's data
    helpers.getStaticAsset('favicon.ico', function (err, data) {
      if (!err && data) {
        // Callback the data
        callback(200, data, 'favicon');
      } else {
        callback(500);
      }
    });
  } else {
    callback(405);
  }
};

// Public assets
handlers.public = function (data, callback) {
  // Reject any request that isn't a GET
  if (data.method == 'get') {
    // Get the filename being requested
    var trimmedAssetName = data.trimmedPath.replace('public/', '').trim();
    if (trimmedAssetName.length > 0) {
      // Read in the asset's data
      helpers.getStaticAsset(trimmedAssetName, function (err, data) {
        if (!err && data) {

          // Determine the content type (default to plain text)
          var contentType = 'plain';

          if (trimmedAssetName.indexOf('.css') > -1) {
            contentType = 'css';
          }

          if (trimmedAssetName.indexOf('.png') > -1) {
            contentType = 'png';
          }

          if (trimmedAssetName.indexOf('.jpg') > -1) {
            contentType = 'jpg';
          }

          if (trimmedAssetName.indexOf('.ico') > -1) {
            contentType = 'favicon';
          }

          if (trimmedAssetName.indexOf('.svg') > -1) {
            contentType = 'svg';
          }

          // Callback the data
          callback(200, data, contentType);
        } else {
          callback(404);
        }
      });
    } else {
      callback(404);
    }

  } else {
    callback(405);
  }
};

/*
 * JSON API Handlers
 *
 */

// Ping
handlers.ping = function (data, callback) {
  callback(200);
};

// Not-Found
handlers.notFound = function (data, callback) {
  callback(404);
};

// Users
handlers.users = function (data, callback) {
  var acceptableMethods = ['post', 'get', 'put', 'delete'];
  if (acceptableMethods.indexOf(data.method) > -1) {
    handlers._users[data.method](data, callback);
  } else {
    callback(405);
  }
};

// Container for all the users methods
handlers._users = {};

// Users - post
// Required data: firstName, lastName, email, password, tosAgreement
// Optional data: none
handlers._users.post = function (data, callback) {
  // Check that all required fields are filled out
  var firstName = typeof (data.payload.firstName) == 'string' && data.payload.firstName.trim().length > 0 ? data.payload.firstName.trim() : false;
  var lastName = typeof (data.payload.lastName) == 'string' && data.payload.lastName.trim().length > 0 ? data.payload.lastName.trim() : false;
  var email = typeof (data.payload.email) == 'string' && data.payload.email.trim().length > 0 ? data.payload.email.trim() : false;
  var password = typeof (data.payload.password) == 'string' && data.payload.password.trim().length > 0 ? data.payload.password.trim() : false;

  if (firstName && lastName && email && password) {
    // Make sure the user doesnt already exist
    _data.read('users', email, function (err, data) {
      if (err) {
        // Hash the password
        var hashedPassword = helpers.hash(password);

        // Create the user object
        if (hashedPassword) {
          var userObject = {
            'firstName': firstName,
            'lastName': lastName,
            'email': email,
            'hashedPassword': hashedPassword,
            'date': Date.now()
          };

          // Store the user
          _data.create('users', email, userObject, function (err) {
            if (!err) {
              callback(200);
            } else {
              callback(500, { 'Error': 'Could not create the new user' });
            }
          });
        } else {
          callback(500, { 'Error': 'Could not hash the user\'s password.' });
        }

      } else {
        // User alread exists
        callback(400, { 'Error': 'A user with that email address already exists' });
      }
    });

  } else {
    callback(400, { 'Error': 'Missing required fields' });
  }

};

// Required data: email
// Optional data: none
handlers._users.get = function (data, callback) {
  // Check that email address is valid
  var email = typeof (data.queryStringObject.email) == 'string' && data.queryStringObject.email.trim().length > 0 ? data.queryStringObject.email.trim() : false;
  if (email) {

    // Get token from headers
    var token = typeof (data.headers.token) == 'string' ? data.headers.token : false;
    // Verify that the given token is valid for the email address
    handlers._tokens.verifyToken(token, email, function (tokenIsValid) {
      if (tokenIsValid) {
        // Lookup the user
        _data.read('users', email, function (err, userData) {
          if (!err && userData) {
            // Remove the hashed password from the user user object before returning it to the requester
            delete userData.hashedPassword;
            callback(200, userData);
          } else {
            callback(404);
          }
        });
      } else {
        callback(403, { "Error": "Missing required token in header, or token is invalid." })
      }
    });
  } else {
    callback(400, { 'Error': 'Missing required field' })
  }
};

// Required data: email
// Optional data: firstName, lastName, password (at least one must be specified)
handlers._users.put = function (data, callback) {
  // Check for required field
  var email = typeof (data.payload.email) == 'string' && data.payload.email.trim().length > 0 ? data.payload.email.trim() : false;

  // Check for optional fields
  var firstName = typeof (data.payload.firstName) == 'string' && data.payload.firstName.trim().length > 0 ? data.payload.firstName.trim() : false;
  var lastName = typeof (data.payload.lastName) == 'string' && data.payload.lastName.trim().length > 0 ? data.payload.lastName.trim() : false;
  var password = typeof (data.payload.password) == 'string' && data.payload.password.trim().length > 0 ? data.payload.password.trim() : false;

  // Error if email is invalid
  if (email) {
    // Error if nothing is sent to update
    if (firstName || lastName || password) {

      // Get token from headers
      var token = typeof (data.headers.token) == 'string' ? data.headers.token : false;

      // Verify that the given token is valid for the email address
      handlers._tokens.verifyToken(token, email, function (tokenIsValid) {
        if (tokenIsValid) {

          // Lookup the user
          _data.read('users', email, function (err, userData) {
            if (!err && userData) {
              // Update the fields if necessary
              if (firstName) {
                userData.firstName = firstName;
              }
              if (lastName) {
                userData.lastName = lastName;
              }
              if (password) {
                userData.hashedPassword = helpers.hash(password);
              }
              // Store the new updates
              _data.update('users', email, userData, function (err) {
                if (!err) {
                  callback(200);
                } else {
                  callback(500, { 'Error': 'Could not update the user.' });
                }
              });
            } else {
              callback(400, { 'Error': 'Specified user does not exist.' });
            }
          });
        } else {
          callback(403, { "Error": "Missing required token in header, or token is invalid." });
        }
      });
    } else {
      callback(400, { 'Error': 'Missing fields to update.' });
    }
  } else {
    callback(400, { 'Error': 'Missing required field.' });
  }

};

// Required data: email
// Cleanup old checks associated with the user
handlers._users.delete = function (data, callback) {
  // Check that email number is valid
  var email = typeof (data.queryStringObject.email) == 'string' && data.queryStringObject.email.trim().length > 0 ? data.queryStringObject.email.trim() : false;
  if (email) {

    // Get token from headers
    var token = typeof (data.headers.token) == 'string' ? data.headers.token : false;

    // Verify that the given token is valid for the email address
    handlers._tokens.verifyToken(token, email, function (tokenIsValid) {
      if (tokenIsValid) {
        // Lookup the user
        _data.read('users', email, function (err, userData) {
          if (!err && userData) {
            // Delete the user's orders before deleting user
            if (userData.orders) {
              userData.orders.forEach(order => {
                _data.delete('orders', order, function (err) {
                  if (err) {
                    callback(500, { 'Error': "Could not delete user's order" });
                  }
                });
              });
            }
            // Delete the user's data
            _data.delete('users', email, function (err) {
              if (!err) {
                callback(200);
              } else {
                callback(500, { 'Error': 'Could not delete the specified user' });
              }
            });
          } else {
            callback(400, { 'Error': 'Could not find the specified user.' });
          }
        });
      } else {
        callback(403, { "Error": "Missing required token in header, or token is invalid." });
      }
    });
  } else {
    callback(400, { 'Error': 'Missing required field' })
  }
};

// Tokens
handlers.tokens = function (data, callback) {
  var acceptableMethods = ['post', 'get', 'put', 'delete'];
  if (acceptableMethods.indexOf(data.method) > -1) {
    handlers._tokens[data.method](data, callback);
  } else {
    callback(405);
  }
};

// Container for all the tokens methods
handlers._tokens = {};

// Tokens - post
// Required data: email, password
// Optional data: none
handlers._tokens.post = function (data, callback) {
  var email = typeof (data.payload.email) == 'string' && data.payload.email.trim().length > 10 ? data.payload.email.trim() : false;
  var password = typeof (data.payload.password) == 'string' && data.payload.password.trim().length > 0 ? data.payload.password.trim() : false;
  if (email && password) {
    // Lookup the user who matches that email address
    _data.read('users', email, function (err, userData) {
      if (!err && userData) {
        // Hash the sent password, and compare it to the password stored in the user object
        var hashedPassword = helpers.hash(password);
        if (hashedPassword == userData.hashedPassword) {
          // If valid, create a new token with a random name. Set an expiration date 1 hour in the future.
          var tokenId = helpers.createRandomString(20);
          var expires = Date.now() + 1000 * 60 * 60;
          var tokenObject = {
            'email': email,
            'id': tokenId,
            'expires': expires,
          };

          // Store the token
          _data.create('tokens', tokenId, tokenObject, function (err) {
            if (!err) {
              callback(200, tokenObject);
            } else {
              callback(500, { 'Error': 'Could not create the new token' });
            }
          });
        } else {
          callback(400, { 'Error': 'Password did not match the specified user\'s stored password' });
        }
      } else {
        callback(400, { 'Error': 'Could not find the specified user.' });
      }
    });
  } else {
    callback(400, { 'Error': 'Missing required field(s).' })
  }
};

// Tokens - get
// Required data: id
// Optional data: none
handlers._tokens.get = function (data, callback) {
  // Check that id is valid
  var id = typeof (data.queryStringObject.id) == 'string' && data.queryStringObject.id.trim().length == 20 ? data.queryStringObject.id.trim() : false;
  if (id) {
    // Lookup the token
    _data.read('tokens', id, function (err, tokenData) {
      if (!err && tokenData) {
        callback(200, tokenData);
      } else {
        callback(404);
      }
    });
  } else {
    callback(400, { 'Error': 'Missing required field, or field invalid' })
  }
};

// Tokens - put
// Required data: id, extend
// Optional data: none
handlers._tokens.put = function (data, callback) {
  var id = typeof (data.payload.id) == 'string' && data.payload.id.trim().length == 20 ? data.payload.id.trim() : false;
  var extend = typeof (data.payload.extend) == 'boolean' && data.payload.extend == true ? true : false;
  if (id && extend) {
    // Lookup the existing token
    _data.read('tokens', id, function (err, tokenData) {
      if (!err && tokenData) {
        // Check to make sure the token isn't already expired
        if (tokenData.expires > Date.now()) {
          // Set the expiration an hour from now
          tokenData.expires = Date.now() + 1000 * 60 * 60;
          // Store the new updates
          _data.update('tokens', id, tokenData, function (err) {
            if (!err) {
              callback(200);
            } else {
              callback(500, { 'Error': 'Could not update the token\'s expiration.' });
            }
          });
        } else {
          callback(400, { "Error": "The token has already expired, and cannot be extended." });
        }
      } else {
        callback(400, { 'Error': 'Specified user does not exist.' });
      }
    });
  } else {
    callback(400, { "Error": "Missing required field(s) or field(s) are invalid." });
  }
};


// Tokens - delete
// Required data: id
// Optional data: none
handlers._tokens.delete = function (data, callback) {
  // Check that id is valid
  var id = typeof (data.queryStringObject.id) == 'string' && data.queryStringObject.id.trim().length == 20 ? data.queryStringObject.id.trim() : false;
  if (id) {
    // Lookup the token
    _data.read('tokens', id, function (err, tokenData) {
      if (!err && tokenData) {
        // Delete the token
        _data.delete('tokens', id, function (err) {
          if (!err) {
            callback(200);
          } else {
            callback(500, { 'Error': 'Could not delete the specified token' });
          }
        });
      } else {
        callback(400, { 'Error': 'Could not find the specified token.' });
      }
    });
  } else {
    callback(400, { 'Error': 'Missing required field' })
  }
};

// Verify if a given token id is currently valid for a given user
handlers._tokens.verifyToken = function (id, email, callback) {
  // Lookup the token
  _data.read('tokens', id, function (err, tokenData) {
    if (!err && tokenData) {
      // Check that the token is for the given user and has not expired
      if (tokenData.email == email && tokenData.expires > Date.now()) {
        callback(true);
      } else {
        callback(false);
      }
    } else {
      callback(false);
    }
  });
};

// Orders
handlers.orders = function (data, callback) {
  var acceptableMethods = ['post', 'get', 'put', 'delete'];
  if (acceptableMethods.indexOf(data.method) > -1) {
    handlers._orders[data.method](data, callback);
  } else {
    callback(405);
  }
};

// Container for all the orders methods
handlers._orders = {};


// Orders - post
// Required data: protocol,url,method,successCodes,timeoutSeconds
// Optional data: none
handlers._orders.post = function (data, callback) {
  // Verify requirements

  var selectedMenuItems = typeof (data.payload.menuItem) == 'object' && data.payload.menuItem instanceof Array ? data.payload.menuItem : false;
  var email = typeof (data.payload.email) == 'string' && data.payload.email.trim().length > 0 ? data.payload.email.trim() : false;
  var creditCard = typeof (data.payload.creditCard) == 'string' && data.payload.creditCard.trim().length === 16 ? data.payload.creditCard.trim() : false;
  var expiryMonth = typeof (data.payload.expiryMonth) == 'string' && data.payload.expiryMonth.trim().length === 2 ? data.payload.expiryMonth : false;
  var expiryYear = typeof (data.payload.expiryYear) == 'string' && data.payload.expiryYear.trim().length === 4 ? data.payload.expiryYear : false;
  var cvc = typeof (data.payload.cvc) == 'string' && data.payload.cvc.trim().length === 4 ? data.payload.cvc : false;
  var deliveryAddress = typeof (data.payload.deliveryAddress) == 'string' && data.payload.deliveryAddress.trim().length > 0 ? data.payload.deliveryAddress.trim() : false;

  if (selectedMenuItems && email && creditCard && expiryMonth && expiryYear && cvc && deliveryAddress) {

    // Verify Token

    var token = typeof (data.headers.token) == 'string' ? data.headers.token : false;

    handlers._tokens.verifyToken(token, email, function (tokenIsValid) {
      if (tokenIsValid) {
        // Read menu from file
        _data.read('menus', 'menus', function (err, userData) {
          if (!err && userData) {
            // Set menu from read file in menus.js
            var menu = userData.items;

            // Create string for selected products to include in output
            helpers.selectedProductsData(menu, selectedMenuItems, function (selectedProducts, totalPrice) {
              // two decimal for cents in price that's why we divide by a hundred
              var orderTotal = totalPrice / 100;

              // se usa totalPrice para el call a stripe API (tiene que ser formato entero ej: 475 para 4.75)

              // Add order to orders array in user file
              _data.read('users', email, function (err, userData) {
                if (!err && userData) {
                  var userOrders = typeof (userData.orders) == 'object' && userData.orders instanceof Array ? userData.orders : [];
                  // Verify that user has less than the number of max-orders per user
                  if (userOrders.length < config.maxOrders) {
                    // Create random id for order
                    var orderId = helpers.createRandomString(5);

                    // Cart object that goes into order folder's file
                    var cartObject = {
                      "email": email,
                      "products": selectedProducts,
                      "orderTotal": orderTotal,
                      "orderId": orderId,
                      "paid": false,
                      "date": Date.now()
                    };

                    var paymentObject = {
                      amount: totalPrice,
                      currency: "usd",
                      source: "tok_mastercard",
                      description: "Charge for " + userData.email
                    };
                    // We use the stripe function created in helpers to manage payment with stripe API
                    helpers.stripe(paymentObject.amount, paymentObject.currency, paymentObject.description, paymentObject.source, function (err) {
                      if (!err) {
                        cartObject.paid = true;
                        // Store the order
                        _data.create('orders', orderId, cartObject, function (err) {
                          if (!err) {
                            // Add order id to the user's object
                            userData.orders = userOrders;
                            userData.orders.push(orderId);

                            // Save the new user data
                            _data.update('users', email, userData, function (err) {
                              if (!err) {
                                // Append variables to email subject
                                var emailSubject = 'Your order: (' + orderId + ') has been paid!';
                                // Append variables to email text
                                var emailBody = "Your order: \n" + cartObject.products + " \n with price of: " + orderTotal + "USD" + "\n has been paid and will soon be delivered to "+ deliveryAddress +" !";

                                helpers.mailgun(email, emailSubject, emailBody, function (err) {
                                  if (!err) {
                                    callback(200);
                                  } else {
                                    callback(500, {'Error' : err});
                                  }
                                });
                              } else {
                                callback(500, { 'Error': 'Could not update the user with the new order.' });
                              }
                            });
                          } else {
                            callback(500, { 'Error': 'Could not store the cart' });
                          }
                        });
                      } else {
                        callback(500, { 'Error': err });
                      }
                    });

                  } else {
                    callback(500, { 'Error': "Max Orders reached , can't create anymore!" });
                  }
                }
              });
            });
          } else {
            callback(500, { 'Error': 'Could not read Menu file' });
          }
        });

      } else {
        callback(403, { "Error": "Missing required token in header, or token is invalid." })
      }
    });
  } else {
    callback(400, { 'Error': 'Missing required field(s).' })

  }

};

// Orders - get
// Required data: id
// Optional data: none
handlers._orders.get = function (data, callback) {
  // Check that id is valid
  var id = typeof (data.queryStringObject.id) == 'string' && data.queryStringObject.id.trim().length == 5 ? data.queryStringObject.id.trim() : false;
  if (id) {
    // Lookup the order
    _data.read('orders', id, function (err, orderData) {
      if (!err && orderData) {
        // Get the token that sent the request
        var token = typeof (data.headers.token) == 'string' ? data.headers.token : false;
        // Verify that the given token is valid and belongs to the user who created the order
        handlers._tokens.verifyToken(token, orderData.email, function (tokenIsValid) {
          if (tokenIsValid) {
            // Return order data
            callback(200, orderData);
          } else {
            callback(403);
          }
        });
      } else {
        callback(404);
      }
    });
  } else {
    callback(400, { 'Error': 'Missing required field, or field invalid' })
  }

};

// Orders - put
// Required data: id
// Optional data: protocol,url,method,successCodes,timeoutSeconds (one must be sent)
handlers._orders.put = function (data, callback) {
  // Check for required field
  var id = typeof (data.payload.id) == 'string' && data.payload.id.trim().length == 20 ? data.payload.id.trim() : false;

  // Check for optional fields
  var protocol = typeof (data.payload.protocol) == 'string' && ['https', 'http'].indexOf(data.payload.protocol) > -1 ? data.payload.protocol : false;
  var url = typeof (data.payload.url) == 'string' && data.payload.url.trim().length > 0 ? data.payload.url.trim() : false;
  var method = typeof (data.payload.method) == 'string' && ['post', 'get', 'put', 'delete'].indexOf(data.payload.method) > -1 ? data.payload.method : false;
  var successCodes = typeof (data.payload.successCodes) == 'object' && data.payload.successCodes instanceof Array && data.payload.successCodes.length > 0 ? data.payload.successCodes : false;
  var timeoutSeconds = typeof (data.payload.timeoutSeconds) == 'number' && data.payload.timeoutSeconds % 1 === 0 && data.payload.timeoutSeconds >= 1 && data.payload.timeoutSeconds <= 5 ? data.payload.timeoutSeconds : false;

  // Error if id is invalid
  if (id) {
    // Error if nothing is sent to update
    if (protocol || url || method || successCodes || timeoutSeconds) {
      // Lookup the order
      _data.read('orders', id, function (err, orderData) {
        if (!err && orderData) {
          // Get the token that sent the request
          var token = typeof (data.headers.token) == 'string' ? data.headers.token : false;
          // Verify that the given token is valid and belongs to the user who created the order
          handlers._tokens.verifyToken(token, orderData.userPhone, function (tokenIsValid) {
            if (tokenIsValid) {
              // Update order data where necessary
              if (protocol) {
                orderData.protocol = protocol;
              }
              if (url) {
                orderData.url = url;
              }
              if (method) {
                orderData.method = method;
              }
              if (successCodes) {
                orderData.successCodes = successCodes;
              }
              if (timeoutSeconds) {
                orderData.timeoutSeconds = timeoutSeconds;
              }

              // Store the new updates
              _data.update('orders', id, orderData, function (err) {
                if (!err) {
                  callback(200);
                } else {
                  callback(500, { 'Error': 'Could not update the order.' });
                }
              });
            } else {
              callback(403);
            }
          });
        } else {
          callback(400, { 'Error': 'Order ID did not exist.' });
        }
      });
    } else {
      callback(400, { 'Error': 'Missing fields to update.' });
    }
  } else {
    callback(400, { 'Error': 'Missing required field.' });
  }
};


// Orders - delete
// Required data: id
// Optional data: none
handlers._orders.delete = function (data, callback) {
  // Check that id is valid
  var id = typeof (data.queryStringObject.id) == 'string' && data.queryStringObject.id.trim().length == 20 ? data.queryStringObject.id.trim() : false;
  if (id) {
    // Lookup the order
    _data.read('orders', id, function (err, orderData) {
      if (!err && orderData) {
        // Get the token that sent the request
        var token = typeof (data.headers.token) == 'string' ? data.headers.token : false;
        // Verify that the given token is valid and belongs to the user who created the order
        handlers._tokens.verifyToken(token, orderData.userPhone, function (tokenIsValid) {
          if (tokenIsValid) {

            // Delete the order data
            _data.delete('orders', id, function (err) {
              if (!err) {
                // Lookup the user's object to get all their orders
                _data.read('users', orderData.userPhone, function (err, userData) {
                  if (!err) {
                    var userOrders = typeof (userData.orders) == 'object' && userData.orders instanceof Array ? userData.orders : [];

                    // Remove the deleted order from their list of orders
                    var orderPosition = userOrders.indexOf(id);
                    if (orderPosition > -1) {
                      userOrders.splice(orderPosition, 1);
                      // Re-save the user's data
                      userData.orders = userOrders;
                      _data.update('users', orderData.userPhone, userData, function (err) {
                        if (!err) {
                          callback(200);
                        } else {
                          callback(500, { 'Error': 'Could not update the user.' });
                        }
                      });
                    } else {
                      callback(500, { "Error": "Could not find the order on the user's object, so could not remove it." });
                    }
                  } else {
                    callback(500, { "Error": "Could not find the user who created the order, so could not remove the order from the list of orders on their user object." });
                  }
                });
              } else {
                callback(500, { "Error": "Could not delete the order data." })
              }
            });
          } else {
            callback(403);
          }
        });
      } else {
        callback(400, { "Error": "The order ID specified could not be found" });
      }
    });
  } else {
    callback(400, { "Error": "Missing valid id" });
  }
};


// Export the handlers
module.exports = handlers;
