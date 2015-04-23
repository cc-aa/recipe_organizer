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

        $scope.addIngredientToRecipe = function(ingredientName) {
            if(ingredientName != null){
                var ingredient = {name:ingredientName};
                $scope.recipe.ingredients.push(ingredient);
                $scope.ingredientName = null;
            }
        };

        $scope.removeIngredientFromRecipe = function(ingredient) {
            var index = $scope.recipe.ingredients.indexOf(ingredient);
            if(index != -1) {
                $scope.recipe.ingredients.splice(index, 1);
            }
        };



        $scope.saveEditedRecipe = function() {
            $scope.recipe.photo=null;
            Restangular.one('recipes', $scope.recipeId).customPUT($scope.recipe).then(function(){
                alert("Your recipe was successfully saved!");
                $scope.editing = false;

                //$location.path('/recipes') // if you want to redirect to some url after
            },
            function(){
                alert("No Can Do. Don't know enough to tell you what went wrong.");
            });


        };

}]);