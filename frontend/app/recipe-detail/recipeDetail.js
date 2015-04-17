'use strict';

angular.module('myApp.recipeDetail', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/recipes/:recipeId', {
    templateUrl: 'recipe-detail/recipe-detail.html',
    controller: 'RecipeDetailCtrl'
  });
}])

.controller('RecipeDetailCtrl', ['$scope', '$routeParams','$location','Restangular',
        function ($scope, $routeParams, $location, Restangular) {

            $scope.recipeId = $routeParams.recipeId;
            $scope.editing = false;

        Restangular.one('recipes', $scope.recipeId).customGET().then(function(recipe) {
            $scope.recipe = recipe;

        });

        $scope.deleteRecipe = function() {
            var confirmation = confirm ("Are you sure you want to delete? This can not be undone.");
            if (confirmation){
            Restangular.one('recipes', $scope.recipeId).customDELETE().then(function(){
                alert("Your recipe was successfully deleted!");
                $location.path('/recipes')
            },
            function(){
                alert("No Can Do. Don't know enough to tell you what went wrong.")
            });
            }

        };

        //
        // $scope.editRecipe = function() {
        //    var confirmation = confirm ("Are you sure you want to delete? This can not be undone.");
        //    if (confirmation){
        //    Restangular.one('recipes', $scope.recipeId).customDELETE().then(function(){
        //        alert("Your recipe was successfully deleted!");
        //        $location.path('/recipes')
        //    },
        //    function(){
        //        alert("No Can Do. Don't know enough to tell you what went wrong.")
        //    });
        //    }
        //
        //};
        //
        //
        //
}]);