'use strict';

/**
 * @ngdoc function
 * @name e01App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the e01App
 */
angular.module('e01App')
  .controller('MainCtrl', function ($scope) {
    $scope.nombre = "";
    $scope.personas = [];

    $scope.agregar = function(p) {
      $scope.personas.push(p);
      $scope.nombre = "";
    }
  })
  .controller('LoginCtrl', function ($scope) {
    $scope.credentials = {
      user: "",
      pass: ""
    };

    $scope.doLogin = function(c) {
      console.log(c);
    };
  });
