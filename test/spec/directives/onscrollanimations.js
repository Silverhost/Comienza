'use strict';

describe('Directive: onScrollAnimations', function () {

  // load the directive's module
  beforeEach(module('comienzaApp'));
  
  var element,
    scope;
  
  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));
  
  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<on-scroll-animations></on-scroll-animations>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the onScrollAnimations directive');
  }));
});
