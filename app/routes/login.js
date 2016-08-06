import Ember from 'ember';

export default Ember.Route.extend({
	actions: {
		homepage: function(reason, transition) {
		  this.transitionTo('/secret');
		  return false;
		}
	}
});
