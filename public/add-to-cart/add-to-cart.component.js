'use strict';

angular.
  module('addToCart').
  component('addToCart', {
    templateUrl: 'add-to-cart/add-to-cart.template.html',
    controller: ['$routeParams', 'Chuck',
    function AddToCartController($routeParams, Chuck){
      var self = this;
      self.chid= $routeParams.chuckId

     }
    ]
  })
