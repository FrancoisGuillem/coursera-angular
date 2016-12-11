(function() {
  angular.module("common").service("UserInfoService", UserInfoService);

  UserInfoService.$inject = [];
  function UserInfoService() {
    var service = this;
    var userInfo = null;

    service.saveInfo = function(info) {
      userInfo = info;
      return true;
    };

    service.loadInfo = function() {
      return userInfo;
    }
  }
})();
