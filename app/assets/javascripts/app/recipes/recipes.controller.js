function RecipesController(){
var vm = this;
  vm.recipes =[
    {
      name: 'pad thai'
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
};

angular
  .module('app')
  .controller('RecipesController', RecipesController);
