(function () {

    var m = angular.module('DirectiveApp', []);

    m.directive('myDiv', function () {
        return {
            restrict: 'EA', 
            template: '<br><h3>My First Directive!!</h3>'
        };
    });
    
    
    m.directive('hello', function() {
        return {
            restrict:'A',
            link: function(s,e,a) { 
                e.text(a.orgname);
            }
        };
    });
    
    
    m.directive('myName', function() {
        return {
            restrict:'E',
            scope: {},
            template:'{{fullName}}',
            link: function(s,e,a) {
               s.fullName = a.first + ', ' + a.last;
            }
        }
    });
    
     m.directive('namer', function() {
        return {
            restrict:'A',
            scope: {},
            template:'{{fullName}}',
            link: function(s,e,a) {
               s.fullName = a.first + ', ' + a.last;
            }
        }
    });
    
    m.directive('cnamer', function() {
        return {
            restrict:'C',
            scope: {},
            template:'{{fullName}}',
            link: function(s,e,a) {
               s.fullName = a.first + ', ' + a.last;
            }
        }
    });


}());