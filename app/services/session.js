import Ember from 'ember';
import DS from 'ember-data';
import ESASession from "ember-simple-auth/services/session";

export default ESASession.extend({

  store: Ember.inject.service(),

  username: '',

  currentUser: Ember.computed('isAuthenticated', function() {
    if (this.get('isAuthenticated')) {
      const promise = this.get('store')
                          .queryRecord('user', {email: sessionStorage.getItem('username')});
      return DS.PromiseObject.create({ promise: promise });
    }
  })

});