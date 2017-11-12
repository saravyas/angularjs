var app = angular.module("saraApp");

app.factory("strService",strService);

function strService(){
	return {
		processstr : function(data){
 		if(!data){
 			return data;
 		}
 		var output = "";
 		for(var i = 0; i<data.length;i++){
 			if(i > 0 && data[i] == data[i].toUpperCase()){
 				output = output + " ";
 			}
 			output = output + data[i];
 		}
 		return output;
 		}
	}
};