'use strict';

/**
 * @ngdoc function
 * @name cl01bApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the cl01bApp
 */
var app = angular.module('cl01bApp');
app.controller('MainCtrl', function ($scope) {
  $scope.nombre = "pepe";
  $scope.personas = [];

  $scope.agregar = function(x) {
    $scope.personas.push({ nombre: x, at: new Date()} );
    console.log($scope.personas);
  }
});

app.controller('LoginCtrl', function ($scope) {
  console.log('login not implemented');
});




