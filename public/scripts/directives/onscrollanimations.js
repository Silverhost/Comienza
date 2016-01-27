'use strict';

/**
 * @ngdoc directive
 * @name comienzaApp.directive:onScrollAnimations
 * @description
 * # onScrollAnimations
 */
angular.module('comienzaApp')
  .directive('onScrollAnimations', function () {
    return {
      restrict: 'E',
      link: function () {
        $('.wp-1').waypoint(function() {
          $('.wp-1').addClass('animated fadeInUp');
        }, {
          offset: '75%'
        });
        $('.wp-2').waypoint(function() {
          $('.wp-2').addClass('animated fadeInUp');
        }, {
          offset: '75%'
        });
        $('.wp-3').waypoint(function() {
          $('.wp-3').addClass('animated fadeInUp');
        }, {
          offset: '75%'
        });
        $('.wp-4').waypoint(function() {
          $('.wp-4').addClass('animated fadeIn');
        }, {
          offset: '75%'
        });
        $('.wp-5').waypoint(function() {
          $('.wp-5').addClass('animated fadeInRight');
        }, {
          offset: '50%'
        });
        $('.wp-6').waypoint(function() {
          $('.wp-6').addClass('animated fadeInLeft');
        }, {
          offset: '50%'
        });
        $('.wp-7').waypoint(function() {
          $('.wp-7').addClass('animated fadeInUp');
        }, {
          offset: '60%'
        });
        $('.wp-8').waypoint(function() {
          $('.wp-8').addClass('animated fadeInUp');
        }, {
          offset: '60%'
        });
      }
    };
  });
