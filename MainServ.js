angular
  .module('myApp')
  .service('groceryService', function() {
    var data = [
      {
        name: 'banana',
        qty: 4,
        price: 3
      }
    ];
    this.getGroceries = function() {
      return data;
    }
  })
