angular
  .module('app')
  .factory("IngredientFactory", ['$resource', IngredientFactory]);

  function IngredientFactory($resource){


    var Ingredient = $resource('/ingredients/:id', {id:'@id'},{
      // query: {method: 'GET', isArray:true},
      // save:   {method:'POST'},
       update: { method: 'PUT'},
       delete: { method: 'DELETE'}
    });
    return Ingredient;
  }
