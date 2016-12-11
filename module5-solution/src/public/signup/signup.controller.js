(function() {

  angular.module("public").controller("signupController", signupController);

  signupController.$inject = ["MenuService"];
  function signupController(MenuService) {
    var ctrl = this;
    ctrl.user = {
      firstName: "Tony",
      lastName: "Stark",
      email: "tony@avengers.com",
      phone: "123-123-1234"
    }
    ctrl.invalidItem = false; // Used to validate field "favourite item"

    ctrl.saveUserInfo = function() {
      // Retrieve favorite item
      console.log("check item")
      MenuService.getItem(ctrl.user.favoriteItem).then(
        function(response) {
          console.log(response);
          ctrl.invalidItem = false;
        },
        function(error) {
          ctrl.invalidItem = true;
        }
      );
    }
  }

})();
