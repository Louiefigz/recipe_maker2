function IngredientsController($scope, $http, $state, $stateParams, IngredientFactory){

  var vm = this;


  vm.allIngredients = IngredientFactory.query();
  vm.createIngredient = createIngredient;
  vm.newIngredient = new IngredientFactory();
  vm.deleteIngredient = deleteIngredient;
  vm.startDeleteButton = startDeleteButton;
  vm.startAddIngredient = startAddIngredient;

  vm.showDeleteButton = false;
  vm.showSearch = true;
  vm.showAddIngredient = false;
  // vm.newIngredient = { ingredient: "" };

function startAddIngredient(){
  vm.showAddIngredient = !vm.showAddIngredient;
  vm.showSearch = !vm.showSearch;
}


//Form for creating new ingredients
  function createIngredient(){
    vm.newIngredient.$save(function(){
      vm.allIngredients = IngredientFactory.query();
      vm.newIngredient.ingredient ="";
    });
  }

  function deleteIngredient(ingredient_id){
    for(var i=0; i< this.allIngredients.length; i++){
      if(this.allIngredients[i].id == ingredient_id){
        this.allIngredients[i].$delete({ingredient_id: ingredient_id});
      }
    }
    vm.allIngredients = IngredientFactory.query();
  }

  function startDeleteButton(){
    vm.showDeleteButton = !vm.showDeleteButton;
  }



}

angular
  .module('app')
  .controller('IngredientsController', ['$scope', '$http', '$state', '$stateParams', 'IngredientFactory', IngredientsController]);
