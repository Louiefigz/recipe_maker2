function CategoriesController($scope, $http, $state, $stateParams, CategoryFactory){

  var vm = this;
  debugger;

  CategoryFactory.query().$promise.then(function(data){
    debugger;
    vm.allCategories = data;

  })

};

angular
  .module('app')
  .controller("CategoriesController", ['$scope', '$http', '$state', '$stateParams', 'CategoryFactory', CategoriesController]);
