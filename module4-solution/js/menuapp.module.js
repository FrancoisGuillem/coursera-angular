angular.module("MenuApp", ["data", "ui.router"])

angular.module("MenuApp").controller("myctrl", function(MenuDataService) {
  ctrl = this;
  MenuDataService.getAllCategories().then(function(response) {
    ctrl.categories = response.data;
  });
});
