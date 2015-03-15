// wrap the whole thing in an empty function
(function() {

  // var app = angular.module('application name', [dependencies]);
  // var app = angular.module('etsy-api', []);

  // Example request for index page
  angular.module('etsy', [])
    .controller('FetchController', ['$scope', '$http',
      function($scope, $http) {

        shop_id = 'fiddlefishstore'
        api_key = '&api_key=3ugcu6nyygcbysomqa2ed2ja';
        fields = '&fields=title,url,price,quantity,description';
        limit = '&limit=100';
        includes = '&includes=MainImage';
        callback = '&callback=JSON_CALLBACK';
        etsyURL = 'https://openapi.etsy.com/v2/shops/'
          +shop_id
          +'/listings/active.js?method=GET'
          +api_key
          +fields
          +limit
          +includes
          +callback    

        $http.jsonp(etsyURL).
          success(function(data, status) {
            $scope.status = status;
            $scope.data = data;
            console.log('status:');
            console.log(status);
            console.log('data response:');
            console.log(data);
          }).
          error(function(data, status) {
            $scope.data = data || "Request failed";
            $scope.status = status;
        });
      
  }]);

})();