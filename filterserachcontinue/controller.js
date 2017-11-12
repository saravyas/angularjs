var app = angular.module("saraApp",[])
                 .controller("saraCtrl",saraCtrl);

function saraCtrl($scope){
	var persons = [{
		name : "sara",
		age : "21",
		mail : "saravyas007@gmail.com"
	},{
		name : "vyas",
		age : "18",
		mail : "vyas007@gmail.com"
	},{
		name : "gomal",
		age : "17",
		mail : "gomalvyas007@gmail.com"
	}];
 	$scope.persons = persons;
}