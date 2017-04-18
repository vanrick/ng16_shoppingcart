'use strict';

angular.
  module('addToCart').
  component('addToCart', {
    templateUrl: 'add-to-cart/add-to-cart.template.html',
    controller: ['$routeParams', 'Chuck', 'close',
    function AddToCartController($routeParams, Chuck, close){
      var self = this;

      self.dismissModal = function(result) {
      close(result, 500); // close, but give 200ms for bootstrap to animate
      };

     }
    ]
  })
