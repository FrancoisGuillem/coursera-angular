(function() {
  angular.module("ShoppingListCheckOff", [])
    .controller("AlreadyBoughtController", AlreadyBoughtController)
    .controller("ToBuyController", ToBuyController)
    .service("ShoppingListCheckOffService", ShoppingListCheckOffService);

  ToBuyController.$inject = ["ShoppingListCheckOffService"];
  function ToBuyController(ShoppingListCheckOffService) {
    var toBuy = this;
    toBuy.list = ShoppingListCheckOffService.toBuyList;
    toBuy.buyItem = ShoppingListCheckOffService.buyItem;
  }

  AlreadyBoughtController.$inject = ["ShoppingListCheckOffService"];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var bought = this;
    bought.list = ShoppingListCheckOffService.boughtList;
  }

  function ShoppingListCheckOffService() {
    var service = this;
    service.toBuyList = [];
    service.boughtList = [];

    service.buyItem = function(index) {
      var item = service.toBuyList.splice(index, 1)[0];
      service.boughtList.push(item);
    };

    // Fill shopping list with random stuff
    var products = ["cheeses", "cookies", "sausages", "candies", "cakes",
                    "tomatos", "strawberries", "cucumbers", "breads", "biers", "vines"]
    var countries = ["", "french", "german", "spanish", "indian", "italian",
                     "chinese", "japanese", "mexican", "moon"]
    var adjectives = ["", "spicy", "sweet", "bitter", "red", "blue",
                      "yellow", "green", "soft", "hard", "weird", "hydrophobic"]

    function randomInteger(nmax) {return Math.floor(Math.random() * nmax)}
    function randomElem(array) {return array[randomInteger(array.length)]}

    for (var i=0; i < 10; i++) {
      var item = {
        name: randomElem(countries) + " " + randomElem(adjectives) + " " + randomElem(products),
        quantity: randomInteger(19) + 1
      }
      service.toBuyList.push(item);
    }
  }

})();
