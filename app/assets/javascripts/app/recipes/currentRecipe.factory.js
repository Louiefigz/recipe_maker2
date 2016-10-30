angular
  .module('app')
  .service("currentRecipeService", [currentRecipeService]);

  function currentRecipeService(){
    var currentRecipe = {};

    var setRecipe = function(recipe){
      debugger;
      currentRecipe = recipe;
    };

    var getRecipe  = function(){
      return currentRecipe;
    }

    return {
      setRecipe: setRecipe,
      getRecipe: getRecipe
    }
  }
