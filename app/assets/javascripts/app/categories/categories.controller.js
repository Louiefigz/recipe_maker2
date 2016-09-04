function CategoriesController($scope, $http, $state, $stateParams, CategoryFactory){

  var vm = this;
  // debugger;

  CategoryFactory.query().$promise.then(function(data){
    vm.allCategories = data;
  });

  vm.category = CategoryFactory.get({ id: $stateParams.id })

};

angular
  .module('app')
  .controller("CategoriesController", ['$scope', '$http', '$state', '$stateParams', 'CategoryFactory', CategoriesController]);
