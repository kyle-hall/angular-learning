
var app = angular.module("app", []);

app.controller("ParentController", ParentController);
app.controller("ChildController", ChildController);

ParentController.$inject = ["$scope"];
ChildController.$inject = ["$scope"];

function ParentController($scope) {
    $scope.person = {
        name: "Kyle"
    };
}

function ChildController($scope) {
    $scope.person.email = "Not the real email";
    $scope.updateEmail = function(theEmail) {
        $scope.person.email = theEmail;
    };
}
