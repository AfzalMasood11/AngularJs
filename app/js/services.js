'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.

// angular.module('myApp.services', []).
//   value('version', '0.1');

var angularSeedServices = angular.module('angularSeedServices', ['ngResource']);
 
angularSeedServices.factory('Authentication', ['$resource',
  function($resource){
    return $resource('auth_response/:auth_response.json', {}, {
      query: {method:'GET', params:{auth_response: 'auth_response'}, isArray:true}
    });
  }]);