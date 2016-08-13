function IngredientsController(){

  var vm = this;

  vm.ingredients = [
    {
      ingredient: "peanuts"
    }
  ]
}

angular
  .module('app')
  .controller('IngredientsController', IngredientsController);
