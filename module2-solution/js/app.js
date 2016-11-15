(function() {
  angular.module("ShoppingListCheckOff", [])
    .controller("ToBuyController")
    .controller("AlreadyBoughtController");

  ToBuyController.$inject = ["$scope"];
  AlreadyBoughtController.$inject = ["$scope"];

  function ToBuyController($scope) {

  }

  function AlreadyBoughtController($scope) {

  }
})();
