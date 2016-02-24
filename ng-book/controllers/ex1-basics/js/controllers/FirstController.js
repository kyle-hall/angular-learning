
var firstApp = angular.module("firstApp", []);

firstApp.controller("FirstController", FirstController);
FirstController.$inject = ["$scope"];

function FirstController($scope) {
  $scope.counter = {
    value: 0
  };
  $scope.add = function(amount) {
    $scope.counter.value = $scope.counter.value + amount;
  };
  $scope.subtract = function(amount) {
    $scope.counter.value = $scope.counter.value - amount;
  };
}
