(function () {
    "use strict";

    var dependencies = [];

    var app = angular
        .module("app", dependencies)
        ;

    app.controller("MyCtrl", function MyCtrl () {
    });
    
    app.directive("superman", function SupermanDirective() {
       return {
           restrict: "E",
           template: "<div>Up, up and away!</div>"  
       };
    });
}());
