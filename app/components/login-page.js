import Ember from 'ember';

export default Ember.Component.extend({

	authManager: Ember.inject.service('session'),

	actions: {
		authenticate() {
		  const { login, password } = this.getProperties('login', 'password');
		  sessionStorage.setItem('username',login);
		  this.get('authManager').authenticate('authenticator:oauth2', login, password).then(() => {
		    console.info('Successfully Authenticated!');
		  }, (err) => {
		  	console.error(login, password);
		    console.error('Error obtaining token: ' + err.responseText);
		  });
		}
	}
});
