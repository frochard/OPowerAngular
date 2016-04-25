'use strict';

describe('Controller: ElectronicCtrl', function () {

  // load the controller's module
  beforeEach(module('opowerApp'));

  var ElectronicCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ElectronicCtrl = $controller('ElectronicCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ElectronicCtrl.awesomeThings.length).toBe(3);
  });
});
