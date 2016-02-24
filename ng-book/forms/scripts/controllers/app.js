
var app = angular.module("app", []);

app.directive('ensureUnique', function($http) {
    return {
        require: 'ngModel',
        link: function(scope, ele, attrs, c) {
            scope.$watch(attrs.ngModel, function(n) {
                if (!n) return;
                $http({
                    method: 'POST',
                    url: '/api/check/' + attrs.ensureUnique,
                    data: {'field': attrs.ensureUnique}
                }).success(function(data) {
                    c.$setValidity('unique', data.isUnique);
                }).error(function(data) {
                    c.$setValidity('unique', false);
                });
            });
        }
    };
})
.directive('ngFocus', [function() { //This directive validates user inputs whenever the input field loses focus, aka a blur event
    var FOCUS_CLASS = "ng-focused";
    return {
        restrict: 'A',
        require: 'ngModel',
        link: function(scope, element, attrs, ctrl) {
            ctrl.$focused = false;
            element.bind('focus', function (evt) {
                element.addClass(FOCUS_CLASS);
                scope.$apply(function() {
                    ctrl.$focused = true;
                });
            }).bind('blur', function(evt) {
                element.removeClass(FOCUS_CLASS);
                scope.$apply(function() {
                    ctrl.$focused = false;
                });
            });
        }
    };
}]);

// app.controller("SignupController", SignupController);
// SignupController.$inject = ["$scope"];

//This implementation of SignupController validates input and displays errors only after the user has clicked the Submit button
// function SignupController($scope) {
//     $scope.submitted = false;
//     $scope.signupForm = function() {
//         if ($scope.signup_form.$valid) {
//             //Submit form as norm
//         } else {
//             $scope.signup_form.submitted = true;
//         }
//     };
// }
