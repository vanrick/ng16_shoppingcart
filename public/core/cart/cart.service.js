'use strict';

angular.
  module('core.cart').
  factory('CartFactory', ['$resource',
    function($resource) {
      return {
        add: function(){
          alert('FACTORY!!')
      }
    }
  }
  ]);
