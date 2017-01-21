(function () {
	angular.module("UppercaseApp", [])
	.controller("uppercaseController", uppercaseController);

	function uppercaseController ($scope, $filter){
		$scope.name = "";
		$scope.u_Name = function(){
			var upperCase = $filter('uppercase');
			$scope.name = upperCase($scope.name);
		};
	}
})();