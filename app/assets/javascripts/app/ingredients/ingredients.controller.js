function IngredientsController($scope, $http, $state, $stateParams, IngredientFactory){

  var vm = this;

  // vm.makePage = makePage;

   IngredientFactory.query().$promise.then(function(data){
     vm.allIngredients= data;
    //  vm.totalPages = Math.ceil(vm.allIngredients.length/5.0);
    vm.totalItems = data.length;
    vm.currentPage = 1;
    vm.PerPage = 10;
    $scope.$watch('currentPage + itemsPerPage', function() {
      var begin = (($scope.currentPage - 1) * vm.PerPage),
        end = begin + vm.PerPage;
      vm.filteredIngredients = vm.allIngredients.slice(begin, end);
    });
    // vm.makePage();
  });


  vm.createIngredient = createIngredient;
  vm.newIngredient = new IngredientFactory();
  vm.deleteIngredient = deleteIngredient;
  vm.startDeleteButton = startDeleteButton;
  vm.startAddIngredient = startAddIngredient;
  vm.filterIngredients = filterIngredients;




  vm.showDeleteButton = false;
  vm.showSearch = true;
  vm.showAddIngredient = false;
  vm.searchButton = true;
  vm.addIngredientButton = false;


function startAddIngredient(){
  vm.showAddIngredient = true;
  vm.searchKey ="";
  vm.showSearch = false;
}

function filterIngredients(){

  vm.showAddIngredient = false;
    vm.showSearch = true;
}

//Form for creating new ingredients
  function createIngredient(){

    vm.newIngredient.$save(function(){
      vm.allIngredients = IngredientFactory.query();
      vm.newIngredient.name ="";
    });
  }

  function deleteIngredient(ingredient_id){
    for(var i=0; i< vm.allIngredients.length; i++){

      if(vm.allIngredients[i].id == ingredient_id){
        vm.allIngredients[i].$delete({ingredient_id: ingredient_id});
      }
    }
    vm.allIngredients = IngredientFactory.query();
  }

  function startDeleteButton(){
    vm.showDeleteButton = !vm.showDeleteButton;
  }


//
//
//     vm.pgNumber = 0;
//
// function makePage(){
//         // debugger;
//         // vm.totPages = ;
//           var start=vm.pgNumber*5
//           var selection= start + 5
//           vm.thisPage = vm.allIngredients.slice(start, selection)
//     }
//
//
//     vm.nextPage = function(){
//       vm.pgNumber ++
//       vm.makePage()
//     }
//
//     vm.prevPage = function(){
//       vm.pgNumber --
//       vm.makePage()
//     }
//
//     $scope.$watch(function (){
//         return vm.pgNumber
//     });



}

angular
  .module('app')
  .controller('IngredientsController', ['$scope', '$http', '$state', '$stateParams', 'IngredientFactory', IngredientsController]);
