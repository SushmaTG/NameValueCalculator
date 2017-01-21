(function (){
	"use strict";

	angular.module('nameCalculator', [])
	.controller('nameCalculatorController', function($scope){
		$scope.name = "";
		$scope.totalValue = 0;

		$scope.displayNumeric = function(){
			var totalNameCalculator = calculateNumeric($scope.name);
			$scope.totalValue = totalNameCalculator;
		};

		function calculateNumeric(string){
			var totalStringValue = 0;
			for (var i = 0; i < string.length; i++) {
				totalStringValue += string.charCodeAt(i);
			}
			return totalStringValue;
		}
	});
})();