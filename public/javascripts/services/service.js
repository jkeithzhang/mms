
var phonecatServices = angular.module('phonecatServices', ['ngResource']);

phonecatServices
	.factory('Phone', ['$resource',
	  function($resource){
	    return $resource('phones/:phoneId.json', {}, {
	      query: {method:'GET', params:{phoneId:'phones'}, isArray:true}
	    });
	  }
	])
	.factory('display', ['$resource', '$http',
		function($resource, $http){
			return {
				insert: function(record, selectedDate) {
					return $http({
						url: '/api/insert',
						method: 'GET',
						params: {record: record, selectedDate: selectedDate}
					});
				},

				getList: function(date) {
					//workaround for ui-bootstrap timepicker's bug..
					// console.log(typeof(date));
					var formDate = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();
					return $http({
						url: '/api/getList',
						method: 'GET',
						params: {date: formDate}
					});
				}


			};
		}
	])
