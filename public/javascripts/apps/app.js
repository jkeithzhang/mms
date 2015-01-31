'use strict';

var firstCtrl = angular.module('firstCtrl', [
	'ngRoute',
	'phonecatControllers',
	'phonecatFilters',
	'UserApp',
	'phonecatServices',
	'ui.bootstrap'
]);

firstCtrl
	.config(['$routeProvider',
	  function($routeProvider) {
	    $routeProvider
	      .when('/', {
	        templateUrl: 'partials/financial',
	        controller: 'PhoneListCtrl',
	        public: false
	      })
	      .when('/signup', {
	        templateUrl: 'partials/signup',
	        controller: 'PhoneListCtrl',
	        public: true
	      })
	      .when('/login', {
	        templateUrl: 'partials/login',
	        controller: 'PhoneListCtrl',
	        public: true
	      })	      
	      // .when('/index', {
	      //   templateUrl: 'partials/temp',
	      //   controller: 'PhoneListCtrl',
	      //   public: false
	      // })	      
	      .otherwise({
	        redirectTo: '/'
	      });
	  }
	])
	.run(function(user) {
		user.init({ appId: '544ad33597fdf' });
	});

