var app = angular.module("saraApp",[])
                 .controller("saraCtrl",saraCtrl)
 
function saraCtrl($scope,$anchorScroll,$location){
 	$scope.scrollTo = function(id){
 		$location.hash(id);
 		$anchorScroll.yOffset(10); 
 		$anchorScroll();
 	};
}