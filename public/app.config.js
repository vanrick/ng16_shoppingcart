'use strict';

angular.
  module('allstarApp').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/chucks', {
          template: '<chuck-list></chuck-list>'
        }).
        when('/chucks/:chuckId', {
          template: '<chuck-detail></chuck-detail>'
        }).
        when('/chucks/:chuckId/addToCart', {
          template: '<add-to-cart></add-to-cart>'
        }).
        otherwise('/chucks');
    }
  ]);
