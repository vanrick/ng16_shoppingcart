'use strict';

// Register `chuckDetail` component, along with its associated controller and template
angular.
  module('chuckDetail').
  component('chuckDetail', {
    templateUrl: 'chuck-detail/chuck-detail.template.html',
    controller: ['$routeParams', 'Chuck', 'ModalService',
      function ChuckDetailController($routeParams, Chuck, ModalService) {
        var self = this;
        self.chuck = Chuck.get({chuckId: $routeParams.chuckId}, function(chuck) {
          self.setImage(chuck.images[0]);
        });

        self.setImage = function setImage(imageUrl) {
          self.mainImageUrl = imageUrl;
        };

        self.toggleBtn = function(){
          self.showIt = !self.showIt
        }

        self.showModal = function(){
  	// Just provide a template url, a controller and call 'showModal'.
    ModalService.showModal({
      templateUrl: "chuck-detail/chuck-detail.template.html",
      controller: "ChuckDetailController"
    }).then(function(modal) {
      // The modal object has the element built, if this is a bootstrap modal
      // you can call 'modal' to show it, if it's a custom modal just show or hide
      // it as you need to.
      modal.element.modal();
      modal.close.then(function(result) {
        self.message = result ? "You said Yes" : "You said No";
      });
    });
        }

        self.dismissModal = function(result) {
        close(result, 200); // close, but give 200ms for bootstrap to animate
        };



      }
    ]
  });
