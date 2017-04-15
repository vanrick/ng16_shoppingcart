'use strict';

// Register `chuckDetail` component, along with its associated controller and template
angular.
  module('chuckDetail').
  component('chuckDetail', {
    templateUrl: 'chuck-detail/chuck-detail.template.html',
    controller: ['$routeParams', 'Chuck',
      function ChuckDetailController($routeParams, Chuck) {
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
      }
    ]
  });
