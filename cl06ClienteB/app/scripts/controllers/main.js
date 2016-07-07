'use strict';

/**
 * @ngdoc function
 * @name e01App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the e01App
 */
var app = angular.module('e01App');
app.controller('MainCtrl', function ($scope, $rootScope, $http) {
  $scope.color = "";
  $scope.cartel = function() {
    alert("esto es un cartel");
  }

  if ($rootScope.isAuthenticated) {
    $http.post('http://localhost:8081/api/protected', {})
      .success(function(data) {
        console.log(data);
      })
    .error(function (e) {
      console.log('error');
    });
  }
});


app.controller('LoginCtrl', function ($scope, $http, ServiceAuth, $location) {
  $scope.message = "";
  $scope.doLogin = function(cred) {
    ServiceAuth.login(cred, function () {
      $location.path("/");
    }, function() {
      $scope.message = "error login";
    });
  }
   
});

app.directive('helloWorld', function() {
  return {
    restrict: "E",
    replace: true,
    scope: {
      colordefondo: "=backcolor",
      elcartel: "&falert"
    },
    templateUrl: "views/helloworld.html",
    link: function(scope, elem, attr) {
    }
  }
});


