
var directiveApp = angular.module("directiveApp", []);

directiveApp.directive("myDirective", function () {
  return {
    restrict: 'EAC',
    replace: true,
    template: '<a href="http://google.com">Click Me to go to Google</a>'
  };
});
