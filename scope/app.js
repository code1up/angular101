(function () {
    "use strict";

    var dependencies = [
    ];

    var app = angular
        .module("app", dependencies)
        ;

    app.controller("MyCtrl", function MyCtrl () {
        var that = this;
        
        that.phoneNumber = "0799955550000";
        
        that.phoneHome = function (phoneNumber) {
            console.log("MyCtrl::phoneHome " + phoneNumber);  
        };
    });
    
    app.directive("phone", function () {
        return {
            restrict: "A",
            template: "<button type='button' class='btn btn-default' ng-click='dial()'>Phone home</button>",
            scope: {
                dial: "&"
            }
        };
    });
}());
