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

//Form for creating new ingredients
  this.createIngredient = function(data){
    this.ingredients.push(data);
  }

  
}

angular
  .module('app')
  .controller('IngredientsController', IngredientsController);
