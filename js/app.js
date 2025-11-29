'use strict';

var app = angular.module('hackalistApp', []);

app.controller('mainController', ['$http', '$scope', '$window', '$location', function($http, $scope, $window, $location) {
  // Constants
  var YEARS = [2025, 2024, 2023, 2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014];
  var MONTHS = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  var YEARS_PER_ROW = 4;
  var MONTHS_PER_ROW = 3;

  // View state
  $scope.currentView = 'homepage'; // 'homepage' or 'year'
  $scope.selectedYear = null;
  
  // Archive view data
  $scope.yearRows = [];
  
  // Year view data
  $scope.hackathons = [];
  $scope.travelReimbursements = false;
  $scope.prizes = false;
  $scope.highSchoolers = false;
  $scope.cost = false;
  $scope.chunkedHackathons = [];

  function monthString(n) {
    return n > 9 ? '' + n : '0' + n;
  }

  function buildApiUrl(month, year) {
    return 'api/1.0/' + year + '/' + monthString(month) + '.json';
  }

  function chunk(arr, size) {
    var newArr = [];
    for (var i = 0; i < arr.length; i += size) {
      newArr.push(arr.slice(i, i + size));
    }
    return newArr;
  }

  // Homepage view
  $scope.showDirectory = function() {
    $scope.currentView = 'homepage';
    $scope.selectedYear = null;
    $window.history.pushState({view: 'homepage'}, 'Hackalist Archive', '/');
    document.title = 'Hackalist';
  };

  // Year view
  $scope.showYear = function(year) {
    $scope.currentView = 'year';
    $scope.selectedYear = year;
    $window.history.pushState({view: 'year', year: year}, 'Hackalist - ' + year, '/?year=' + year);
    document.title = 'Hackalist - ' + year;
    loadYear(year);
  };

  $scope.applicable = function(hackathon) {
    if (!$scope.travelReimbursements && !$scope.prizes && !$scope.highSchoolers && !$scope.cost) {
      return true;
    }

    if ($scope.travelReimbursements && hackathon.travel !== 'yes') {
      return false;
    }

    if ($scope.prizes && hackathon.prize !== 'yes') {
      return false;
    }

    if ($scope.highSchoolers && hackathon.highSchoolers !== 'yes') {
      return false;
    }

    if ($scope.cost && hackathon.cost !== 'free') {
      return false;
    }

    return true;
  };

  $scope.scrollToMonth = function(monthName) {
    var element = document.getElementById(monthName);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  function loadYear(year) {
    // Reset data
    $scope.hackathons = [];
    $scope.chunkedHackathons = [];
    
    var monthsData = [];
    var monthsLoaded = 0;
    var monthsToLoad = 12;
    
    // Initialize array with placeholders to maintain order
    for (var i = 0; i < 12; i++) {
      monthsData[i] = {
        year: year,
        hacks: [],
        month: MONTHS[i]
      };
    }
    
    // Load data for each month
    for (var month = 1; month <= 12; month++) {
      (function(m) {
        var monthName = MONTHS[m - 1];
        $http.get(buildApiUrl(m, year))
          .then(function(response) {
            var data = response.data;
            var hacks = data[monthName];
            monthsData[m - 1] = {
              year: year, 
              hacks: hacks || [], 
              month: monthName
            };
            monthsLoaded++;
            
            if (monthsLoaded === monthsToLoad) {
              updateYearView(monthsData);
            }
          })
          .catch(function() {
            // If file doesn't exist, keep the empty array placeholder
            monthsLoaded++;
            
            if (monthsLoaded === monthsToLoad) {
              updateYearView(monthsData);
            }
          });
      })(month);
    }
  }

  function updateYearView(monthsData) {
    $scope.hackathons = monthsData;
    // Filter out months with no hackathons for navigation
    var nonEmptyMonths = monthsData.filter(function(month) {
      return month.hacks && month.hacks.length > 0;
    });
    $scope.chunkedHackathons = chunk(nonEmptyMonths, MONTHS_PER_ROW);
  }

  function initArchive() {
    var yearData = [];
    
    YEARS.forEach(function(year) {
      yearData.push({
        year: year,
        count: null
      });
    });
    
    // Split into rows
    $scope.yearRows = chunk(yearData, YEARS_PER_ROW);

    // Load counts for each year
    YEARS.forEach(function(year, yearIndex) {
      loadYearCount(year, yearIndex, yearData);
    });
  }

  function loadYearCount(year, yearIndex, yearData) {
    var totalCount = 0;
    var monthsChecked = 0;
    
    for (var month = 1; month <= 12; month++) {
      (function(m) {
        var monthName = MONTHS[m - 1];
        var url = buildApiUrl(m, year);
        
        $http.get(url)
          .then(function(response) {
            var data = response.data;
            var hacks = data[monthName];
            if (hacks && hacks.length) {
              totalCount += hacks.length;
            }
            monthsChecked++;
            
            if (monthsChecked === 12) {
              yearData[yearIndex].count = totalCount;
            }
          })
          .catch(function() {
            monthsChecked++;
            
            if (monthsChecked === 12) {
              yearData[yearIndex].count = totalCount;
            }
          });
      })(month);
    }
  }

  function handleRoute() {
    var urlParams = new URLSearchParams($window.location.search);
    var year = urlParams.get('year');
    
    if (year && YEARS.indexOf(parseInt(year)) !== -1) {
      $scope.showYear(year);
      return;
    }
    
    // Default to homepage view
    $scope.currentView = 'homepage';
    initArchive();
  }

  // Handle browser back/forward buttons
  $window.addEventListener('popstate', function(event) {
    $scope.$apply(function() {
      if (event.state && event.state.view === 'year' && event.state.year) {
        $scope.currentView = 'year';
        $scope.selectedYear = event.state.year;
        loadYear(event.state.year);
      } else {
        $scope.currentView = 'homepage';
        $scope.selectedYear = null;
        initArchive();
      }
    });
  });

  // Initialize application
  handleRoute();
}]);

