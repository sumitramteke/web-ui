import Ember from 'ember';

export default Ember.Component.extend({
	authManager: Ember.inject.service('session'),

	actions: {
		invalidateSession() {
			var authData = JSON.parse(localStorage.getItem('ember_simple_auth-session'));
			console.log(authData.authenticated);
			let self = this;
			this.get('authManager').invalidate(authData.authenticated).then((response) => {
				console.log("invalidated with response: ", response);
				self.sendAction('signOut');
			});
		},
		signOut() {
			this.sendAction('signOut');
		}
	}
});
