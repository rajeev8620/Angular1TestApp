/*
Controller to control the application business logic
*/
var app = angular.module('myApp');
app.controller('AppController', function($scope, AppService) {
   var self = this;
   self.latestRecors=[];
   /* Get the latest result data from table */
   self.displayDefaultData=function(){
       self.latestRecors= AppService.resultData.getlatestRecords().then(
            function(response) {
                self.latestRecors=response.dataList;
            });
    }
    self.displayDefaultData();

    /* On submit of result data */
    self.submit=function(){
        const number1=self.number1;
        const number2=self.number2;
        const result=number1*number2;
         /* Create object to send data to the service */
        const resultObj={
            'number1':number1,
            'number2':number2,
            'result':result
        };
        AppService.resultData
            .addResult(resultObj)
            .then(
                function(response) {
                    self.latestRecors=[];
                    //call latest records
                    self.number1='';
                    self.number2='';			
                    self.displayDefaultData();					
                },
                function(error) {
                    console.log("The error is: "+error);
            });
    }
 });
