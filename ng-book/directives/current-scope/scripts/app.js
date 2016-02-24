
var myApp = angular.module('myApp', []);

myApp.run(function($rootScope) {
  $rootScope.rootProperty = 'root scope';
});

myApp.controller("ParentController", ParentController);
ParentController.$inject = ["$scope"];

function ParentController($scope) {
  $scope.parentProperty = 'parent scope';
}

myApp.controller("ChildController", ChildController);
ChildController.$inject = ["$scope"];

function ChildController($scope) {
  $scope.childProperty = 'child scope';
  $scope.fullSentenceFromChild = 'Same $scope: We can access: ' +
    $scope.rootProperty + ' and ' +
    $scope.parentProperty + ' and ' +
    $scope.childProperty;
}
