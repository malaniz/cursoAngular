'use strict';

/**
 * @ngdoc function
 * @name cl01bApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the cl01bApp
 */
var app = angular.module('cl01bApp');

app.controller('MainCtrl', function ($scope, ProdSrv) {
  $scope.productos = ProdSrv.list();
});

app.controller('LoginCtrl', function ($scope, $routeParams, ProdSrv) {
  $scope.producto = ProdSrv.detail($routeParams.id);
});

app.controller('CualquierCtrl', function ($scope) {

});




