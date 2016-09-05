function CategoriesController($scope, $http, $state, $stateParams, CategoryFactory, RecipeFactory){

  var vm = this;
  // debugger;

  vm.createRecipeCategory = createRecipeCategory;
  vm.newRecipeCategory = new RecipeFactory();
  CategoryFactory.query().$promise.then(function(data){
    vm.allCategories = data;
    vm.totalItems = data.length;
    vm.currentPage = 1;
    vm.PerPage = 10;
    $scope.$watch('currentPage + itemsPerPage', function() {
      var begin = (($scope.currentPage - 1) * vm.PerPage),
        end = begin + vm.PerPage;
      vm.filteredIngredients = vm.allCategories.slice(begin, end);
    });
  });
  vm.category = CategoryFactory.get({ id: $stateParams.id });
  vm.newCategory = "";
  vm.newCategory = new CategoryFactory();


  vm.createCategory = createCategory;
  vm.startAddCategory = startAddCategory;
  vm.startDeleteButton = startDeleteButton;
  vm.filterCategories = filterCategories;
  vm.startAddRecipe = startAddRecipe;
  vm.deleteCategory = deleteCategory;
  vm.showCreateCategory = false;
  vm.showSearch = true;
  vm.showDeleteButton = false;
  vm.showAddRecipe = false;


  function createRecipeCategory(){
    vm.newRecipeCategory.$save({category_id: $stateParams.id}).then(function(){
      CategoryFactory.get({id: $stateParams.id}).$promise.then(function(data){
        vm.category= data;
      });
    });
    vm.newCategory.name = "";
  }


  function startAddRecipe(){
    vm.showAddRecipe = !vm.showAddRecipe;
  }

  function filterCategories(){
    vm.showCreateCategory = false;
    vm.showSearch = true;
  }


  function startAddCategory(){
    vm.showSearch = false;
    vm.showCreateCategory = true;
  }


  function startDeleteButton(){
    vm.showDeleteButton = !vm.showDeleteButton;
  }

  function createCategory(){
    vm.newCategory.$save(function (){
      vm.allCategories= CategoryFactory.query();
      vm.newCategory.name = "";
    });
  }

  function deleteCategory(category_id){
    for(var i=0; i< vm.allCategories.length; i++){

      if(vm.allCategories[i].id == category_id){
        vm.allCategories[i].$delete({category_id: category_id})
      }
    }
    vm.allCategories = CategoryFactory.query();
  };

};

angular
  .module('app')
  .controller("CategoriesController", ['$scope', '$http', '$state', '$stateParams', 'CategoryFactory', 'RecipeFactory', CategoriesController]);
