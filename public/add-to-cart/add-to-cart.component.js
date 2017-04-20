'use strict';

angular.
  module('addToCart').
  component('addToCart', {
    templateUrl: 'add-to-cart/add-to-cart.template.html',
    controller: ['$routeParams', '$scope', 'Chuck', 'CartFactory', '$window',
    function AddToCartController($routeParams, $scope, Chuck, CartFactory, $window){
      var self = this;
      self.inventory = CartFactory.inventory
      console.log('addToCart Controller: ',CartFactory.inventory);

      self.multiply = function(shoe, qty){
        CartFactory.updateQuantity(shoe, qty)
      }

      self.delete = function(shoe){
        CartFactory.delete(shoe)
      }
      self.refresh = function(){
        $window.location.reload();
      }
      self.getTotal = function(){
        let totArray = CartFactory.inventory
        let total = 0
        for (var i = 0; i < totArray.length; i++) {
          total += (totArray[i].price * totArray[i].order_quantity) || 0
          console.log('quantity: ',totArray[i].order_quantity);
          console.log('price: ',totArray[i].price);
        }
        return total
      }

      // $scope.cart = CartFactory.inventory
      // $scope.$watch('cart', function(){
      //   let cartTotal = 0
      //   for (var i = 0; i < $scope.cart.length; i++) {
      //     cartTotal = ($scope.cart[i].price * $scope.cart[i].order_quantity) || 0
      //   }
      //   self.cartTotal = cartTotal;
      // }, true)

     }
    ]
  })
