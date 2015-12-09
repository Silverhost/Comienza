'use strict';

/**
 * @ngdoc directive
 * @name comienzaApp.directive:autoActive
 * @description
 * # autoActive
 */

angular.module('comienzaApp')
  .directive('autoActive', ['$location', function ($location) {
    return {
      restrict: 'A',
      scope: false,
      link: function (scope, element) {
        function setActive() {
          var path = $location.path();
          if (path) {
            angular.forEach(element.find('li'), function (li) {
              var anchor = li.querySelector('a');
              if (anchor.href.match('#' + path + '(?=\\?|$)')) {
                angular.element(anchor).addClass('activo');
              } else {
                angular.element(anchor).removeClass('activo');
              }
            });
          }
        }

        setActive();

        scope.$on('$locationChangeSuccess', setActive);
      }
    }
  }]);
