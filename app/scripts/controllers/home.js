'use strict';

/**
 * @ngdoc function
 * @name bluroeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the bluroeApp
 */
angular.module('bluroeApp')
    .controller('HomeCtrl', function () {

    		 var baloon = $('#baloon');
			   function runIt() {
			       baloon.animate({top:'+=20'}, 1000);
			       baloon.animate({top:'-=20'}, 1000, runIt);
			   }

			   runIt();

    });