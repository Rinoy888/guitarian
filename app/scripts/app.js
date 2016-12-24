'use strict';

/**
 * @ngdoc overview
 * @name todoappApp
 * @description
 * # todoappApp
 *
 * Main module of the application.
 */
angular
  .module('bluroeApp', [
    'ngMessages',
    'ngResource',
    'ui.router',
    'nvd3',
    '720kb.datepicker',
    'ngAnimate'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise('/');

      $stateProvider
        .state('home', {
          url: '/home',
          templateUrl: 'views/home.html',
          controller: 'HomeCtrl',
          controllerAs: 'home'
        }) 
        .state('auth', {
          url: '/auth',
          templateUrl: 'views/login.html',
          controller: 'AuthCtrl',
          controllerAs: 'auth'
        }) 
        
  }) 