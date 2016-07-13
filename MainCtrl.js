//put your function calls here

angular
  .module('pApp')
  .controller('displayCtrl', function($scope, fruitSrv) {
    $scope.theFruit = fruitSrv.displayFruit();
  });
