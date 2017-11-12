var app = angular.module("saraApp",[])
                 .controller("saraCtrl",saraCtrl);

function saraCtrl($scope){
	var persons = [{
		name : "sara",
		age : "21",
		dob : new Date("October 15, 1995"),
		mail : "saravyas007@gmail.com",
		gender : "male",
		salary : "12356.98"
	},{
		name : "saravyas",
		age : "20",
		dob : new Date("October 23, 1996"),		
		mail : "saravyas007@gmail.com",
		gender : "Female",
		salary : "82356.98"
	},{
		name : "gomal",
		age : "18",
		dob : new Date("January 2, 1998"),		
		mail : "saravyas007@gmail.com",
		gender : "Female",
		salary : "102356.998"
	},{
		name : "gomalvyas",
		age : "19",
		dob : new Date("October 02, 1997"),		
		mail : "gomalvyas007@gmail.com",
		gender : "Female",
		salary : "123596.098"
	},{
		name : "saragomal",
		age : "22",
		dob : new Date("October 12, 1994"),		
		mail : "saravyas007@gmail.com",
		gender : "male",
		salary : "912356.98"
	}];

	$scope.persons = persons;
	$scope.row = 2;
}