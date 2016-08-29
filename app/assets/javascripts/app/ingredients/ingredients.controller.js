function IngredientsController($scope, $http, $state, $stateParams, IngredientFactory){

  var vm = this;


  vm.allIngredients = IngredientFactory.query();
  vm.createIngredient = createIngredient;
  vm.newIngredient = new IngredientFactory();
  // vm.newIngredient = { ingredient: "" };


//Form for creating new ingredients
  function createIngredient(){
    // debugger;
    vm.newIngredient.$save(function(){
      vm.allIngredients = IngredientFactory.query();
      vm.newIngredient.ingredient ="";
    });
  }






}

angular
  .module('app')
  .controller('IngredientsController', ['$scope', '$http', '$state', '$stateParams', 'IngredientFactory', IngredientsController]);
