function RecipesController($scope, $http, $state, $stateParams, RecipeFactory){

  var vm = this;

  vm.startEditRecipe = startEditRecipe;
  vm.startEditRecipeName = startEditRecipeName;
  vm.startDeleteIngredient = startDeleteIngredient;
  vm.startDeleteRecipe= startDeleteRecipe;
  vm.startAddRecipe = startAddRecipe;
  vm.showEditRecipeForm = false;
  vm.showEditRecipeName = false;
  vm.showEditRecipeName = false;
  vm.showDeleteRecipe = false;
  vm.showFullRecipe = false;
  vm.showAddRecipe = false;
  vm.showSearch = true;
  vm.startFullRecipe = startFullRecipe;
  vm.deleteRecipe =  deleteRecipe;
  vm.addNewRecipe = addNewRecipe;
  vm.editRecipe = editRecipe;
  vm.reloadWelcomePageRecipe = reloadWelcomePageRecipe;
  vm.deleteRecipeShow = deleteRecipeShow = deleteRecipeShow;
  vm.filterRecipes = filterRecipes;



  vm.newIngredient = { ingredient: "" };
  vm.recipes = RecipeFactory.query();
  vm.newRecipe = new RecipeFactory();
  vm.updateRecipe = updateRecipe;
  vm.recipe = RecipeFactory.get({ id: $stateParams.id })

  vm.recipe_show = recipe_show;

  RecipeFactory.query().$promise.then(function(data){

    vm.lastRecipes = data.splice(-5);
  })


  function startAddRecipe(){
    vm.showAddRecipe = true;
    vm.searchKey ="";
    vm.showSearch = false;
  }

  function filterRecipes(){
    
    vm.showAddRecipe = false;
    vm.showSearch = true;
  }

  function editRecipe(){
    vm.recipe.$update(getRecipe);
     vm.showEditRecipeName = false;
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
      vm.recipe = RecipeFactory.get({ id: $stateParams.id });
  }

  function recipe_show(data){
    for(var i=0; i< vm.recipes.length; i++){
      if(vm.recipes[i].id == data){

        vm.current_recipe = vm.recipes[i];
        vm.title = 'Ingredients for '+ vm.current_recipe.name;
        vm.url = '<a href="/#/recipes/'+data+'"  >'+"click here to edit recipe" +'</a>'
      }
    }
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

  function deleteRecipe(recipe_id){


    for(var i=0; i<vm.recipes.length; i++){

      if (vm.recipes[i].id == recipe_id){
        vm.recipes[i].$delete({recipe_id: recipe_id})
      }
    }
    vm.recipes = RecipeFactory.query();
    // vm.recipe.$delete({recipe_id: recipe_id});
    //   // vm.recipe = RecipeFactory.get({ id: $stateParams.id })
  }
  //
  function deleteRecipeIngredient(){

  }

  function startDeleteRecipe(){
    vm.showDeleteRecipe = !vm.showDeleteRecipe;
  }

  function startFullRecipe(){
    vm.showFullRecipe = !vm.showFullRecipe;

  }

  function deleteRecipeShow(recipe_id){
    vm.recipe.$delete({recipe_id: recipe_id});
    $state.go('home.welcome');
  }

  function  reloadWelcomePageRecipe(data){
    $state.go("home.welcome");
    recipe_show(data);
  }


};

angular
  .module('app')
  .controller('RecipesController', ['$scope', '$http', '$state', '$stateParams', 'RecipeFactory', RecipesController]);
