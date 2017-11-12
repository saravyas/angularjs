var app = angular.module("saraApp",[])
                 .controller("saraCtrl",saraCtrl);

function saraCtrl($scope,strService){
 	$scope.transformStr = function(input){
 		$scope.output = strService.processstr(input)
 	};
}