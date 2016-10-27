function RecipesController($scope, $http, $state, $stateParams, RecipeFactory, CategoryFactory, currentRecipeService){

  var vm = this;


  // vm.startEditRecipe = startEditRecipe;
  // vm.showEditRecipeForm = false;

  // vm.startFullRecipe = startFullRecipe;




  vm.newIngredient = { ingredient: "" };

  RecipeFactory.query().$promise.then(function(data){
    vm.recipes = data;
    vm.totalItems = data.length;
    vm.currentPage = 1;
    vm.PerPage = 10;
    $scope.$watch('currentPage + itemsPerPage', function() {
      var begin = (($scope.currentPage - 1) * vm.PerPage),
        end = begin + vm.PerPage;
      vm.filteredIngredients = vm.recipes.slice(begin, end);
    });
  });

  vm.newRecipe = new RecipeFactory();
  vm.recipe = RecipeFactory.get({ id: $stateParams.id })


//////////////////// WELCOME.HTML ////////////////////
vm.recipe_show = recipe_show;
vm.showFullRecipe = false;

////////////////////END OF WELCOME.HTML ////////////////////

///////////////// RECIPES.HTML ///////////////////////////
vm.showSearch = true;
vm.showAddRecipe = false;
vm.addNewRecipe = addNewRecipe;
vm.showDeleteRecipe = false;
vm.deleteRecipe =  deleteRecipe;
  //** side nav bar **//
vm.startAddRecipe = startAddRecipe;
vm.filterRecipes = filterRecipes;
vm.startDeleteRecipe= startDeleteRecipe;
  //** end of side nav bar **//
////////////////////END OF RECIPES.HTML ////////////////////

//////////////////// RECIPESHOW.HTML /////////////////////////
  //** newIngredientForm.html directive **//
vm.updateRecipe = updateRecipe;
  //** end of directive ** //
RecipeFactory.query().$promise.then(function(data){
  vm.lastRecipes = data.splice(-5);
});
vm.reloadWelcomePageRecipe = reloadWelcomePageRecipe;
vm.showEditRecipeButton = false;
vm.showEditRecipeName = false;

vm.startEditRecipeName = startEditRecipeName;
vm.startDeleteIngredient = startDeleteIngredient;
  //** side nav bar **//
vm.deleteRecipeShow = deleteRecipeShow;
vm.editRecipeShow = editRecipeShow;
  //** end of side nav bar **//
vm.editRecipe = editRecipe;
//////////////////// END OF RECIPESHOW.HTML ////////////////////

//---------------------------------------------------------------//

// ++++++++++++++++++++  LOGIC FUNCTIONS  +++++++++++++++++++++++++++++//


/////////////////////  RECIPESHOW.HTML FUNCTIONS  /////////////////////////
  function editRecipeShow(){
    vm.showEditRecipeButton = !vm.showEditRecipeButton;
  };

  function filterRecipes(){
    vm.showAddRecipe = false;
    vm.showSearch = true;
  }


////////////////////// RECIPE.HTML AND CATEGORYSHOW.HTML /////////////////////////
  function startAddRecipe(){
    vm.showAddRecipe = true;
    vm.searchKey ="";
    vm.showSearch = false;
  }

  function addNewRecipe(){
    vm.newRecipe.$save(function() {
    vm.recipes = RecipeFactory.query();
    });
  }

  function startDeleteRecipe(){
    vm.showDeleteRecipe = !vm.showDeleteRecipe;
  }


/////////////////// RECIPESHOW.HTML ///////////////////////////


  function editRecipe(){
    vm.recipe.$update(getRecipe);
     vm.showEditRecipeName = false;
  }

  function startEditRecipeName(){
    vm.showEditRecipeName = !vm.showEditRecipeName;
  }

  function startDeleteIngredient(ingredient_id){
    vm.recipe.$delete({ingredient_id: ingredient_id});
    vm.recipe = RecipeFactory.get({ id: $stateParams.id });
  }

  function deleteRecipeShow(recipe_id){
    vm.recipe.$delete({recipe_id: recipe_id});
    $state.go('home.welcome');
  }

  function  reloadWelcomePageRecipe(data){
    recipe_show(data);
    $state.go("home.welcome");
  }

  function startEditRecipe(){
    vm.showEditRecipeForm = !vm.showEditRecipeForm;
  }


  function getRecipe(){
    debugger;
    vm.recipe = RecipeFactory.get({ id: $stateParams.id })
  }

/////////////// NEW-INGREDIENT-DIRECTIVE /////////////////
  function updateRecipe(){
    vm.recipe.ingredients.push(vm.newIngredient);
    vm.recipe.$update(function() {
      vm.recipe = RecipeFactory.get({ id: $stateParams.id });
      vm.newIngredient = { ingredient: "" };
    });
  }

///////////// CATEGORYSHOW.HTML AND RECIPE.HTML //////////
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



  function deleteRecipeIngredient(){

  }


////////////////////  WELCOME.HTML ////////////////////////
function startFullRecipe(){
  vm.showFullRecipe = !vm.showFullRecipe;
}

function recipe_show(data){
  for(var i=0; i< vm.recipes.length; i++){
    if(vm.recipes[i].id == data){
      vm.current_recipe = vm.recipes[i];
      currentRecipeService.setRecipe(vm.current_recipe);
      vm.title = 'Ingredients for '+ vm.current_recipe.name;
      vm.url = '<a href="/#/recipes/'+data+'"  >'+"click here to edit recipe" +'</a>';
    }
  }
}


    vm.current_recipe = currentRecipeService.getRecipe();
    vm.title = 'Ingredients for '+ vm.current_recipe.name;
    vm.url = '<a href="/#/recipes/'+vm.current_recipe.id+'"  >'+"click here to edit recipe" +'</a>';

};

//+++++++++++++++++++++++ END OF LOGIC FUNCTIONS ++++++++++++++++++++++++++//

angular
  .module('app')
  .controller('RecipesController', ['$scope', '$http', '$state', '$stateParams', 'RecipeFactory', 'CategoryFactory', 'currentRecipeService', RecipesController]);
