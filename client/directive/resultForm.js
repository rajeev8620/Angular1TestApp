/*
Directive to add user input form for multiplication
*/
var app = angular.module('myApp');  
app.directive('resultForm',function(){
    return {
        templateUrl: 'resultForm.html'
    };
});
