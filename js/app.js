var app = angular.module('hackalist', []);

app.controller('hackathonEvents', ['$http', '$scope', function($http, $scope){
  $http.get('../api/1.0/2014/08.json').success(function (data) {
    $scope.august14 = data;
  })
  $http.get('../api/1.0/2014/09.json').success(function (data) {
    $scope.september14 = data;
  })
  $http.get('../api/1.0/2014/10.json').success(function (data) {
    $scope.october14 = data;
  })
  $http.get('../api/1.0/2014/11.json').success(function (data) {
    $scope.november14 = data;
  })
  $http.get('../api/1.0/2014/12.json').success(function (data) {
    $scope.december14 = data;
  })
  $http.get('../api/1.0/2015/01.json').success(function (data) {
    $scope.january15 = data;
  })
  $http.get('../api/1.0/2015/02.json').success(function (data) {
    $scope.february15 = data;
  })
  $http.get('../api/1.0/2015/03.json').success(function (data) {
    $scope.march15 = data;
  })
  $http.get('../api/1.0/2015/04.json').success(function (data) {
    $scope.april15 = data;
  })
  $http.get('../api/1.0/2015/05.json').success(function (data) {
    $scope.may15 = data;
  })
  $http.get('../api/1.0/2015/06.json').success(function (data) {
    $scope.june15 = data;
  })
  $http.get('../api/1.0/2015/07.json').success(function (data) {
    $scope.july15 = data;
  })
  $http.get('../api/1.0/2015/08.json').success(function (data) {
    $scope.august15 = data;
  })
}]);
