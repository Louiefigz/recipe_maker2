angular
  .module('app')
  .factory("Recipe", Recipe);

  function Recipe($resource){

    var Recipe =[];
    Recipe = $resource('/recipes/:id', {id:'@id'},{
      query: {method: 'GET', isArray:true},
      save:   {method:'POST'},
       update: { method: 'PUT'},
       delete: { method: 'DELETE'}
    });
    return Recipe;
  }
