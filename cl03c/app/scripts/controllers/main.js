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
  ProdSrv.list()
    .then(function(res){
      $scope.productos = res;
    });
});

app.controller('DetailCtrl', function ($scope, $routeParams, ProdSrv) {
  ProdSrv.detail($routeParams.id)
    .then(function(res){
      $scope.producto = res;
    });
});




