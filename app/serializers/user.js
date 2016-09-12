import JSONAPISerializer from 'ember-data/serializers/json-api';

export default JSONAPISerializer.extend({
	normalizeArrayResponse (store, primaryModelClass, payload) {
		return payload;
	},

	normalizeResponse(store, primaryModelClass, payload, id, requestType) {
		let resp = {};
		resp['data'] = payload.data[0];
		resp['included'] = payload.included[0];
		return resp;
	}
});
