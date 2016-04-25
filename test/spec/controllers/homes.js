'use strict';

describe('Controller: HomesCtrl', function () {

  // load the controller's module
  beforeEach(module('opowerApp'));

  var HomesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HomesCtrl = $controller('HomesCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(HomesCtrl.awesomeThings.length).toBe(3);
  });
});
