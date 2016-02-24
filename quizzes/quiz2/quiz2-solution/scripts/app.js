
var quiz2app = angular.module("quiz2", []);

quiz2app.directive("myAnchor", function() {
  return {
    restrict: "A",
    template: '<a href="http://www.github.com">Click through to GitHub</a>'
  };
})
.directive("twoParagraphs", function() {
  return {
    restrict: "A",
    template: '<p>Lorem Ipsumn dolorean</p><p>Lorem dolorem kazoo</p>'
  };
})
.directive("nameInput", function() {
  return {
    restrict: "A",
    template: '<div><input type="text" ng-model="name" placeholder="Name" /></div><p>{{name}}</p>'
  };
});
