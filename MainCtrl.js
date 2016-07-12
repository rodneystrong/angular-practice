angular
  .module('myApp')
  .controller('myCtrl', function($scope, groceryService) {

    //the groceries name here is arbitrary. it's like
    //attaching a property to the $scope
    $scope.groceries = groceryService.getGroceries();
    console.log($scope.groceries);

    $scope.hello = "hellooo";

    $scope.addGroceries = function(newItem) {

    //groceryService.addItem();

      console.log(newItem);
    };

  });


//heavily connected to view (HTML) trough $scope.
