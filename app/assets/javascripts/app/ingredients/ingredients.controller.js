function IngredientsController(Ingredient){

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
    // debugger;
    this.ingredients.push(data);
  }



Ingredient.query().$promise.then(function(response){
    // console.log(this.allIngredients);
    vm.allIngredients=response;
  });
}

angular
  .module('app')
  .controller('IngredientsController', IngredientsController);
