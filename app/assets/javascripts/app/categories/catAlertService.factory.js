angular
  .module('app')
  .service("catAlertService", [catAlertService]);

  function catAlertService(){
    var currentRecipe = "";

    var setSuccess = function(category, recipe){
      // debugger;
      currentRecipe = recipe + " was added to " + category;
      // vm.category.recipes[vm.category.recipes.length-1].name + " was added to " +  vm.category.name;
    };

    var getSuccess = function(){
      return currentRecipe;
    }



    return {
      setSuccess: setSuccess,
      getSuccess: getSuccess

    }
  }
