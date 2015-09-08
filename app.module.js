(function () {
	'use strict';

	angular.module('appModule', [
    'ngRoute',
    'LocalStorageModule'
  ])
		.config(configure)
		.controller('appController', appController);

    configure.$inject = ['$routeProvider', 'localStorageServiceProvider'];

    function configure($routeProvider, localStorageServiceProvider) {
//      $routeProvider.
//        when('/insured-info', {
//          templateUrl: 'partials/insured-info.html',
//          controller: 'InsuredInfoCtrl'
//        }).
//
//        otherwise({
//          redirectTo: '/insured-info'
//        });

      //https://github.com/grevory/angular-local-storage
      //For bookkeeping, I guess. Don't have to call setPrefix.
      localStorageServiceProvider
        .setPrefix('jordansApp')
        .setStorageCookieDomain('');
    }

    appController.$inject = ['$http', '$location', 'someService'];

    function appController($http, $location, someService) {
    }
}());

