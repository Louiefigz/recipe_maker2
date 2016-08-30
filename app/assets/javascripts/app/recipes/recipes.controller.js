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


  vm.newIngredient = { ingredient: "" };
  vm.recipes = RecipeFactory.query();
  vm.newRecipe = new RecipeFactory();
  vm.updateRecipe = updateRecipe;
  vm.recipe = RecipeFactory.get({ id: $stateParams.id })

  vm.recipe_show = recipe_show;

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
      vm.recipe = RecipeFactory.get({ id: $stateParams.id })
  }

  function recipe_show(data){

    for(var i=0; i< this.recipes.length; i++){
      if(this.recipes[i].id == data){

        vm.current_recipe = this.recipes[i];
        vm.title = 'Ingredients for '+ vm.current_recipe.name;
        vm.url = '<a href="/#/recipes/'+data+'"  >'+"click here to edit recipe" +'</a>'
      }
    }
  }

  function recipe_link(data){
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
    })
  }

  function deleteRecipe(recipe_id){

    for(var i=0; i<this.recipes.length; i++){
      if (this.recipes[i].id == recipe_id){
        this.recipes[i].$delete({recipe_id: recipe_id})
      }
    }
    vm.recipes = RecipeFactory.query();
    // vm.recipe.$delete({recipe_id: recipe_id});
    //   // vm.recipe = RecipeFactory.get({ id: $stateParams.id })
  }

  function deleteRecipeIngredient(){

  }


};

angular
  .module('app')
  .controller('RecipesController', ['$scope', '$http', '$state', '$stateParams', 'RecipeFactory', RecipesController]);
