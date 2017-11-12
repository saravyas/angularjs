var app = angular.module("saraApp",[])
                 .controller("saraCtrl",saraCtrl)
                 .filter("gender",gender);

function gender(){
	return function(gender){
		switch(gender){
			case 1 :
				return "Male";
			case 2 :
				return "Female";			
			case 3 :
				return "Not Disclosed";
		}
	}
};

function saraCtrl($scope){
	var persons = [{
		name : "sara",
		age : 21,
		mail : "saravyas007@gmail.com",
		gender : 1
	},{
		name : "vyas",
		age : 18,
		mail : "vyas007@gmail.com",
		gender : 2
	},{
		name : "gomal",
		age : 17,
		mail : "gomalvyas007@gmail.com",
		gender : 2
	},{
		name : "Enemy",
		age : 71,
		mail : "enemy@gmail.com",
		gender : 3
	}];
 	$scope.persons = persons;
}