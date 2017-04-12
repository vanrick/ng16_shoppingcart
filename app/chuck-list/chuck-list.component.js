'use strict';

// Register `chuckList` component, along with its associated controller and template
angular.
  module('chuckList').
  component('chuckList', {
    templateUrl: 'chuck-list/chuck-list.template.html',
    controller: ['Chuck',
      function ChuckListController(Chuck) {
        this.chucks = Chuck.query();
        this.orderProp = 'age';
      }
    ]
  });
