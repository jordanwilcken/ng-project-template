(function () {
	'use strict';

	angular.module('appModule', ['ngRoute'])
		.config(configure)
		.controller('appController', appController);

    configure.$inject = ['$routeProvider'];

    function configure($routeProvider) {
//      $routeProvider.
//        when('/insured-info', {
//          templateUrl: 'partials/insured-info.html',
//          controller: 'InsuredInfoCtrl'
//        }).
//
//        otherwise({
//          redirectTo: '/insured-info'
//        });
    }

    appController.$inject = ['$http', '$location'];

    function appController($http, $location) {
    }
}());

