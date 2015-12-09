'use strict';

/**
 * @ngdoc overview
 * @name comienzaApp
 * @description
 * # comienzaApp
 *
 * Main module of the application.
 */
angular
  .module('comienzaApp', [
    'ngRoute',
    'duScroll'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/tienda-online', {
        templateUrl: 'views/tiendaonline.html',
        controller: 'TiendaonlineCtrl',
        controllerAs: 'tiendaOnline'
      })
      .when('/web-corporativa', {
        templateUrl: 'views/webcorporativa.html',
        controller: 'WebcorporativaCtrl',
        controllerAs: 'WebCorporativa'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
