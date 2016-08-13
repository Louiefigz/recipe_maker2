function RecipesController(){
var vm = this;
  vm.recipes =[
    {
      name: 'pad thai'
    }
  ]
};

angular
  .module('app')
  .controller('RecipesController', RecipesController);
