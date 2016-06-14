
var app = angular.module('cl01bApp');
app.factory('ProdSrv', function($http){

  function list(callback) {
    $http.post('http://localhost:7777/papi/productos/lst', {})
      .success(function(data){
        callback(data);
      });
  }

  function detail(id, callback) {
    $http.get('http://localhost:7777/papi/productos/get?_id='+id)
      .success(function(data){
        callback(data);
      });
  }
  return {
    list : list,
    detail : detail
  }
});
