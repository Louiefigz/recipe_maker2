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

  vm.newIngredient = { ingredient: "" }
  vm.recipes = RecipeFactory.query();
  vm.newRecipe = new RecipeFactory();
  vm.updateRecipe = updateRecipe;
  vm.recipe = RecipeFactory.get({ id: $stateParams.id })



  function startEditRecipe(){
    vm.showEditRecipeForm = !vm.showEditRecipeForm;
  }

  function startEditRecipeName(){
    vm.showEditRecipeName = !vm.showEditRecipeName;
  }

  function startDeleteIngredient(data){
    var id = window.location.hash.split('/')[window.location.hash.split('/').length - 1];
    var ing = this.recipes[id-1];


    for(var i=0; i <ing.ingredients.length; i++){
      if (ing.ingredients[i].id == data ){

        delete ing.ingredients.splice(i, 1);
      }
    }
  }
  // 
  // if ($state.current.url == "recipe/:id"){
  //
  //     vm.recipe = vm.recipes[parseInt($state.params.id)];
  // }



var state = $state.params.id;
  //this function is not 'working' but it pushes info to the hash vm.recipes correctly
  this.newRecipeIngredient = function(){
    console.log("This is meeee");
      // vm.recipe.$update
      debugger;
      vm.addRecipeIngredient.$update;

    }

  this.recipeShow = function(data){
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
      debugger;
    vm.recipe = RecipeFactory.get({ id: $stateParams.id })
  });

  }

  function deleteRecipe(){
    recipe.$delete
    recipe.$update

  }


};

angular
  .module('app')
  .controller('RecipesController', ['$scope', '$http', '$state', '$stateParams', 'RecipeFactory', RecipesController]);
