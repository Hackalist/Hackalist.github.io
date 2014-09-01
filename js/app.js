var app = angular.module('hackalist', []);

app.controller('hackathonEvents', ['$http', '$scope', function($http, $scope){
  $http.get('../api/1.0/api.json').success(function (obj) {
    $scope.year = Object.keys(obj);
  })
}]);
