import JSONAPISerializer from 'ember-data/serializers/json-api';

export default JSONAPISerializer.extend({
	normalizeArrayResponse (store, primaryModelClass, payload/*, id, requestType*/) {
		return payload;
	}
});
