'use strict';

var app = angular.module('e01App');

app.factory('authInterceptor', function($rootScope, $q, $window, $location) {
  return {
    request: function(config) {
      config.headers = config.headers || {};
      var session = null;
      if ($window.sessionStorage.length > 0){ session = $window.sessionStorage.session; }
      if (session){ 
        config.headers.Authorization = 'Bearer ' + session;
        $rootScope.isAuthenticated = true;
      }
      return config;
    },
    responseError: function(response) {
      if (response.status === 401) {
        // if not authorized access
        $location.path('/signin');
      } 
      return $q.reject(response);
    }
  };
});

app.factory('ServiceAuth', function($rootScope, $window, $http, $log) {
  return {

    isAuthenticated: function() {
      return ($rootScope.isAuthenticated);
    },

    login: function(credentials, success, err) {
      return $http
        .post('http://localhost:8081/login', { credentials: credentials}).then(
        function(res) {
          $rootScope.isAuthenticated = true;
          $window.sessionStorage.session = res.data.token;
          success();
        },
        function(res){
          delete $rootScope.isAuthenticated;
          delete $window.sessionStorage.session;
          console.log(res);
        });
    },

    logout: function() {
      delete $rootScope.user;
      $rootScope.isAuthenticated = false;
      delete $window.sessionStorage.session;
    },
  };
});

app.config(function ($httpProvider) {
  $httpProvider.interceptors.push('authInterceptor');
});
