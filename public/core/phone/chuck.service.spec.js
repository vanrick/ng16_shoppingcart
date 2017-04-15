'use strict';

describe('Chuck', function() {
  var $httpBackend;
  var Chuck;
  var chucksData = [
    {name: 'Chuck X'},
    {name: 'Chuck Y'},
    {name: 'Chuck Z'}
  ];

  // Add a custom equality tester before each test
  beforeEach(function() {
    jasmine.addCustomEqualityTester(angular.equals);
  });

  // Load the module that contains the `Phone` service before each test
  beforeEach(module('core.chuck'));

  // Instantiate the service and "train" `$httpBackend` before each test
  beforeEach(inject(function(_$httpBackend_, _Chuck_) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('chucks/chucks.json').respond(chucksData);

    Chuck = _Chuck_;
  }));

  // Verify that there are no outstanding expectations or requests after each test
  afterEach(function () {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('should fetch the phones data from `/chucks/chucks.json`', function() {
    var chucks = Chuck.query();

    expect(chucks).toEqual([]);

    $httpBackend.flush();
    expect(chucks).toEqual(chucksData);
  });

});
