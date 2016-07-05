'use strict';

var app = angular.module('posApp');

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

app.factory('ServiceAuth', function($rootScope, $window, $http, ApiEndPoint, $log) {
  var parseJwt = function(token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace('-', '+').replace('_', '/');
    return JSON.parse($window.atob(base64));
  };

  return {
    getRole: function(){
      var result = null;
      if (!$window.sessionStorage.session) {
        result = null;
      } else {
        result = parseJwt($window.sessionStorage.session).role;
      }
      $log.info(result);
      return result;
    },

    isAuthenticated: function() {
      return ($rootScope.isAuthenticated);
    },

    login: function(credentials, success, err) {
      return $http
        .post(ApiEndPoint.url + '/login', credentials).then(
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
