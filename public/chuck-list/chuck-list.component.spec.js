'use strict';

describe('chuckList', function() {

  // Load the module that contains the `chuckList` component before each test
  beforeEach(module('chuckList'));

  // Test the controller
  describe('ChuckListController', function() {
    var $httpBackend, ctrl;

    beforeEach(inject(function($componentController, _$httpBackend_) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('chucks/chucks.json')
                  .respond([{name: 'Nexus S'}, {name: 'Motorola DROID'}]);

      ctrl = $componentController('chuckList');
    }));

    it('should create a `chucks` property with 2 chucks fetched with `$http`', function() {
      jasmine.addCustomEqualityTester(angular.equals);

      expect(ctrl.chucks).toEqual([]);

      $httpBackend.flush();
      expect(ctrl.chuck).toEqual([{name: 'Nexus S'}, {name: 'Motorola DROID'}]);
    });

    it('should set a default value for the `orderProp` property', function() {
      expect(ctrl.orderProp).toBe('age');
    });

  });

});
