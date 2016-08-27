function RecipesController($scope, $http, $state, $stateParams, RecipeFactory){

  var vm = this;

  vm.startEditRecipe = startEditRecipe;
  vm.startEditRecipeName = startEditRecipeName;
  vm.startDeleteIngredient = startDeleteIngredient;
  vm.showEditRecipeForm = false;
  vm.showEditRecipeName = false;
  vm.showEditRecipeName = false;
  vm.deleteRecipe =  deleteRecipe;
  vm.addNewRecipe = addNewRecipe;
  vm.editRecipe = editRecipe;
  // vm.deleteRecipeIngredient = deleteRecipeIngredient;

  vm.newIngredient = { ingredient: "" };
  vm.recipes = RecipeFactory.query();
  vm.newRecipe = new RecipeFactory();
  vm.updateRecipe = updateRecipe;
  vm.recipe = RecipeFactory.get({ id: $stateParams.id })

  vm.recipe_show = recipe_show;

  function editRecipe(){
    vm.recipe.$update(getRecipe);
  }

  function getRecipe(){
    vm.recipe = RecipeFactory.get({ id: $stateParams.id })
  }

  function startEditRecipe(){
    vm.showEditRecipeForm = !vm.showEditRecipeForm;
  }

  function startEditRecipeName(){
    vm.showEditRecipeName = !vm.showEditRecipeName;
  }

  function startDeleteIngredient(ingredient_id){
    vm.recipe.$delete({ingredient_id: ingredient_id});
      vm.recipe = RecipeFactory.get({ id: $stateParams.id })
  }

  function recipe_show(data){
    vm.current_recipe = this.recipes[data-1];
    vm.title = 'Ingredients for '+ vm.current_recipe.name;
    vm.url = '<a href="/#/recipes/'+data+'"  >'+"click here to edit recipe" +'</a>'
  }

  function addNewRecipe(){
    vm.newRecipe.$save(function() {
      vm.recipes = RecipeFactory.query();
    });
  }

  function updateRecipe(){
    vm.recipe.ingredients.push(vm.newIngredient);
    vm.recipe.$update(function() {
      vm.recipe = RecipeFactory.get({ id: $stateParams.id });
      vm.newIngredient = { ingredient: "" };
    });
  }

  function deleteRecipe(){
    recipe.$delete
    recipe.$update
  }

  function deleteRecipeIngredient(){

  }


};

angular
  .module('app')
  .controller('RecipesController', ['$scope', '$http', '$state', '$stateParams', 'RecipeFactory', RecipesController]);
