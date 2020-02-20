/*
 * Create and export configuration variables
 *
 */

// Container for all environments
var environments = {};

// Staging (default) environment
environments.staging = {
  'httpPort' : 3000,
  'httpsPort' : 3001,
  'envName' : 'staging',
  'hashingSecret' : 'thisIsASecret',
  'maxOrders' : 5,
  'templateGlobals' : {
    'appName' : 'Pizza Order App',
    'companyName' : 'PizzApp, Inc.',
    'yearCreated' : '2019',
    'baseUrl' : 'http://localhost:3000/'
  },
  'stripe' : {
    'secretKey' : 'YOUR_STRIPE_SECRET_KEY'
  },
  'mailgun' : {
    'sender' : 'YOUR_MAILGUN_EMAIL_ADDRESS',
    'apiKey' : 'api:YOUR_MAILGUN_API_KEY',
    'domainName' : 'YOUR_MAILGUN_DOMAIN_NAME'
  }
};

// Production environment
environments.production = {
  'httpPort' : 5000,
  'httpsPort' : 5001,
  'envName' : 'production',
  'hashingSecret' : 'thisIsAlsoASecret',
  'maxOrders' : 10,
  'templateGlobals' : {
    'appName' : 'Pizza Order App',
    'companyName' : 'PizzApp, Inc.',
    'yearCreated' : '2019',
    'baseUrl' : 'http://localhost:3000/'
  },
  'stripe' : {
    'secretKey' : 'YOUR_STRIPE_SECRET_KEY'
  },
  'mailgun' : {
    'sender' : 'YOUR_MAILGUN_EMAIL_ADDRESS',
    'apiKey' : 'api:YOUR_MAILGUN_API_KEY',
    'domainName' : 'YOUR_MAILGUN_DOMAIN_NAME'
  }
};

// Determine which environment was passed as a command-line argument
var currentEnvironment = typeof(process.env.NODE_ENV) == 'string' ? process.env.NODE_ENV.toLowerCase() : '';

// Check that the current environment is one of the environments above, if not default to staging
var environmentToExport = typeof(environments[currentEnvironment]) == 'object' ? environments[currentEnvironment] : environments.staging;

// Export the module
module.exports = environmentToExport;