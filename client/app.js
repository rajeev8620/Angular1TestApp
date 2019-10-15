/*
Basic app configuration, and calling service at starting
*/
(function() {
    var app = angular.module('myApp', []);    
     app.run(function($rootScope, AppService) {
       console.clear();
       console.log('App running');
    });
  })();
