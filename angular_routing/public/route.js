var app = angular.module('myApp', ['ngRoute'])
				 .config(function($routeProvider,$locationProvider){
				 	$routeProvider
				 		.when("/home",{
				 			templateUrl: "Templates/home.html",
				 			controller: "homeCtrl"
				 		})
				 		.when("/course",{
				 			templateUrl: "Templates/course.html",
				 			controller: "courseCtrl"
				 		})
				 		.when("/student",{
				 			templateUrl: "Templates/student.html",
				 			controller : "studentCtrl"
				 		})
				 		.otherwise({redirectTo : "/home"})
				 	$locationProvider.html5Mode(true);	
				 	})
		         .controller("homeCtrl",homeCtrl)
		 		 .controller("courseCtrl",courseCtrl)
		 		 .controller("studentCtrl",studentCtrl);
function homeCtrl($scope){
	$scope.message = "Home Page";
};		 
function courseCtrl($scope){
	$scope.courses = ["Html","Css","Js","Node","Python","Angular","React"];
};
function studentCtrl($scope){
	$scope.students = [{name:"sara"},{name:"vyas"},{name:"gomal"}]
};