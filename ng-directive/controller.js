var app = angular.module("saraApp",[])
                 .controller("saraCtrl",saraCtrl);

function saraCtrl($scope){
	var persons = [{
		name : "sara",
		age : "21",
		mail : "saravyas007@gmail.com",
		degree: [{ug:"srec"},{pg:"IIT"}]
	},{
		name : "vyas",
		age : "18",
		mail : "vyas007@gmail.com",
		degree: [{ug:"psg"},{pg:"NIT"}]
	},{
		name : "gomal",
		age : "17",
		mail : "gomalvyas007@gmail.com",
		degree: [{ug:"IIT"},{pg:"IISc"}]
	}];

	$scope.persons = persons;
	$scope.data = "tabledata.html";
}