angular
  .module('app')
  .factory("RecipeFactory", RecipeFactory);

  function RecipeFactory($resource){

    var RecipeFactory =[];
    RecipeFactory = $resource('/recipes/:id', {id:'@id'},{
        query: {method: 'GET', isArray:true},
        save:   {method:'POST'},
       update: { method: 'PUT'},
       delete: { method: 'DELETE'}
    });
    return RecipeFactory;
  }
