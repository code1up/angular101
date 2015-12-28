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

    app.directive("enter", function EnterDirective () {
        return function (scope, elem, attrs) {
            elem.bind("mouseenter", function () {
                elem.addClass(attrs.enter);
            });
        };     
    });

    app.directive("leave", function LeaveDirective () {
        return function (scope, elem, attrs) {
            elem.bind("mouseleave", function () {
                elem.removeClass(attrs.enter);
            });
        };     
    });
}());
