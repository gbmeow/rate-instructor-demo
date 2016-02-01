var angular = require('angular');
require('angular-material');
var home = require('./about');

var app = angular.module('app', ['ngMaterial']);
home(app);
