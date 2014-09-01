var app = angular.module('hackalist', []);

app.controller('hackathonEvents', ['$http', '$scope', function($http, $scope){
  
  $scope.keys = function(obj){
    return obj? Object.keys(obj) : [];
  }

  $scope.Dates = {
    $http.get('../api/1.0/api.json').success(function (obj) {
      $scope.year = obj;
    }
  })
}]);
