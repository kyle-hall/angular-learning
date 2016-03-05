
var myApp = angular.module('myApp', [
    'ngRoute',
    'myApp.services'
]);

myApp.controller("HomeController", HomeController);
HomeController.$inject = ["$scope", 'HitService'];

function HomeController($scope, HitService) {
    HitService.count().then(function(data) {
        $scope.hits = data;
    });

    $scope.registerHit = function() {
        HitService.registerHit().then(function (data) {
            $scope.hits = data;
        });
    };
}