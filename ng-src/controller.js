var app = angular.module("saraApp",[])
                 .controller("saraCtrl",saraCtrl);

function saraCtrl($scope){
	var person = {
		name : "sara",
		age : "21",
		mail : "saravyas007@gmail.com",
		pic : "C:/Users/SAravindgunaseka/Downloads/saravyas1.jpg"
	};

	$scope.person = person;
}