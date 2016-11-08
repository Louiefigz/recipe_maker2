function RecipesController($scope, $http, $state, $stateParams, RecipeFactory, CategoryFactory, RecipesService, currentRecipeService){

  var vm = this;

  //vm.recipe = recipeShowObject.data;


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

  ////////////  $resource call  ////////
  // vm.recipe = RecipeFactory.get({ id: $stateParams.id })


 // $http.get('recipes/'+ $stateParams.id).then(function(response){
 //   vm.recipe = response.data;
 // });

// debugger;
 ////////////////////////////////
 if ($stateParams.id) {
   RecipesService.getRecipe($stateParams.id).then(function(resp){
     vm.recipe = resp;
   })
 }



 //vm.recipe =
 // debugger;
 // vm.recipe.then(function(resp){
 //   debugger;
 //
 // })
// debugger;

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

$http.get('recipes').then(function(resp){
  vm.lastRecipes = resp.data.splice(-5);
});


// RecipeFactory.query().$promise.then(function(data){
//   vm.lastRecipes = data.splice(-5);
// });

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
      RecipesService.createNewRecipe(vm.newRecipe.name).then(function(resp){
        vm.recipes.push(resp.data);
      });
    // $http.post('recipes', {name: vm.newRecipe.name}).then(function(){
    //   $http.get('recipes').then(function(resp){
    //     vm.recipes = resp.data;
    //   });
    // });

    vm.newRecipe.name = "";
    // vm.newRecipe.$save(function() {
    // vm.recipes = RecipeFactory.query();
    // });
  }

  function startDeleteRecipe(){
    vm.showDeleteRecipe = !vm.showDeleteRecipe;
  }


/////////////////// RECIPESHOW.HTML ///////////////////////////


  function editRecipe(){
    // $resource call. Does not work because I used http previously
    // vm.recipe.$update(getRecipe);

    $http.put('recipes/'+ $stateParams.id, {name: vm.recipe.name});
     vm.showEditRecipeName = false;
  }

  function startEditRecipeName(){
    vm.showEditRecipeName = !vm.showEditRecipeName;
  }

  function startDeleteIngredient(ingredient_id){
    $http.put('recipes/'+ $stateParams.id + '/destroy_join', {ingredient_id: ingredient_id}).then(function(){
      $http.get('recipes/'+ $stateParams.id).then(function(resp){
        // debugger;
        vm.recipe = resp.data;
      });
    });
    // vm.recipe.$delete({ingredient_id: ingredient_id}).then(function(info){
    //   RecipeFactory.get({ id: $stateParams.id }).$promise.then(function(resp){
    //     vm.recipe = resp;
    //   });
    // });
  }

  function deleteRecipeShow(recipe_id){

    $http.delete('recipes/' + $stateParams.id, {params:{recipe_id: recipe_id}}).then(function(){
      $state.go('home.recipes');
    });
    // vm.recipe.$delete({recipe_id: recipe_id});
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
    // debugger;
    // vm.recipe.ingredients.push(vm.newIngredient);
    debugger;
    $http.put('recipes/'+ $stateParams.id, {ingredients: vm.newIngredient.name}).then(function(resp){
      // debugger;
      $http.get('recipes/'+ $stateParams.id).then(function(resp){
        vm.recipe = resp.data;
        vm.newIngredient = "";
      });
    });
    // vm.recipe.$update(function() {
    //   vm.recipe = RecipeFactory.get({ id: $stateParams.id });
    //   vm.newIngredient = { ingredient: "" };
    // });
  }

///////////// CATEGORYSHOW.HTML AND RECIPE.HTML //////////
function deleteRecipe(recipe_id){
  for(var i=0; i<vm.recipes.length; i++){
      if (vm.recipes[i].id == recipe_id){
        $http.delete('recipes/'+ recipe_id, {params:{recipe_id: recipe_id}}).then(function(){
          $http.get('recipes').then(function(resp){
            vm.recipes = resp.data;
          })
        });
      }
    }
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
  .controller('RecipesController', ['$scope', '$http', '$state', '$stateParams', 'RecipeFactory', 'CategoryFactory', 'RecipesService', 'currentRecipeService', RecipesController]);
