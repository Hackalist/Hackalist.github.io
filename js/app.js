var app = angular.module('hackalist', []);

app.controller('hackathonEvents', ['$http', '$scope', function($http, $scope){
  $http.get('../api/2.0/api.json').success(function (data) {
    $scope.year = data;
  })
}]);
