'use strict';

// Register `chuckDetail` component, along with its associated controller and template
angular.
  module('chuckDetail').
  component('chuckDetail', {
    templateUrl: 'chuck-detail/chuck-detail.template.html',
    controller: ['$routeParams', 'Chuck', 'CartFactory', 'ModalService',
      function ChuckDetailController($routeParams, Chuck, CartFactory, ModalService) {
        var self = this;
        self.chuck = Chuck.get({chuckId: $routeParams.chuckId}, function(chuck) {
          self.setImage(chuck.images[0]);
        });
        self.chid= $routeParams.chuckId

        self.setImage = function setImage(imageUrl) {
          self.mainImageUrl = imageUrl;
        };

        self.toggleBtn = function(){
          self.showIt = !self.showIt
        };

        self.add = function(){
          CartFactory.add()
        }
      }
    ]
  });
