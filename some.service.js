(function () {
	'use strict';

	angular.module('appModule')
		.factory('someService', someService);

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
