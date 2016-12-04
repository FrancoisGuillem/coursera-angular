(function() {
  angular.module("MenuApp").component("categoryList", {
    templateUrl: "templates/categories.html",
    bindings: {
      categories: "<"
    }
  });
})();
