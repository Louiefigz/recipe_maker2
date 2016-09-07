angular
  .module('app', ['ngSanitize', 'ui.router', 'templates', 'ngResource', 'ui.bootstrap'])
  .config(['$stateProvider', '$urlRouterProvider',function($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl:'home.html',
        controller: 'HomeController as vm'
      })
      .state('home.ingredients', {
        url: 'ingredients',
        templateUrl: 'ingredients.html',
        controller: 'IngredientsController as vm'
      })
      .state('home.recipes', {
        url: 'recipes',
        templateUrl: 'recipes.html',
        controller: 'RecipesController as vm'
      })
      .state('home.welcome', {
        url: 'welcome',
        templateUrl: 'welcome.html',
        controller: 'RecipesController as vm'
      })
      .state('home.recipeShow', {
        url: 'recipes/:id',
        templateUrl: 'recipeShow.html',
        controller: 'RecipesController as vm'
      })
      .state('home.categories', {
        url: 'categories',
        templateUrl: 'categoriesHome.html',
        controller: 'CategoriesController as vm'
      })
      .state('home.categoryShow', {
        url: 'categories/:id',
        templateUrl: 'categoryShow.html',
        controller: 'CategoriesController as vm'
      });




    $urlRouterProvider.otherwise('/welcome');



  }]);
