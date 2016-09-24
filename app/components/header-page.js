import Ember from 'ember';

export default Ember.Component.extend({
	authManager: Ember.inject.service('session'),

	actions: {
		invalidateSession() {
			let self = this;
			this.get('authManager').invalidate().then((response) => {
				console.log("invalidated with response: ", response);
				self.sendAction('signOut');
			});
		},
		signOut() {
			this.sendAction('signOut');
		}
	}
});
