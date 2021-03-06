angular
  .module('app')
  .service("currentRecipeService", [currentRecipeService]);

  function currentRecipeService(){
    var currentRecipe = {};

    var setRecipe = function(recipe){
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
