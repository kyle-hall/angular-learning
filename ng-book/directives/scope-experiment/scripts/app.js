
var myApp = angular.module('myApp', []);

myApp.directive('myDirective', function() {
  return {
    restrict: 'A',
    scope: false,
    template: '<div><p>Inside myDirective: {{myProperty}}, {{aForthProperty}} :End of values</p></div>'
  };
});

myApp.controller("SomeController", SomeController);
SomeController.$inject = ["$scope"];

function SomeController($scope) {

}

myApp.controller("SecondController", SecondController);
SecondController.$inject = ["$scope"];

function SecondController($scope) {

}

myApp.controller("MainController", MainController);
MainController.$inject = ["$scope"];

function MainController($scope) {

}
