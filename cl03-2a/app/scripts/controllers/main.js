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
  ProdSrv.list(function(prds) {
    $scope.productos = prds;
  });
});

app.controller('LoginCtrl', function ($scope, $routeParams, ProdSrv) {
  ProdSrv.detail($routeParams.id, function(p) {
    $scope.producto = p;
  });
});

app.controller('CualquierCtrl', function ($scope) {

});




