angular.module("MenuApp")
.config(configRoutes);

configRoutes.$inject = ["$stateProvider", '$urlRouterProvider']
function configRoutes($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider.state("home", {
    url: "/",
    template: "<div>This is the home page</div>"
  })

  $stateProvider.state("categories", {
    url: "/categories",
    controller: ["categories", function(categories) {
      console.log(categories)
      this.categories = categories.data;
    }],
    controllerAs: "ctrl",
    template: '<category-list categories="ctrl.categories"></category-list>',
    resolve: {
      categories: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
    }
  });
}
