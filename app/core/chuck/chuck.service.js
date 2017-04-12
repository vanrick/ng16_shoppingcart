'use strict';

angular.
  module('core.chuck').
  factory('Chuck', ['$resource',
    function($resource) {
      return $resource('chucks/:chuckId.json', {}, {
        query: {
          method: 'GET',
          params: {chuckId: 'chucks'},
          isArray: true
        }
      });
    }
  ]);
