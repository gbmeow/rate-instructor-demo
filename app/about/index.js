var HomeCtrl = require('./homectrl');
module.exports = function(ngModule) {
    ngModule.controller('HomeCtrl', HomeCtrl);
    require('./homectrltest')(ngModule); 
}