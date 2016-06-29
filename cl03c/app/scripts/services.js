
var app = angular.module('cl01bApp');

app.factory('API', function($http, $rootScope, $q){

  function get(uri) {

    var promesa = $q.defer();
    $rootScope.isLoading = true;
    $http.get('http://ec2-52-90-252-132.compute-1.amazonaws.com:7777/papi'+uri)
      .then(function(data) {
        $rootScope.isLoading = false;
        promesa.resolve(data.data);
      });
    return promesa.promise;
  }
  function post(uri, data) {
    var promesa = $q.defer()
    $rootScope.isLoading = true;
    $http.post('http://ec2-52-90-252-132.compute-1.amazonaws.com:7777/papi'+uri, data)
      .then(function(data) {
        $rootScope.isLoading = false;
        promesa.resolve(data.data);
      }, function(e) {
        promesa.reject();
      });
    return promesa.promise;

  }

  return {
    get: get,
    post: post
  }
});
app.factory('ProdSrv', function(API){

  function list() {
    return API.post('/productos/lst', {})
  }
  function detail(id){
    return API.get('/productos/get?_id='+id)
  }
  return {
    list: list,
    detail: detail
  };
});
