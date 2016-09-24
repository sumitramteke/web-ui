/* jshint node: true */

module.exports = function(environment) {
  var deployTarget = process.env.DEPLOY_TARGET;

  var ENV = {
    modulePrefix: 'web-ui',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    'ember-simple-auth': {
        'baseURL': 'http://localhost:9000'
    },
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
      API_HOST: 'http://localhost:9000/api'
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production' || deployTarget === 'production') {
    ENV.APP.API_HOST = 'http://ec2-52-11-130-33.us-west-2.compute.amazonaws.com:9000';
    ENV['ember-simple-auth'] = {
      'baseURL': 'http://ec2-52-11-130-33.us-west-2.compute.amazonaws.com:9000'
    }
  }

  console.log(ENV);

  return ENV;
};
