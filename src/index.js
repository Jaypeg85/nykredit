var angular = require('angular');

var apiTest = require('./app/apiTest.component');
require('angular-ui-router');
var routesConfig = require('./routes');

require('./index.less');

var app = 'app';
module.exports = app;

angular
  .module(app, ['ui.router', require('angular-material')])
  .config(routesConfig)
  .component('app', apiTest)
  .service('apiTestService', require('./app/apiTest.service'))
  .service('customerService', require('./app/customer/customer.service'));
