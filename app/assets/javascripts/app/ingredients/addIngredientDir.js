angular
  .module('app')
  .directive('addIngredientForm', function(){
    return{
      controller:'IngredientsController as vm',
      templateUrl: 'addIngredientForm.html'
    }
  });
