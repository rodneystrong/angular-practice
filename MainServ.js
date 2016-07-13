//put your function definitions here
//put your data/vars here too

angular
  .module('myApp')
  .service('fruitSrv', function() {
    var fruit = [
      {
        name: 'banana',
        qty: 6
      },
      {
        name: 'apple',
        qty: 2
      }
    ];
  });
