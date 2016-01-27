'use strict';

describe('Controller: WebcorporativaCtrl', function () {

  // load the controller's module
  beforeEach(module('comienzaApp'));
  
  var WebcorporativaCtrl,
    scope;
  
  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    WebcorporativaCtrl = $controller('WebcorporativaCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));
  
  it('should attach a list of awesomeThings to the scope', function () {
    expect(WebcorporativaCtrl.awesomeThings.length).toBe(3);
  });
});
