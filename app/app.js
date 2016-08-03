'use strict';

angular.module('modalExercise', [
  'ngRoute',
  'ngTouch',
  'ngAnimate',
  'ui.bootstrap',
  'modalExercise.productList',
  'modalExercise.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/productList'});
}]);
