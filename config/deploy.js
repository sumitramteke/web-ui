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
      accessKeyId: "<<accessKeyId>>",
      secretAccessKey: "<<secretAccessKey>>",
      bucket: "workypeui",
      region: "us-west-2",
      allowOverwrite: true
    },
    's3': {
      accessKeyId: "<<accessKeyId>>",
      secretAccessKey: "<<secretAccessKey>>",
      bucket: "workypeui",
      region: "us-west-2"
    }
    // include other plugin configuration that applies to all deploy targets here
    /*'ssh-index': {
      remoteDir: "/usr/local/www/workype",
      username: "ubuntu",
      host: "52.11.130.33",
      privateKeyFile: "<<pem-path>>",
      allowOverwrite: true
    },
    rsync: {
      type: 'rsync',
      dest: "/usr/local/www/workype",
      recursive: true,
      host: "user@hostipaddr",
      delete: false,
      args: ['--verbose', "--rsync-path='sudo -u www-data rsync'", '-ztl']
    }*/
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
