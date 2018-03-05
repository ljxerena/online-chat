(function() {
  'use strict';

  angular.module('LunchCheck', [])

  .controller('LunchCheckController', LunchCheckController);
  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope) {
    $scope.lunchItems = "";
    //$scope.numberLunchItems = 0;
    $scope.message = "";

    $scope.lunchCheckItems = function() {
      $scope.lunchItems = $scope.lunchItems.trim();


      if ($scope.lunchItems === "") {
        $scope.message = 'Please enter data first';
        //$scope.notice = 'No lunch is unhealty!';
      } else {
        var $lunchItemsSplit = $scope.lunchItems.split(",");
        var $numberLunchItems = $lunchItemsSplit.length;

        if (($numberLunchItems <= 3) || ($numberLunchItems == 4 && $lunchItemsSplit[3].trim() === "")) {
          $scope.message = 'Enjoy!';
          //$scope.notice = 'That is good!';
        } else {
          $scope.message = 'Too much!';
          //$scope.notice = 'That is not good!';
        }
      }
    }
  }

})();
