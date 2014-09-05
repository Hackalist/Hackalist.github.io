var app = angular.module('hackalist', []);

app.controller('hackathonEvents', ['$http', '$scope', function($http, $scope){
  $http.get('../api/1.0/august14.json').success(function (data) {
    $scope.august14 = data;
  })
  $http.get('../api/1.0/september14.json').success(function (data) {
    $scope.september14 = data;
  })
  $http.get('../api/1.0/october14.json').success(function (data) {
    $scope.october14 = data;
  })
  $http.get('../api/1.0/november14.json').success(function (data) {
    $scope.november14 = data;
  })
  $http.get('../api/1.0/december14.json').success(function (data) {
    $scope.december14 = data;
  })
  $http.get('../api/1.0/january15.json').success(function (data) {
    $scope.january15 = data;
  })
  $http.get('../api/1.0/february15.json').success(function (data) {
    $scope.february15 = data;
  })
  $http.get('../api/1.0/march15.json').success(function (data) {
    $scope.march15 = data;
  })
  $http.get('../api/1.0/april15.json').success(function (data) {
    $scope.april15 = data;
  })
}]);
