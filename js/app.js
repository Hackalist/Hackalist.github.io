var app = angular.module('hackalist', []);

app.controller('hackathonEvents', ['$http', '$scope', function($http, $scope){
  $http.get('../api/1.0/august14.json').success(function (data) {
    $scope.august14 = data;
  })
  $http.get('../api/1.0/september14.json').success(function (data) {
    $scope.september14 = data;
  })
}]);
