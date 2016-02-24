
var directiveApp = angular.module("directiveApp", []);

directiveApp.directive("myDirective", function () {
  return {
    restrict: 'A',
    replace: true,
    scope: {
      myUrl: '@',
      myLinkText: '@'
    },
    template: '<a href="{{myUrl}}">{{myLinkText}}</a>'
  };
});
