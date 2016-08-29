import Model from 'ember-data/model';
import attr from 'ember-data/attr';
// import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  city: attr(),
  country: attr(),
  state: attr(),
  street: attr(),
  zipcode: attr()
});
