var app = angular.module('hackalist', []);

app.controller('hackathonEvents', ['$http', '$scope', function($http, $scope){
  $http.get('../api/1.0/api.json').success(function (data) {
    $scope.year = data;
  })
}]);

app.filter('capitalize', function() {
    return function(input, scope) {
        return input.substring(0,1).toUpperCase()+input.substring(1);
    }
});
