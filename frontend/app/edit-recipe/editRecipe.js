'use strict';

angular.module('myApp.editRecipe', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/edit-recipe', {
    templateUrl: 'edit-recipe/edit-recipe.html',
    controller: 'EditRecipeCtrl'
  });
}])

.controller('EditRecipeCtrl', ['$scope' , 'Restangular' , function($scope, Restangular){
        $scope.editRecipe = function() {
            Restangular.all()


        }

}]);