'use strict';

angular.module('modalExercise.productList', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/productList', {
    templateUrl: 'productList/productList.html',
    controller: 'productList.controller'
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
  },
  {
    id: "3",
    title: "Product Title 3",
    description: "Bla bla Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "http://placehold.it/300x300&text=img_1"
  },
  {
    id: "4",
    title: "Product Title 4",
    description: "Bla bla Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "http://placehold.it/300x300&text=img_1"
  },
  {
    id: "5",
    title: "Product Title 5",
    description: "Bla bla Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "http://placehold.it/300x300&text=img_1"
  },
  {
    id: "6",
    title: "Product Title 6",
    description: "Bla bla Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "http://placehold.it/300x300&text=img_1"
  },
  {
    id: "7",
    title: "Product Title 7",
    description: "Bla bla Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "http://placehold.it/300x300&text=img_1"
  }]
)
.controller('productList.controller', ['$scope', 'products', '$uibModal', '$log', function($scope, products, $uibModal, $log) {
  $scope.products = products;

  $scope.limit = 5;

  var limitStep = 3;
  $scope.incrementLimit = function() {
      $scope.limit += limitStep;
  };

  var product;
  $scope.open = function (product) {
    var modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'productModal.html',
      controller: 'productModal.controller',
      resolve: {
        product: function () {
          return product;
        }
      }
    });
  };

  $scope.toggleAnimation = function () {
    $scope.animationsEnabled = !$scope.animationsEnabled;
  };
}])
.controller('productModal.controller', ['$scope', '$uibModalInstance', 'product', function($scope, $uibModalInstance, product) {

  $scope.product = product;
  $scope.id = product.id;

  $scope.close = function () {
    $uibModalInstance.dismiss('close');
  };
}]);