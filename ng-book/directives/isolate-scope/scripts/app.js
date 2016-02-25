
var myApp = angular.module('myApp', []);

myApp.directive('myDirective', function() {
  return {
    restrict: 'A',
    scope: true,
    template: '<div><p>Inside myDirective: {{myProperty}}</p></div>'
  };
});

myApp.controller("MainController", MainController);
MainController.$inject = ["$scope"];

function MainController($scope) {

}
