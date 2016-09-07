angular
  .module('app')
  .factory("CategoryFactory", ['$resource', CategoryFactory]);

  function CategoryFactory($resource){

    var Category = $resource ('/categories/:id', {id:'@id'},{
        // query: {method: 'GET', isArray:true},
        // save:   {method:'POST'},
       update: { method: 'PUT'},
       delete: { method: 'DELETE'}
    });

    return Category;
  }
