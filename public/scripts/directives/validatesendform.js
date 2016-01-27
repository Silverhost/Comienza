'use strict';

/**
 * @ngdoc directive
 * @name comienzaApp.directive:validateSendForm
 * @description
 * # validateSendForm
 */
angular.module('comienzaApp')
  .directive('validateSendForm', function () {
    return {
      restrict: 'E',
      link: function () {
        $('#form_quote').submit(function(e) {
        e.preventDefault();
        var log = $(this).validationEngine('validate');

        if(log) {
          $('#submit').html('Por favor espere...');
          $('#submit').prop('disabled', true);
          var data = {
            name: $('#name').val(),
            email: $('#email').val(),
            phone: $('#phone').val(),
            message: $('#message').val(),
            product: $('#product').val(),
          };

          //ajax de contacto
          $.post('http://localhost:3000/send-email', data, function(res) {
            if(res) {
              $('input[type="text"]').val('');
              $('input[type="email"]').val('');
              $('textarea').val('');
              alert('Su mensaje ha sido enviado con exito');
            }else{
              alert('Lo sentimos pero no se ha podido enviar el correo');
            }
          });
        }
      });

      $("#form_quote").validationEngine({promptPosition : "topLeft", scroll: false});
      }
    };
  });
