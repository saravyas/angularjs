var app = angular.module("saraApp",[])
                 .controller("saraCtrl",saraCtrl);

function saraCtrl($scope,$http){
 	$http.get('https://jsonplaceholder.typicode.com/posts')
 		 .then(function(response){
 		 	$scope.persons = response.data;
 		 	console.log(response.data);
 		 });
};

// function saraCtrl($scope,$http){
// 	without using $http.get()
//  	$http({method : 'GET',url : 'https://jsonplaceholder.typicode.com/posts'})
//  		 .then(function(response){
//  		 	$scope.persons = response.data;
//  		 	console.log(response.data);
//  		 });
// };