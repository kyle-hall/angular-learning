//require isn't defined for some reason. I thought it was defined in javascript...
//^ This doesn't work because this is front-end code, node-style requires don't work on the client with substack's browserify package
var myController = require('controllers/MyController');

var myApp = angular.module("myApp", []);

myApp.controller("MyController", myController);
MyController.$inject = ["$scope"];
