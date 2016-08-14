function RecipesController(){
var vm = this;
  vm.recipes =[
    {
      id: 1,
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
      id:2,
      name: 'lemon chicken'
    },
    {
      id:3,
      name: 'meatloaf'
    },
    {
      id:4,
      name: 'Penne al a vodka'
    }

  ]

var id = window.location.pathname.split('/')[window.location.pathname.split('/').length - 1];
  this.recipeShowPage = function(){
    vm.recipe = vm.recipes[id-1];
  }

  //this function is not 'working' but it pushes info to the hash vm.recipes correctly
  this.newIngredient = function(data){
    var id = window.location.pathname.split('/')[window.location.pathname.split('/').length - 1];
    this.recipes[id-1].ingredients.push(data);

  }
  this.recipeShow = function(data){
  
    vm.recipe = this.recipes[data-1];
    vm.title = 'Ingredients for '+ vm.recipe.name;
  }
};

angular
  .module('app')
  .controller('RecipesController', RecipesController);
