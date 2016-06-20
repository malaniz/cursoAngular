'use strict';

/**
 * @ngdoc function
 * @name cl01bApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the cl01bApp
 */
var app = angular.module('cl01bApp');
app.controller('MainCtrl', function ($scope, ProductoSrv) {
   ProductoSrv.list(function(data){
     $scope.productos = data;
   });

   $scope.add = function(x) {
     ProductoSrv.add(x, function(result){
       console.log("guardado ", result);
     })
   }
});

app.controller('LoginCtrl', function ($scope, $routeParams, ProductoSrv) {

  ProductoSrv.detail($routeParams.id, function (d){
    $scope.producto = d;
  });

});




