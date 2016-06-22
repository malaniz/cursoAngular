
var app = angular.module('cl01bApp');
app.factory('ProdSrv', function($http, $rootScope){
  function list(callback) {
    $rootScope.isLoading = true;
    $http.post('http://ec2-52-90-252-132.compute-1.amazonaws.com:7777/papi/productos/lst', {})
      .then(function(resultado) {
        $rootScope.isLoading = false;
        callback(resultado.data);
      });
  }

  function detail(id, callback) {
    $rootScope.isLoading = true;
    $http.get('http://ec2-52-90-252-132.compute-1.amazonaws.com:7777/papi/productos/get?_id='+id)
      .then(function(resultado) {
        $rootScope.isLoading = false;
        callback(resultado.data);
      });
 
  }

  function add(o, callback) {
    $rootScope.isLoading = true;
    $http.post('http://ec2-52-90-252-132.compute-1.amazonaws.com:7777/papi/productos/put', {data: o})
      .then(function(resultado) {
        $rootScope.isLoading = false;
        callback(resultado.data);
      });
  }

  function rm(id, callback) {
    $rootScope.isLoading = true;
    $http.get('http://ec2-52-90-252-132.compute-1.amazonaws.com:7777/papi/productos/del?_id='+id)
      .then(function(resultado) {
        $rootScope.isLoading = false;
        callback(resultado.data);
      });
  }

  return {
    list : list,
    detail : detail,
    add : add,
    rm : rm
  }
});
