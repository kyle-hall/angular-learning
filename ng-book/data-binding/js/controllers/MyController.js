
var MyController = function($scope) {
  $scope.clock = {
    now: new Date()
  };

  var updateClock = function() {
    //Obviously, this is a huge memory leak. Try to come up with a memory-friendly implementation.
    $scope.clock.now = new Date();
  };
  setInterval(function() {
    $scope.$apply(updateClock);
  }, 1000);
  updateClock();
};

module.exports = MyController;
