/*
Service to connect with table and fetch required data
*/
var app = angular.module('myApp');  
  app.factory('AppService', ['$http', function($http){
    /* create an object to add factory function */
    var api = {};
    api.resultData={
        /* Fetched latest one record from table*/
        getlatestRecords : function() {
            return $http
                    .get('http://localhost:3000/getData/').then(function(response) {
                        var $responseVal = {
                            'dataList' : response.data.data
                        };
                        return $responseVal;
                    }, function(error) {
                        return error;
                    })
        },
        addResult : function(resultValObj) {
            /* Insert result data into table*/
            return $http
                    .post('http://localhost:3000/saveData/',resultValObj).then(function(response) {
                        var $responseVal = {
                            'dataList' : response.data.data
                        };
                        return $responseVal;
                    }, function(error) {
                        return error;
                    })
        },
            
    };
    return api;
}]);
