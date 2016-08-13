function RecipesController(){
var vm = this;
  vm.recipes =[
    {
      name: 'pad thai',
      ingredients: [
      {
        id: 1,
        ingredient: "peanuts"
      },
      {
        id: 2,
        ingredient: "noodles"
      },
      {
        id: 3,
        ingredient: "chicken"
      }
      ]
    },
    {
      name: 'lemon chicken'
    },
    {
      name: 'meatloaf'
    },
    {
      name: 'Penne al a vodka'
    }

  ]

var id = window.location.pathname.split('/')[window.location.pathname.split('/').length - 1]
  this.recipeShowPage = function(){
    vm.recipe = vm.recipes[id-1];

  }
};

angular
  .module('app')
  .controller('RecipesController', RecipesController);
