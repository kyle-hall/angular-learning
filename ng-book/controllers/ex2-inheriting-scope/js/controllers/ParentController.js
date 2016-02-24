
var inheritingApp = angular.module("inheritingApp", []);

inheritingApp.controller("ParentController", ParentController);
inheritingApp.controller("ChildController", ChildController);

ParentController.$inject = ["$scope"];
ChildController.$inject = ["$scope"];

function ParentController($scope) {
  $scope.person = {
    'greeted': false
  };
}

function ChildController($scope) {
  $scope.sayHello = function () {
    $scope.person.greeted = true;
    $scope.person.name = "Kyle Hall";
  };
}
