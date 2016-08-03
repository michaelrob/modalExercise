'use strict';

angular.module('modalExercise.taskList', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/taskList', {
    templateUrl: 'taskList/taskList.html',
    controller: 'taskList.controller'
  });
}])
.constant('products',
  [{
    id: "1",
    title: "Product Title 1",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "http://placehold.it/300x300&text=img_1"
  },
  {
    id: "2",
    title: "Product Title 2",
    description: "Bla bla Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "http://placehold.it/300x300&text=img_1"
  }]
)
.controller('taskList.controller', ['$scope', 'products', function($scope, products) {
  $scope.products = products;
}]);
