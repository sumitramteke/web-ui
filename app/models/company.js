import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { hasMany } from 'ember-data/relationships';

export default Model.extend({
  companyname: attr(),
  contact: attr(),
  email: attr(),
  employeecount: attr(),
  filesURL: attr(),
  language: attr(),
  requirements: attr(),
  specialties: attr(),
  url: attr(),
  videoURL: attr(),
  address: hasMany('address')
});
