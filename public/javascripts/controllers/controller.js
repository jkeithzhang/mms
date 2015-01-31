'use strict';

/* Controllers */

var phonecatControllers = angular.module('phonecatControllers', []);

phonecatControllers
	.controller('PhoneListCtrl', ['$scope', '$routeParams', '$anchorScroll', 'display',
		function($scope, $routeParams, $anchorScroll, display) {
			
			// Insert an record
			$scope.insert = function() {
				display.get()
					.success(function(data) {
						console.log('insert done!');
					});
			}
		}
	])
	.controller('DatepickerCtrl', ['$scope', 'display', '$modal',
		function($scope, display, $modal) {

			$scope.today = function() {
			    $scope.dt = new Date();
			}
			
			$scope.today();
			
			$scope.clear = function () {
			    $scope.dt = null;
			}
			
			$scope.chosen = function() {
				console.log($scope.dt);
				display.getList($scope.dt)
					.success(function(data) {
						if(data == '') {
							$scope.lists = null;
							// console.log(typeof($scope.lists));
						}
						else{
							console.log('done--->', data); //start point
							$scope.lists = data;
						}
					});		
			}

			// Disable weekend selection
			$scope.disabled = function(date, mode) {
				return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
			}
			
			$scope.toggleMin = function() {
			    $scope.minDate = $scope.minDate ? null : new Date();
			}
			  
			$scope.toggleMin();
			  
			$scope.open = function($event) {
			    $event.preventDefault();
			    $event.stopPropagation();
			    $scope.opened = true;
			}
			  
			$scope.dateOptions = {
			    formatYear: 'yy',
			    startingDay: 1
			}

			$scope.test = function() {
				console.log('hello');
			}

			$scope.options = [
				{
				   name: 'Something Cool',
				   value: 'something-cool-value'
				}, 
				{
				   name: 'Something Else',
				   value: 'something-else-value'
				}
			];

			$scope.openModal = function (selectedDate) {
				console.log('get here, ', selectedDate);
				console.log($scope.options);
			    var modalInstance = $modal.open({
			      templateUrl: 'partials/add-record-modal.jade',
			      controller: 'ModalInstanceCtrl',
			      size: 'lg',
			      resolve: {//things passed to the controller
			        options: function () {
			          return $scope.options;
			        },
			        selectedDate: function() {
			          return selectedDate; 
			        }
			      }
			    });
			    //promise here..
			    // modalInstance.result.then(function () {
			      
			    // }, function () {
			    //   console.log('Modal dismissed at: ' + new Date());
			    // });
  			};
			$scope.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
			$scope.format = $scope.formats[0];

		}
	])
	.controller('ModalInstanceCtrl', ['$scope', '$modalInstance', 'options', 'display', 'selectedDate',
		function($scope, $modalInstance, options, display, selectedDate) {
			$scope.options = options;
			$scope.selectedDate = selectedDate;

			$scope.submit = function () {
				// console.log($scope.selectedDate);
				$scope.item.per = {};
				$scope.item.per.first_name = $scope.user.first_name;
				$scope.item.per.last_name = $scope.user.last_name;
				$scope.item.per.email = $scope.user.email;
				if($scope.item.income == false || $scope.item.income == undefined) {
					$scope.item.income = false
				}
				display.insert($scope.item, $scope.selectedDate)
					.success(function() {
						console.log('insert done!');
						$scope.showFlag=true;
						setTimeout(function() {
							$modalInstance.close();
						}, 1000);
					})
			};

			$scope.cancel = function () {
				$modalInstance.dismiss();
			};
		}
	]);
