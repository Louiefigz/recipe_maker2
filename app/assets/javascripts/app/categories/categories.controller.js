function CategoriesController($scope, $http, $state, $stateParams, CategoryFactory){

  var vm = this;
  // debugger;

  CategoryFactory.query().$promise.then(function(data){
    vm.allCategories = data;
  });
  vm.category = CategoryFactory.get({ id: $stateParams.id });
  vm.newCategory = new CategoryFactory();
  vm.createCategory = createCategory;
  vm.startAddCategory = startAddCategory;
  vm.startDeleteButton = startDeleteButton;
  vm.filterCategories = filterCategories;
  vm.showCreateCategory = false;
  vm.showSearch = true;
  vm.showDeleteButton = false;

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
    });
    vm.newCategory = "";
  }

};

angular
  .module('app')
  .controller("CategoriesController", ['$scope', '$http', '$state', '$stateParams', 'CategoryFactory', CategoriesController]);
