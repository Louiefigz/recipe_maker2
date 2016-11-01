function CategoriesController($scope, $http, $state, $stateParams, CategoryFactory, RecipeFactory, catAlertService){

  var vm = this;



  vm.showAlertSuccess = false;
  vm.showAlertFail = false;
  vm.hideAlertFail = hideAlertFail;
  vm.hideAlertSuccess = hideAlertSuccess;


//-------------------------------------------//

  ////// START OF CategoryHome.html TEMPLATE FUNCTIONS ///////

  vm.startAddCategory = startAddCategory;
  vm.filterCategories = filterCategories;
  vm.deleteCategory = deleteCategory;
  vm.createCategory = createCategory;
  vm.newCategory = "";
  vm.newCategory = new CategoryFactory();

  vm.showCreateCategory = false;
  vm.showSearch = true;
  vm.showDeleteButton = false;

/////END OF CATEGORY.HTML TEMPLATE FUNCTIONS ///////


//-------------------------------------------//

//***** FUNCTIONS USED IN CATEGORYSHOW AND CategoryHome *********//
vm.showDeleteButtonRecipeCategory = false;
vm.startDeleteButton = startDeleteButton;
vm.startAddRecipe = startAddRecipe;




//*****END OF FUNCTIONS USED IN CATEGORYSHOW AND CategoryHome **********//

//-------------------------------------------//


////////START CATEGORYSHOW.HTML TEMPLATE
vm.showEditCategoryName = false;
vm.editCategoryName = editCategoryName;
vm.showRecipeCategorySearch = false;
vm.showAllAssociatedRecipesSearch = true;
vm.showAddRecipe = false;
vm.createRecipeCategory = createRecipeCategory;
vm.showAllAssociatedRecipes = true;

vm.deleteRecipeCategory = deleteRecipeCategory
vm.startCategoryShowPage = startCategoryShowPage;
vm.browseAllRecipes = browseAllRecipes;
// vm.startEditCategoryName = startEditCategoryName;
vm.showAllRecipesInDatabase = false;

vm.selectCatRecipe = selectCatRecipe;
vm.selectedRecipe = selectedRecipe;
vm.category = CategoryFactory.get({ id: $stateParams.id });
// vm.newRecipeCategory = new RecipeFactory();

$http.get('recipes').then(function(resp){
  vm.allRecipes = resp.data;
});


// RecipeFactory.query().$promise.then(function(data){
//   vm.allRecipes = data;
// });

// PAGINATION FOR THE CATEGORIES SHOW PAGE
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


///////END OF CATEGORYSHOW.HTML TEMPLATE


//-------------------------------------------//

  // ++++++++++++++++++++  LOGIC FUNCTIONS  +++++++++++++++++++++++++++++//


///////////// CATEGORYSHOW.HTML AND CATEGORYHOME.HTML FUNCTIONS ////////////////
  function startAddRecipe(){
    vm.showAddRecipe = true;
    vm.showAllAssociatedRecipesSearch = false;
    vm.showAllAssociatedRecipes = true;
    vm.showRecipeCategorySearch = false;
    vm.showAllRecipesInDatabase = false;
    vm.showEditCategoryName = false;

  }

  function startDeleteButton(){
    vm.showDeleteButtonRecipeCategory = !vm.showDeleteButtonRecipeCategory;
    vm.showDeleteButton = !vm.showDeleteButton;
  }

//////////////// END OF CATEGORYSHOW.HTML AND CATEGORYHOME.HTML FUNCTIONS ///////////////

/////////////////// CATEGORYSHOW.HTML /////////////////////////////////

  function startEditCategoryName(){
    vm.showEditCategoryName = true;
    vm.showAddRecipe = false;
    vm.showAllAssociatedRecipesSearch = false;
    vm.showRecipeCategorySearch = false;
    vm.showAllRecipesInDatabase = false;
    vm.showAllAssociatedRecipes = false;

  }


// Function not currently working
  function editCategoryName(){
    // $http.put("categories/"+ $stateParams.id)
    vm.category.$update(getCategory);
    vm.showEditCategoryName = false;
    vm.showAddRecipe = false;
    vm.showAllAssociatedRecipesSearch = true;
    vm.showRecipeCategorySearch = false;
    vm.showAllRecipesInDatabase = false;
    vm.showAllAssociatedRecipes = true;
  }

  function getCategory(){
    vm.category = CategoryFactory.get({id: $stateParams.id})
  }

  // Function above not currently working //

  function createRecipeCategory(){
    $http.post('recipes/', {recipe: {name: vm.newRecipeCategory.name, category_id: $stateParams.id}}).then(function(resp){
      $http.get('categories/'+ $stateParams.id).then(function(resp){
        vm.category = resp.data;
      });
    });
    vm.newRecipeCategory.name = "";

    // vm.newRecipeCategory.$save({category_id: $stateParams.id}).then(function(){
    //   CategoryFactory.get({id: $stateParams.id}).$promise.then(function(data){
    //     vm.category= data;
    //   });
    // });
    // vm.newCategory.name = "";
  }


///// HTTP TEST /////
  // function deleteRecipeCategory(recipe_id){
  //   vm.category.$delete({recipe_id: recipe_id, category_id: $stateParams.id}).then(function(){
  //     vm.category = CategoryFactory.get({id: $stateParams.id});
  //   })
  // }

  function deleteRecipeCategory(recipe_id){
    $http.delete("categories/" + recipe_id, {params: {recipe_id: recipe_id, category_id: $stateParams.id}}).then(function(){
        vm.category = CategoryFactory.get({id: $stateParams.id})
      });
  }
//// HTTP TEST //////
  function startCategoryShowPage(){
    vm.showAddRecipe = false;
    vm.showAllAssociatedRecipes = true;
    vm.showAllAssociatedRecipesSearch = true;
    vm.showRecipeCategorySearch = false;
    vm.showAllRecipesInDatabase = false;
    vm.showEditCategoryName = false;
  };

  function browseAllRecipes(){

    vm.showAddRecipe = false;
    vm.showAllAssociatedRecipesSearch = false;
    vm.showRecipeCategorySearch = true;
    vm.showAllRecipesInDatabase = true;
    vm.showAllAssociatedRecipes = false;
    vm.showEditCategoryName = false;
  };

  function selectCatRecipe(){
    debugger;
    vm.selectedRecipe
  }


  function selectedRecipe(recipe_id){

    // var firstlength= $('li[class^="list-group-item"]').length;
    //   $http.put("categories/" + $stateParams.id, {category_id: $stateParams.id, recipe_id: recipe_id})
    //        .then(function(response){
    //          console.log("A");
    //          console.log(response);
    //          //debugger;
    //         //  firstlength.push(response.data.recipes.length);
    //       });
    //        $http.get('categories/'+ $stateParams.id)
    //             .then(function(category){
    //               console.log("B");
    //               debugger;
    //        })
    var firstLength= vm.category.recipes.length;
    vm.category.$update({category_id: $stateParams.id, recipe_id: recipe_id})
                .then(function(response){
                  CategoryFactory.get({id: $stateParams.id}).$promise.then(function(category) {
                    if(category.recipes.length > firstLength){
                      vm.showAlertSuccess = true;
                      vm.showAlertFail = false;
                      var recipe = category.recipes[category.recipes.length -1].name;
                      catAlertService.setSuccess(category.name, recipe);
                      vm.success ="";
                      vm.success = catAlertService.getSuccess();

                    }else{
                      vm.showAlertFail = true;
                      vm.showAlertSuccess = false;
                      vm.fail = "";
                      vm.fail = "This Recipe is already in the " + vm.category.name + " category";
                    };
                  });
                })
                // .catch(function(error) {
                //   console.log('the error is ', error)
                // })
  };



//////////////////////// END OF CATEGORYSHOW.HTML ////////////////////////////


/////////////////////////  CATEGORYHOME.HTML //////////////////////////////////
function startAddCategory(){
  vm.showSearch = false;
  vm.showCreateCategory = true;
}


  function filterCategories(){
    vm.showCreateCategory = false;
    vm.showSearch = true;
  }


  function createCategory(){

    $http.post('categories', {name: vm.newCategory.name}).then(function(){
      $http.get('categories').then(function(response){
        vm.allCategories = response.data;
        vm.newCategory.name = "";
      });
    });
    ////////   $resource   //////////
    // vm.newCategory.$save(function (){
    //   vm.allCategories= CategoryFactory.query();
    //   vm.newCategory.name = "";
    // });
  }

  function deleteCategory(category_id){
    for(var i=0; i< vm.allCategories.length; i++){
      if(vm.allCategories[i].id === category_id){
        $http.delete('categories/'+ category_id, {params:{category_id: category_id}}).then(function(resp){
           $http.get('categories').then(function(response){
            vm.allCategories = response.data;
          });
        });

        // vm.allCategories[i].$delete({category_id: category_id}).then(function(){
        //   vm.allCategories = CategoryFactory.query();
        // });
      }
    }
  };

//////////////////////// END OF CATEGORYHOME.HTML  ////////////////////////////

///////////////////////// RECIPE SHOW DIRECTIVE /////// //////////////////
  function hideAlertSuccess(){
    vm.showAlertSuccess = false;
  }

  function hideAlertFail(){
    vm.showAlertFail = false;
  }

  ///////////////////////// RECIPE SHOW DIRECTIVE /////// //////////////////

};
//+++++++++++++++++++++++ END OF LOGIC FUNCTIONS ++++++++++++++++++++++++++//




angular
  .module('app')
  .controller("CategoriesController", ['$scope', '$http', '$state', '$stateParams', 'CategoryFactory', 'RecipeFactory', 'catAlertService',  CategoriesController]);
