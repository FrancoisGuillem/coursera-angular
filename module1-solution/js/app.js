(function() {

  angular.module("LunchCheck", [])
    .controller("LunchCheckController", LunchCheckController);

  LunchCheckController.$injector = ["$scope"];
  function LunchCheckController($scope) {
    // Init scope
    $scope.lunch = "";
    $scope.message = "";
    $scope.msgClass = "";
    $scope.inputClass = "";

    $scope.checkIfTooMuch = function() {

      if ($scope.lunch == "") {
        $scope.message = "Please enter data first";
        $scope.msgClass = "text-danger";
        $scope.inputClass = "has-error";
      } else {
        var dishes = $scope.lunch.split(",");
        $scope.message = dishes.length <= 3 ? "Enjoy!" : "Too much!";
        $scope.msgClass = "text-success";
        $scope.inputClass = "has-success";
      }
    }
  }

})();
