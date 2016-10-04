import OAuth2PasswordGrant from 'ember-simple-auth/authenticators/oauth2-password-grant';
import ENV from '../config/environment';

export default OAuth2PasswordGrant.extend({
	serverTokenEndpoint: ENV['ember-simple-auth']['baseURL'] + '/token',
	serverTokenRevocationEndpoint: ENV['ember-simple-auth']['baseURL'] + '/revoke'
});