var app = angular.module("saraApp",[])
                 .controller("saraCtrl",saraCtrl);

function saraCtrl($scope,$http,$log){
 	$http.get('https://jsonplaceholder.typicode.com/posts')
 		 .then(function(response){
 		 	$scope.persons = response.data;
 		 	console.log(response.data);
 		 	$log.info(response);
 		 })
 		 .catch(function(error){
 		 	$scope.error = error;
 		 	console.log(error);
 		 	$log.info(error)
 		 });
};
 