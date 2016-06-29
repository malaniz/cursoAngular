'use strict';

/**
 * @ngdoc function
 * @name e01App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the e01App
 */
var app = angular.module('e01App')
app.controller('MainCtrl', function ($scope) {
  $scope.logear = function(){
    console.log('probando');
  };

});



app.directive('helloWorld', function() {
  return  {
    restrict: 'AE',
    replace: true,
    scope: {
      color: '=colorAttr',
      log: '&logAttr'
    },
    templateUrl: 'views/directives/helloWorld.html',
    link: function(scope, element, attrs) {
      element.bind('mouseover', function() {
        element.css('cursor', 'pointer');
        scope.log();
      });
    }
  }
});
