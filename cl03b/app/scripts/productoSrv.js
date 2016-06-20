var app = angular.module('cl01bApp');
app.factory('ProductoSrv', function($http) {
  function list(f){
    $http.post('http://ec2-52-90-252-132.compute-1.amazonaws.com:7777/papi/productos/lst', {})
      .then(function(res) {
        f(res.data);
      });
  }

  function detail(id, f){
$http.get('http://ec2-52-90-252-132.compute-1.amazonaws.com:7777/papi/productos/get?_id='+id, {})
      .then(function(res) {
        f(res.data);
      });

  }

  function add(producto, f){

    $http.post('http://ec2-52-90-252-132.compute-1.amazonaws.com:7777/papi/productos/put', {data: producto} )
      .then(function(res) {
        f(res.data);
      });
  }

  return {
    list: list,
    detail: detail,
    add: add
  };
});
