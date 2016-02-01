var angular = require('angular');
require('angular-material');
require('angular-mocks/angular-mocks');
var home = require('./home');


var app = angular.module('app', ['ngMaterial']);
home(app);
