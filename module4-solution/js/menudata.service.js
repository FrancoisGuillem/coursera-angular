angular.module("data").service("MenuDataService", MenuDataService);

MenuDataService.$inject = ["$http"];
function MenuDataService($http) {
  var service = this;

  service.getAllCategories = function() {
    console.log("get categories");
    return $http.get("https://davids-restaurant.herokuapp.com/categories.json");
  };

  service.getItemsForCategory = function(categoryShortName) {
    console.log("get items");
    return $http.get(
      "https://davids-restaurant.herokuapp.com/menu_items.json",
      {params: {category: categoryShortName}}
    )
  }

  return service;
}
