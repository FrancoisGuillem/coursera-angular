(function() {

  angular.module("public").controller("signupController", signupController);

  signupController.$inject = ["MenuService", "UserInfoService"];
  function signupController(MenuService, UserInfoService) {
    var ctrl = this;
    ctrl.user = {
      firstName: "Tony",
      lastName: "Stark",
      email: "tony@avengers.com",
      phone: "123-123-1234"
    }
    ctrl.invalidItem = false; // Used to validate field "favourite item"
    ctrl.saved = false // Has information been saved

    ctrl.saveUserInfo = function() {
      // Retrieve favorite item
      MenuService.getItem(ctrl.user.favoriteItem).then(
        function(response) {
          // Item is valid and we saved the profile
          ctrl.invalidItem = false;
          ctrl.saved = UserInfoService.saveInfo(ctrl.user);
        },
        function(error) {
          // Item does not exist
          ctrl.invalidItem = true;
          ctrl.saved = false;
        }
      );
    }
  }

})();
