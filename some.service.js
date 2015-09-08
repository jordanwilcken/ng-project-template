//Super Useful! To play with an angular service in the browser console you can enlist the help of injector:
//var serviceObject = angular.injector(['ng', 'appModule']).get('someService');

(function () {
	'use strict';

	angular.module('appModule')
		.factory('someService', someService);

  someService.$inject = ['localStorageService'];

  function someService() {
		return {
      create: create,
      read: read,
      update: update,
      dlete: dlete
    };

    function create(priceList) {
    }

    function read() {
    }

    function update(catCode) {
    }

    function dlete(catCode) {
    }

  }

}());
