'use strict';

describe('Controller: TiendaonlineCtrl', function () {

  // load the controller's module
  beforeEach(module('comienzaApp'));
  
  var TiendaonlineCtrl,
    scope;
  
  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TiendaonlineCtrl = $controller('TiendaonlineCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));
  
  it('should attach a list of awesomeThings to the scope', function () {
    expect(TiendaonlineCtrl.awesomeThings.length).toBe(3);
  });
});
