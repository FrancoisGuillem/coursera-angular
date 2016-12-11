(function() {
  angular.module("public").controller("userInfoController", userInfoController);

  userInfoController.$inject = ["MenuService", "user"];
  function userInfoController(MenuService, user) {
    var ctrl = this;
    ctrl.user=user;
    ctrl.favoriteMenuItem = {};

    if (!user) return false;

    MenuService.getItem(user.favoriteItem).then(function(response) {
      ctrl.favoriteMenuItem = response.data;
    });
  }
})();
