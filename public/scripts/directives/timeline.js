'use strict';

/**
 * @ngdoc directive
 * @name comienzaApp.directive:timeLine
 * @description
 * # timeLine
 */
angular.module('comienzaApp')
  .directive('timeLine', function () {
    return {
      restrict: 'A',
      link: function () {
        var timelineBlocks = $('.cd-timeline-block'), offset = 0.8;

        //on scolling, show/animate timeline blocks when enter the viewport
        $(window).on('scroll', function(){
          if(!window.requestAnimationFrame) {
            setTimeout(function(){ showBlocks(timelineBlocks, offset); }, 100);
          }else{
            window.requestAnimationFrame(function(){ showBlocks(timelineBlocks, offset); });
          }
        });

        function hideBlocks(blocks, offset) {
          blocks.each(function(){
            if ( $(this).offset().top > $(window).scrollTop()+$(window).height()*offset ) {
              $(this).find('.cd-timeline-img, .cd-timeline-content').addClass('is-hidden');
            }
          });
        }

        function showBlocks(blocks, offset) {
          blocks.each(function(){
            if ( $(this).offset().top <= $(window).scrollTop()+$(window).height()*offset && $(this).find('.cd-timeline-img').hasClass('is-hidden') ) {
              $(this).find('.cd-timeline-img, .cd-timeline-content').removeClass('is-hidden').addClass('bounce-in');
            }
            
          });
        }
        
        //hide timeline blocks which are outside the viewport
        hideBlocks(timelineBlocks, offset);
      }
    };
  });
