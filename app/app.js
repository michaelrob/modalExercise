'use strict';

angular.module('modalExercise', [
  'ngRoute',
  'modalExercise.taskList',
  'modalExercise.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/taskList'});
}]);
