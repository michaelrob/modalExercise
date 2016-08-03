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
    key: "id",
    value: "1",
    key: "title",
    value: "Product Title 1",
    key: "description",
    value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "http://placehold.it/300x300&text=img_1"
  },
  {
    key: "id",
    value: "2",
    key: "title",
    value: "Product Title 2",
    key: "description",
    value: "Bla bla Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "http://placehold.it/300x300&text=img_1" 
  }]
)
.controller('taskList.controller', ['$scope', 'products', function($scope, products) {

}]);
