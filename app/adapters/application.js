import DS from 'ember-data';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

export default DS.RESTAdapter.extend(DataAdapterMixin, {
  host:'http://52.11.130.33:9000',
  namespace: 'api',
  authorizer: 'authorizer:application'
});