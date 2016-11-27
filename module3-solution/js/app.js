(function() {
  angular.module("NarrowItDownApp", [])
    .constant("menuUrl", "https://davids-restaurant.herokuapp.com/menu_items.json")
    .controller("NarrowItDownController", NarrowItDownController)
    .service("MenuSearchService", MenuSearchService)
    .directive("foundItems", foundItemsDirective)

  NarrowItDownController.$inject = ["MenuSearchService"]
  function NarrowItDownController(MenuSearchService) {
    ctrl = this;
    ctrl.found = [];
    ctrl.error = "";

    ctrl.narrowItDown = function() {
      if (!ctrl.q) {
        ctrl.error = "Nothing found!"
      } else {
        MenuSearchService.getMatchedMenuItems(ctrl.q).then(function(response) {
          ctrl.found = response;
          ctrl.error = response.length == "0"? "Nothing found!": "";
        });
      }
    }

    ctrl.removeItem = function(index) {
      ctrl.found.splice(index, 1);
    }
  }

  MenuSearchService.$inject = ["$http", "menuUrl"];
  function MenuSearchService($http, menuUrl) {
    service = this;
    service.getMatchedMenuItems = function(q) {
      return $http({url:menuUrl}).then(function(response) {
        var foundItems = []
        var items = response.data.menu_items;
        for (var i = 0; i < items.length; i++) {
          if (items[i].description.toLowerCase().indexOf(q) !== -1)
          foundItems.push(items[i]);
        }
        return foundItems;
      })
    }
  }

  function foundItemsDirective() {
    return {
      restrict: "E",
      templateUrl:"item-list.html",
      scope: {
        foundItems: "<",
        remove: "&onRemove"
      },
    }
  }

})();
