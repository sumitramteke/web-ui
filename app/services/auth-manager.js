import Ember from 'ember';
import ENV from '../config/environment';

export default Ember.Service.extend({
	accessToken: null,

	authenticate(login, password) {
	return Ember.$.ajax({
	  method: "POST",
	  url: ENV.APP.API_HOST + "/token",
	  data: { username: login, password: password }
	}).then((result) => {
	  this.set('accessToken', result.access_token);
	  this.set('username', login);
	});
	},

	invalidate() {
	this.set('accessToken', null);
	},

	isAuthenticated: Ember.computed.bool('accessToken')
});
