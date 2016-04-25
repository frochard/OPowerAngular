'use strict';

describe('Controller: ElectronicDevicesCtrl', function () {

  // load the controller's module
  beforeEach(module('opowerApp'));

  var ElectronicDevicesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ElectronicDevicesCtrl = $controller('ElectronicDevicesCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ElectronicDevicesCtrl.awesomeThings.length).toBe(3);
  });
});
