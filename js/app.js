var app = angular.module('hackalist', []);

app.controller('hackathonEvents', ['$http', '$scope', function($http, $scope){
  $scope.hackathons = [];
  $scope.applicable = function(hackathon) {
    if ($scope.travelToggle == 0 && $scope.prizeToggle == 0 && $scope.highSchoolersToggle == 0) {
      return true;
    }

    if ($scope.travelToggle != 0 && hackathon.travel == 'yes') {
      return true;
    }

    if ($scope.prizeToggle != 0 && hackathon.prize != 'unknown') {
      return true;
    }

    if ($scope.highSchoolersToggle != 0 && hackathon.highSchoolers == "yes") {
      return true;
    }

    return false;
  }

  var today = new Date();

  var month = today.getMonth();
  var year = today.getFullYear();

  function getData(month, year) {
    $http.get(urlString(month, year)).success(function (data) {
      (function(month, year){
        var months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
          ];

        var monthString = months[month - 1];

        var hacks = data[monthString];

        $scope.hackathons.push({year: year, hacks: hacks, month: monthString});

        if (month >= 12) {
          year += 1;
          month = 1;
        } else {
          month += 1;
        }

        getData(month, year);
      })(month, year);
    }).error(function() {
      console.log($scope.hackathons);
    });
  }

  getData(month, year)
}]);

function urlString(month, year) {
  return '/api/1.0/' + year + '/' + monthString(month) + '.json';
}

function monthString(n) {
  return n > 9 ? "" + n : "0" + n;
}
