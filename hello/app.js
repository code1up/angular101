(function () {
    "use strict";
                
    var dependencies = [
        "ui.router"
    ];
    
    angular
        .module("app", dependencies)
        .config(function config($stateProvider) {
            $stateProvider.state("index", {
                url: "",
                controller: "FirstCtrl as first",
                templateUrl: "templates/first.html"          
            });
                      
            $stateProvider.state("second", {
                url: "/second",
                controller: "SecondCtrl as second",
                templateUrl: "templates/second.html"          
            });          
        })
        .service("greeting", function Greeting () {
            var that = this;
            
            that.message = "Default";
        })
        .controller("FirstCtrl", function FirstCtrl (greeting) {
            var that = this;
            
            that.greeting = greeting;
            
            that.reversed = function () {
                return that.greeting.message.split("").reverse().join("");
            };
        })              
        .controller("SecondCtrl", function SecondCtrl (greeting) {
            var that = this;
            
            that.greeting = greeting;
        })
        ;              
}());
