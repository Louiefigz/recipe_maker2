(function(){
function RecipesService($http, $q){
  return{
    getRecipe: getRecipe,
    createNewRecipe: createNewRecipe
  };

    function getRecipe(state){
      var request = $http.get('recipes/'+ state);
             return request.then(handleSuccess);
     }


     function createNewRecipe(name){
      //  debugger;
       return $http.post('recipes', {name: name});
                    // .then(function(response) {
                    //   console.log(response)
                    // })
                    // .catch(function(err) {
                    //   console.log(err)
                    // })

     }

    function handleSuccess(response){
      // debugger;
      return (response.data);

    }



}
angular
  .module('app')
  .factory("RecipesService", ['$http','$q',  RecipesService]);

}());
