# Node js Master Class Homework assignment #4

## CLI - How it works

Use the GUI first in order to fill the app with order-users-tokens after setting it up.

Then use the CLI and see available commands with "help" or "man"

The app now includes a GUI for using it in a browser.

PIZZA ORDERING APP
App allows the creation of users with tokens to order pizza!

# How does the app work?

## Setup

NOTE: The app uses mailgun and stripe API's , you should have an account for them!

### setup config.js file:
Go to the lib folder and there you will find a config_sample.js file , you'll have to replace stripe property and mailgun property information with your own to make the app work:


Example:

```Javascript

var environments = {};

// Staging (default) environment
environments = {
  'httpPort' : 3000,
  'httpsPort' : 3001,
  'envName' : 'staging',
  'stripe' : {
    'secretKey' : 'YOUR_STRIPE_SECRET_KEY' // CHANGE THIS
  },
  'mailgun' : {
    'sender' : 'YOUR_MAILGUN_EMAIL_ADDRESS', // AND THIS THREE
    'apiKey' : 'api:YOUR_MAILGUN_API_KEY',
    'domainName' : 'YOUR_MAILGUN_DOMAIN_NAME'
  }
  
};

```
You may want to change the "production environment" too but is not needed since the app will default to staging.

IMPORTANT!! : Dont forget to save the file as config.js !

## How to start/view the app

After the setup is done do the following:

To execute app type in the command line (in the location of the project):
```
node index.js
```
To view the app type in the browser
```
http://localhost:3000/
```
