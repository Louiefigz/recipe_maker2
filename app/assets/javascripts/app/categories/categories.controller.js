function CategoriesController($scope, $http, $state, $stateParams, CategoryFactory, RecipeFactory){

  var vm = this;
  // debugger;
  vm.showAlertSuccess = false;
  vm.showAlertFail = false;
  vm.hideAlertFail = hideAlertFail;

  RecipeFactory.query().$promise.then(function(data){
    vm.allRecipes = data;
  });
  vm.hideAlertSuccess = hideAlertSuccess;
  vm.showRecipeCategorySearch = false;

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
  vm.showAllAssociatedRecipes = true;
  vm.showAllRecipesInDatabase = false;
  vm.showDeleteButtonRecipeCategory = false;
  vm.selectCatRecipe = selectCatRecipe;
  vm.browseAllRecipes = browseAllRecipes;
  vm.selectedRecipe = selectedRecipe;
  vm.deleteRecipeCategory = deleteRecipeCategory

  function hideAlertSuccess(){
    vm.showAlertSuccess = false;
  }

  function hideAlertFail(){
    vm.showAlertFail = false;
  }

  function deleteRecipeCategory(recipe_id){
    // debugger;
    vm.category.$delete({recipe_id: recipe_id, category_id: $stateParams.id});
    vm.category = CategoryFactory.get({id: $stateParams.id});
  }

  function selectedRecipe(recipe_id){
    this.category.$update({category_id: $stateParams.id, recipe_id: recipe_id}).then(function(check){
      var alertCheck = check;

      CategoryFactory.get({id: $stateParams.id}).$promise.then(function(data){
        vm.category = data;
          // debugger;
        if(data.recipes.length !== alertCheck.recipes.length){
          vm.showAlertSuccess = true;
          vm.showAlertFail = false;
          vm.success = "";
          vm.success = vm.category.recipes[vm.category.recipes.length-1].name + " was added to " +  vm.category.name;
        } else {
          vm.showAlertFail = true;
          vm.showAlertSuccess = false;
          vm.fail = "";
          vm.fail = vm.category.recipes[vm.category.recipes.length-1].name + " is already in the " + vm.category.name + " category";
        };
      });
    });
  };

  function browseAllRecipes(){
    vm.showRecipeCategorySearch = !vm.showRecipeCategorySearch;
    vm.showAllRecipesInDatabase = !vm.showAllRecipesInDatabase;
    vm.showAllAssociatedRecipes = !vm.showAllAssociatedRecipes;
  };


  function selectCatRecipe(){
    debugger;
    vm.selectedRecipe
  }



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
    vm.showDeleteButtonRecipeCategory = !vm.showDeleteButtonRecipeCategory;
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
