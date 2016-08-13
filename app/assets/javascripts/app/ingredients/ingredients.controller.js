function IngredientsController(){

  var vm = this;

  vm.ingredients = [
    {
      ingredient: "peanuts"
    },
    {
      ingredient: "noodles"
    },
    {
      ingredient: "chicken"
    }
  ]
}

angular
  .module('app')
  .controller('IngredientsController', IngredientsController);
