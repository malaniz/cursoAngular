'use strict';

/**
 * @ngdoc function
 * @name e01App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the e01App
 */
var app = angular.module('e01App');
app.controller('MainCtrl', function ($scope, $filter) {
  $scope.d = new Date();
  $scope.n = 10.999;
  $scope.s = "asdkl; klasdjf kl;asf lkasdf lsdflsdflsdf sdfkl jsdafk jasdflk jsadklfj sadf asdf asdf asdf asdf asdf alskdjlaksjdf quwepioruqwpeoiujaskldjf asdf asdlfsdflk asdkflj sadlkf jasdlfk jasdfkl jasdfklj asdflk jasdfj dfk dfk jd dkfj dkf jdfk jd asdf asdf asdf asdf asdf asdf q34 rqwer qwer qwer qwer qwer qwer qwe r qwer qwer qw er qwer qwer qwerff";

  $scope.y = new Date();

  $scope.y = $filter('date')($scope.y, 'fullDate');

});


app.filter('ellipsis', function() {
  return function(i, cant, s) {
    s = s || ' ... ';
    console.log(i);
    var resultado = i;
    resultado = resultado.split(' ');

    if (resultado.length > cant) {
      console.log(resultado.length);
      resultado = resultado.splice(0, cant);
      resultado = resultado.join(' ') + s;
      return resultado;
    } else {
      return resultado.join(' ');
    }
  };
});
