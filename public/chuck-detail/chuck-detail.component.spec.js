'use strict';

describe('chuckDetail', function() {

  // Load the module that contains the `chuckDetail` component before each test
  beforeEach(module('chuckDetail'));

  // Test the controller
  describe('ChuckDetailController', function() {
    var $httpBackend, ctrl;
    var xyzPhoneData = {
      name: 'chuck xyz',
      images: ['image/url1.png', 'image/url2.png']
    };

    beforeEach(inject(function($componentController, _$httpBackend_, $routeParams) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('chucks/xyz.json').respond(xyzChuckData);

      $routeParams.phoneId = 'xyz';

      ctrl = $componentController('chuckDetail');
    }));

    it('should fetch the chuck details', function() {
      jasmine.addCustomEqualityTester(angular.equals);

      expect(ctrl.chuck).toEqual({});

      $httpBackend.flush();
      expect(ctrl.chuck).toEqual(xyzChuckData);
    });

  });

});
