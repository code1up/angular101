(function () {
    "use strict";

    var dependencies = [];

    var app = angular
        .module("app", dependencies)
        ;

    app.controller("MyCtrl", function MyCtrl () {
        var that = this;
        
        that.preamble = "Message";
    });
    
    app.directive("batman", function BatmanDirective () {
        return function (scope, elem, attrs) {
            elem.text(attrs.preamble + ": " + attrs.message);  
        };     
    });
    
    app.directive("superman", function SupermanDirective () {
       return {
           restrict: "E",
           template: "<div>Up, up and away!</div>"  
       };
    });
}());
