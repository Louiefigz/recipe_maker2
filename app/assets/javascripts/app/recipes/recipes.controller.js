function RecipesController($scope, $state, $stateParams){
var vm = this;

  vm.addRecipe = addRecipe;
  vm.startEditRecipe = startEditRecipe;
  vm.startEditRecipeName = startEditRecipeName;
  vm.startDeleteIngredient = startDeleteIngredient;
  vm.showEditRecipeForm = false;
  vm.showEditRecipeName = false;
  vm.showEditRecipeName = false;
  vm.editRecipe = editRecipe;
  vm.deleteRecipe =  deleteRecipe;

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




  vm.recipes =[
    {
      id: 1,
      name: 'pad thai',
      ingredients: [
      {
        id: 1,
        ingredient: "peanuts"
      },
      {
        id: 2,
        ingredient: "noodles"
      },
      {
        id: 3,
        ingredient: "chicken"
      }
      ]
    },
    {
      id:2,
      name: 'lemon chicken',
      ingredients: [
      {
        id: 1,
        ingredient: "chicken"
      },
      {
        id: 2,
        ingredient: "lemon"
      },
      {
        id: 3,
        ingredient: "garlic"
      }
      ]
    },
    {
      id:3,
      name: 'meatloaf'
    },
    {
      id:4,
      name: 'Penne al a vodka'
    }

  ]



  if ($stateParams.current.url == "recipe/:id"){
      vm.recipe = vm.recipes[$stateParams.params.id-1];
  }



var state = $stateParams.params.id;
  //this function is not 'working' but it pushes info to the hash vm.recipes correctly
  this.newIngredient = function(){

    // var id = window.location.pathname.split('/')[window.location.pathname.split('/').length - 1];
    this.recipes[state-1].ingredients.push(this.Recipe.ingredients);
      vm.recipe = this.recipes[$stateParams.params.id-1];
      

  }
  this.recipeShow = function(data){
    vm.recipe = this.recipes[data-1];
    vm.title = 'Ingredients for '+ vm.recipe.name;
    debugger;
    this.url = '<a ng-click="this.thisRecipePage()" href="/#/recipe/'+data+'"  >'+"click here to edit recipe" +'</a>'
  }



  function addRecipe(){
    this.recipes.push(this.newRecipe);
  }

  function editRecipe(){

  }

  function deleteRecipe(){


  }


};

angular
  .module('app')
  .controller('RecipesController', ['$scope', '$http', '$state', '$stateParams', RecipesController]);
