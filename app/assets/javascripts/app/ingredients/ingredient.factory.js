angular
  .module('app')
  .factory("Ingredient", Ingredient);

  function Ingredient($resource){

    var Ingredient =[];
    Ingredient = $resource('/ingredients/:id', {id:'@id'},{
      query: {method: 'GET', isArray:true},
       update: { method: 'PUT'},
       delete: { method: 'DELETE'}
    });
    return Ingredient;
  }
