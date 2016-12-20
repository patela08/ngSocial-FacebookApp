'use strict';

angular.module('myApp.version.interpolate-filter', [])

.filter('interpolate', ['version', function(version) {
  return function(text) {
      console.log(version);
    return String(text).replace(/\%VERSION\%/mg, version);
  };
}]);
