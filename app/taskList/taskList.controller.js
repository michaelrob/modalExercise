'use strict';

angular.module('modalExercise.taskList', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/taskList', {
    templateUrl: 'taskList/taskList.html',
    controller: 'taskList.controller'
  });
}])

.controller('taskList.controller', [function() {

}]);
