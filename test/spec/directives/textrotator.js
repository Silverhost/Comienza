'use strict';

describe('Directive: textRotator', function () {

  // load the directive's module
  beforeEach(module('comienzaApp'));
  
  var element,
    scope;
  
  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));
  
  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<text-rotator></text-rotator>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the textRotator directive');
  }));
});
