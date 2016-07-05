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

  if ('token' in $rootScope) {
    $http({
      method: 'POST',
      url: 'http://localhost:8081/api/protected',
      headers: {
        'Authorization': 'Bearer x' + $rootScope.token
      },
      data: {  }
    })
      .success(function(data) {
        console.log(data);
      })
    .error(function (e) {
      console.log('error');
    });
  }
});

app.controller('LoginCtrl', function ($scope, $http, $rootScope) {
  $scope.doLogin = function(cred) {
    $http.post('http://localhost:8081/login', {credentials: cred})
      .success(function(data) {
        console.log(data);
        $rootScope.token = data.token;
      })
      .error(function(e) {
        console.log(e);
      });
  };
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


