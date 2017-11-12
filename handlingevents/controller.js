var app = angular.module("saraApp",[])
                 .controller("saraCtrl",saraCtrl);

function saraCtrl($scope){
	var persons = [{
		name : "sara",
		age : "21",
		mail : "saravyas007@gmail.com",
		likes : 0,
		dislikes : 0
	},{
		name : "vyas",
		age : "18",
		mail : "vyas007@gmail.com",
		likes : 0,
		dislikes : 0
	},{
		name : "gomal",
		age : "17",
		mail : "gomalvyas007@gmail.com",
		likes : 0,
		dislikes : 0
	}];
	$scope.over = 0;
	$scope.persons = persons;
	$scope.incrementlike = function(person){
		person.likes++;
	}
	$scope.decrementlike = function(person){
		person.dislikes++;
	}
}