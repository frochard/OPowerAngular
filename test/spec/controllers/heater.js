'use strict';

describe('Controller: HeaterCtrl', function () {

  // load the controller's module
  beforeEach(module('opowerApp'));

  var HeaterCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HeaterCtrl = $controller('HeaterCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(HeaterCtrl.awesomeThings.length).toBe(3);
  });
});
