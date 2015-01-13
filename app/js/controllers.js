'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
  .controller('MyCtrl1', [function() {

  }])
  .controller('MyCtrl2', [function() {

  }])
  .controller('SignIn', ['$scope', 'Authentication', function($scope, Authentication) {
    $scope.users = Authentication.query();
  }]);
