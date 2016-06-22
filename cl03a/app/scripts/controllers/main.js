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
  ProdSrv.list(function(res) {
    $scope.productos = res;
    console.log(res);
  });

  $scope.agregar =function(x){
    ProdSrv.add(x, function(res) {
      $scope.message = "OK se guardo correctamente";
      console.log(res);
      $scope.productos.push(res);
    });
  };
});

app.controller('LoginCtrl', function ($scope, $routeParams, $location, ProdSrv) {
  ProdSrv.detail($routeParams.id, function(r) {
    $scope.producto = r;
  });
  $scope.remove = function(id) {
    ProdSrv.rm(id, function(res) {
      $location.path('/');
    });
  };
});

app.controller('CualquierCtrl', function ($scope) {

});




