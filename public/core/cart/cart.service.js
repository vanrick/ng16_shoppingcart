'use strict';

angular.
  module('core.cart').
  factory('CartFactory', ['$resource',
    function($resource) {
      return {
        inventory: [],
        grandTotal: 0,
        // add: function (size,shoe) {
        //     if (this.inventory.length > 0) {
        //       for (var i = 0; i < this.inventory.length; i++) {
        //         if (shoe.id == this.inventory[i].id) {
        //           this.inventory[i].order_quantity += Number(qty)
        //           break;
        //       }else{
        //         shoe.order_quantity = Number(qty)
        //         this.inventory.push(shoe)
        //         break;
        //       }
        //     }
        //     }else{
        //       shoe.order_quantity = Number(qty)
        //       this.inventory.push(shoe)
        //   }
        // },
        add: function(size, shoe){
          shoe.size = size
          for (var i = 0; i < this.inventory.length; i++) {
            if (shoe.id == this.inventory[i].id && shoe.size == this.inventory[i].size) {
              this.inventory[i].order_quantity += 1
              return;
            }
          }
          shoe.order_quantity = 1
          shoe.size = size
          this.inventory.push(shoe)
        },
        updateQuantity: function(shoe, qty){
          shoe.order_quantity = qty
          this.inventory.push(shoe)
          console.log(this.inventory);
        },
        delete: function(shoe){
          var index = this.inventory.indexOf(shoe)
          this.inventory.splice(index, 1)
        },
        grandTotalFunction: function(){
          var total = 0
          for (var i = 0; i < this.inventory.length; i++) {
            total+=this.inventory[i].price * this.inventory[i].order_quantity
          }
          this.grandTotal = total;
        },
       shoeSize: [
         { value: 8, name: "Men's 8, Women's 10" },
         { value: 8.5, name: "Men's 8.5, Women's 10.5" },
         { value: 9, name: "Men's 9, Women's 11" },
         { value: 9.5, name: "Men's 9.5, Women's 11.5" },
         { value: 10, name: "Men's 10, Women's 12.5" },
         { value: 10.5, name: "Men's 10.5" },
         { value: 11, name: "Men's 11" },
         { value: 11.5, name: "Men's 11.5" },
         { value: 12, name: "Men's 12" },
         { value: 13, name: "Men's 13" },
       ]
    }
  }
  ]);
