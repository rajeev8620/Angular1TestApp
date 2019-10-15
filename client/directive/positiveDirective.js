/*
Directive to check text box value , which will allow only positive value
*/
var app = angular.module('myApp');  
app.directive('positive', [function() {
    return {
        require: 'ngModel',
        link: function(scope, elem, attrs, ctrl) {
            if (!ctrl) return;
            ctrl.$validators.positive = function(value) {
                return value && value >= 0;
            };
        }
    };
}]);
