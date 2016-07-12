angular
  .module('myApp')
  .service('groceryService', function() {
    var data = [
      {
        name: 'banana',
        qty: 4,
        price: 3
      },
      {
        name: 'apple',
        qty: 2,
        price: 10
      }
    ];
    this.getGroceries = function() {
      return data;
    }
  })
