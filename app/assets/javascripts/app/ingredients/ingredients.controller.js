function IngredientsController($scope, $http, $state, $stateParams, IngredientFactory){

  var vm = this;


  vm.allIngredients = IngredientFactory.query();
  vm.createIngredient = createIngredient;
  vm.newIngredient = new IngredientFactory();
  vm.deleteIngredient = deleteIngredient;
  vm.startDeleteButton = startDeleteButton;
  vm.startAddIngredient = startAddIngredient;
  vm.filterIngredients = filterIngredients;

  vm.showDeleteButton = false;
  vm.showSearch = true;
  vm.showAddIngredient = false;
  vm.searchButton = true;
  vm.addIngredientButton = false;
  // vm.newIngredient = { ingredient: "" };

function startAddIngredient(){
  vm.showAddIngredient = true;
  vm.searchKey ="";
  vm.showSearch = false;
  // vm.searchButton = !vm.searchButton;
  // vm.addIngredientButton = !vm.addIngredientButton;

}

function filterIngredients(){

  vm.showAddIngredient = false;
    vm.showSearch = true;

}

//Form for creating new ingredients
  function createIngredient(){
    vm.newIngredient.$save(function(){
      vm.allIngredients = IngredientFactory.query();
      vm.newIngredient.ingredient ="";
    });
  }

  function deleteIngredient(ingredient_id){
    for(var i=0; i< vm.allIngredients.length; i++){

      if(vm.allIngredients[i].id == ingredient_id){
        vm.allIngredients[i].$delete({ingredient_id: ingredient_id});
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
