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
  // vm.deleteRecipeIngredient = deleteRecipeIngredient;

  vm.newIngredient = { ingredient: "" };
  vm.recipes = RecipeFactory.query();
  vm.newRecipe = new RecipeFactory();
  vm.updateRecipe = updateRecipe;
  vm.recipe = RecipeFactory.get({ id: $stateParams.id })

  vm.recipe_show = recipe_show;


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



var state = $state.params.id;
  //this function is not 'working' but it pushes info to the hash vm.recipes correctly
  this.newRecipeIngredient = function(){
    console.log("This is meeee");
      // vm.recipe.$update
      debugger;
      vm.addRecipeIngredient.$update;

    }

  function recipe_show(data){
    vm.current_recipe = this.recipes[data-1];
    vm.title = 'Ingredients for '+ vm.current_recipe.name;
    // debugger;
    this.url = '<a href="/#/recipes/'+data+'"  >'+"click here to edit recipe" +'</a>'
  }



  function addNewRecipe(){
    console.log("I am being clicked")
    vm.newRecipe.$save(function() {
      vm.recipes = RecipeFactory.query();
    })
  }


  function updateRecipe(){

    vm.recipe.ingredients.push(vm.newIngredient);
    console.log(vm.recipe);
    vm.recipe.$update(function() {
      RecipeFactory.get({ id: $stateParams.id }).$promise.then(function(resp){
        var vm = this;
      vm.recipe = resp;
    })
  });
  vm.recipe
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
