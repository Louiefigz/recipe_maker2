(function(){



function RecipesService($http, $q){
  return{
    getRecipe: getRecipe
  };

    function getRecipe(state){


      var request = $http.get('recipes/'+ state);

      // var request = $http({
      //              method: "get",
      //              url: 'recipes/'+ state,
      //              params: {
      //                  action: "get"
      //              }
      //          });
              //  debugger;
               return request.then(handleSuccess);
           }


    function handleSuccess(response){
      // debugger;
      return (response.data);

    }


    // this.getRecipes = function(){
    // $http.get('recipes/'+ $stateParams.id).then(function(response){
    //   // debugger;
    //     return  vm.recipe = response.data;
    //     });
    // };


}
angular
  .module('app')
  .factory("RecipesService", ['$http','$q',  RecipesService]);

}());
