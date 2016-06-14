'use strict';

/**
 * @ngdoc overview
 * @name cl01bApp
 * @description
 * # cl01bApp
 *
 * Main module of the application.
 */
angular
  .module('cl01bApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/detail/:id', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl',
        controllerAs: 'main'
      })
 
      .otherwise({
        redirectTo: '/'
      });
  });
