'use strict';

angular.
  module('addToCart').
  component('addToCart', {
    templateUrl: 'add-to-cart/add-to-cart.template.html',
    controller: ['$routeParams', 'Chuck', 'CartFactory', '$window',
    function AddToCartController($routeParams, Chuck, CartFactory, $window){
      var self = this;
      self.inventory = CartFactory.inventory
      console.log('addToCart Controller: ',CartFactory.inventory);

      CartFactory.grandTotalFunction()
      self.grandTot = function(){
        CartFactory.grandTotalFunction()
      }
      self.multiply = function(shoe, qty){
        CartFactory.updateQuantity(shoe, qty)
      }

      self.delete = function(shoe){
        CartFactory.delete(shoe)
      }

      self.grandTotal = CartFactory.grandTotal

      self.refresh = function(){
        $window.location.reload();
      }

     }
    ]
  })
