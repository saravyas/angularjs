var app = angular.module("saraApp",[])
                 .controller("saraCtrl",saraCtrl);

function saraCtrl($scope){
	var persons = [{
		name : "sara",
		age : "21",
		dob : new Date("October 15, 1995"),
		gender : "male",
		salary : "12356.98"
	},{
		name : "saravyas",
		age : "20",
		dob : new Date("October 23, 1996"),
		gender : "Female",
		salary : "82356.98"
	},{
		name : "gomal",
		age : "18",
		dob : new Date("January 2, 1998"), 
		gender : "Female",
		salary : "102356.998"
	},{
		name : "gomalvyas",
		age : "19",
		dob : new Date("October 02, 1997"), 
		gender : "Female",
		salary : "123596.098"
	},{
		name : "saragomal",
		age : "22",
		dob : new Date("October 12, 1994"), 
		gender : "male",
		salary : "912356.98"
	}];

	$scope.persons = persons;
	$scope.column = "name";
	$scope.sortcolumn = false;

	$scope.sortdata = function(column){
		$scope.sortcolumn = $scope.column==column ? !$scope.sortcolumn : false; 
		$scope.column= column;
	}

	// $scope.sortclass = function(column){
	// 	if($scope.sortcolumn == column){
	// 		return $scope.sortcolumn ? 'down' : 'up';
	// 	}

	// 	return '';
	// }
}