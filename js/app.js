var app = angular.module('hackalist', []);

app.controller('hackathonEvents', ['$http', '$scope', function($http, $scope){
  $scope.hackathons = [];
  $scope.applicable = function(hackathon) {
    if (!$scope.travelReimbursements && !$scope.prizes && !$scope.highSchoolers && !$scope.cost &&
        !$scope.logoURL && !$scope.mlhSponsor) {
      return true;
    }

    if ($scope.travelReimbursements && hackathon.travel != 'yes') {
      return false;
    }

    if ($scope.prizes && hackathon.prize != 'yes') {
      return false;
    }

    if ($scope.highSchoolers && hackathon.highSchoolers != 'yes') {
      return false;
    }

    if ($scope.cost && hackathon.cost != 'free') {
      return false;
    }

    if ($scope.logoURL && hackathon.logoURL != '') {
      return "";
    }
    if ($scope.mlhSponsor && hackathon.mlhSponsor != 'yes') {
      return false;
    }
    
    return true;
  }

  var today = new Date();

  var month = today.getMonth() + 1;
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
      $scope.chunkedHackathons = chunk($scope.hackathons, 3);
      console.log($scope.hackathons);
    });
  }

  getData(month, year)
}]);

function urlString(month, year) {
  return 'api/1.0/' + year + '/' + monthString(month) + '.json';
}

function monthString(n) {
  return n > 9 ? "" + n : "0" + n;
}

function chunk(arr, size) {
  var newArr = [];
  for (var i=0; i<arr.length; i+=size) {
    newArr.push(arr.slice(i, i+size));
  }

  return newArr;
}
