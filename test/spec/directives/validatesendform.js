'use strict';

describe('Directive: validateSendForm', function () {

  // load the directive's module
  beforeEach(module('comienzaApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<validate-send-form></validate-send-form>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the validateSendForm directive');
  }));
});
