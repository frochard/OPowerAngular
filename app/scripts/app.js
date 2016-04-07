'use strict';

/**
 * @ngdoc overview
 * @name opowerApp
 * @description
 * # opowerApp
 *
 * Main module of the application.
 */
angular
  .module('opowerApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/homes', {
        templateUrl: 'views/homes.html',
        controller: 'HomesCtrl',
        controllerAs: 'Homes'
      })
      .when('/person', {
        templateUrl: 'views/person.html',
        controller: 'PersonCtrl',
        controllerAs: 'person'
      })
      .when('/heater', {
        templateUrl: 'views/heater.html',
        controller: 'HeaterCtrl',
        controllerAs: 'heater'
      })
      .when('/electronic_devices', {
        templateUrl: 'views/electronic_devices.html',
        controller: 'ElectronicDevicesCtrl',
        controllerAs: 'ElectronicDevices'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
