/* jshint node: true */

module.exports = function(deployTarget) {
  var ENV = {
    build: {
      environment: deployTarget
    },
    'revision-data': {
      type: 'git-commit'
    },
    's3-index': {
      accessKeyId: '<your-aws-access-key>',
      secretAccessKey: '<your-aws-secret>',
      bucket: '<your-s3-bucket>',
      region: '<the-region-your-bucket-is-in>',
      allowOverwrite: true
    },
    's3': {
      accessKeyId: '<your-aws-access-key>',
      secretAccessKey: '<your-aws-secret>',
      bucket: '<your-s3-bucket>',
      region: '<the-region-your-bucket-is-in>'
    }
    // include other plugin configuration that applies to all deploy targets here
  };

  if (deployTarget === 'development') {
    ENV.build.environment = 'development';
    // configure other plugins for development deploy target here
  }

  if (deployTarget === 'staging') {
    ENV.build.environment = 'production';
    // configure other plugins for staging deploy target here
  }

  if (deployTarget === 'production') {
    ENV.build.environment = 'production';
    // configure other plugins for production deploy target here
  }

  // Note: if you need to build some configuration asynchronously, you can return
  // a promise that resolves with the ENV object instead of returning the
  // ENV object synchronously.
  return ENV;
};
