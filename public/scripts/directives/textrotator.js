'use strict';

/**
 * @ngdoc directive
 * @name comienzaApp.directive:textRotator
 * @description
 * # textRotator
 */
angular.module('comienzaApp')
  .directive('textRotator', function () {
    return {
      restrict: 'A',
      link: function () {
        $('.rotate').textrotator({
          animation: 'flipUp',
          speed: 4000
        });
      }
    };
  });
