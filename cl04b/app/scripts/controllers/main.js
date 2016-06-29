'use strict';

/**
 * @ngdoc function
 * @name e01App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the e01App
 */
var app = angular.module('e01App');
app.controller('MainCtrl', function ($scope) {
    $scope.s = "asdfkl;jasd lkfjasdklfasl;dkf laskdj sdf jasdf klasdkfj hasdjkf asdjkf sadjkhasjkdh asjkdhasdf asdfjh asdklj asjkdhf asjkdhf kasjdhf kajsdhasdf";
    $scope.d = new Date();
    $scope.n = 10.999999;

  });


app.filter('ellipsis', function(){
  return function(i, cantidad, simbolo) {
    simbolo = simbolo || '...';
    var s = i.split(' ');
    var r, p;
    if (s.length > cantidad) {
      r = s.splice(0, cantidad);
      p = simbolo;
    } else {
      r = s;
      p= '';
    }
    return r.join(' ') + p;
  }
});
