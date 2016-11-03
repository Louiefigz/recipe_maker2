angular
  .module('app', ['ngSanitize', 'ui.router', 'templates', 'ngResource', 'ui.bootstrap'])
  .config(['$stateProvider', '$urlRouterProvider',function($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl:'home.html',
        controller: 'HomeController as vm',
        resolve: {
          recipeShowObject: function () {
            return {};
          }
        }
      })
      .state('home.ingredients', {
        url: 'ingredients',
        templateUrl: 'ingredients.html',
        controller: 'IngredientsController as vm',
        resolve: {
						recipeShowObject: function () {
							return {};
						}
          }
      })
      .state('home.recipes', {
        url: 'recipes',
        templateUrl: 'recipes.html',
        controller: 'RecipesController as vm',
        resolve: {
						recipeShowObject: function () {
							return {};
						}
          }
      })
      .state('home.welcome', {
        url: 'welcome',
        templateUrl: 'welcome.html',
        controller: 'RecipesController as vm',
        resolve: {
						recipeShowObject: function () {
							return {};
						}
          }
      })
      .state('home.recipeShow', {
        url: 'recipes/:id',
        templateUrl: 'recipeShow.html',
        controller: 'RecipesController as vm',
        resolve: {
          recipeShowObject: function($http, $stateParams){
            return $http.get('recipes/'+ $stateParams.id);
          }
        },
      })
      .state('home.categories', {
        url: 'categories',
        templateUrl: 'categoriesHome.html',
        controller: 'CategoriesController as vm',
        resolve: {
						recipeShowObject: function () {
							return {};
						}
          }
      })
      .state('home.categoryShow', {
        url: 'categories/:id',
        templateUrl: 'categoryShow.html',
        controller: 'CategoriesController as vm',
        resolve: {
						recipeShowObject: function () {
							return {};
						}
          }
      });




    $urlRouterProvider.otherwise('/welcome');



  }]);
