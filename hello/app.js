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
        .service("greetingService", function GreetingService () {
            var that = this;
            
            that.message = "Default";
        })
        .service("stringService", function StringService() {
            var that = this;
            
            that.reverse = function (message) {
                return message.split("").reverse().join("");
            };            
        })
        .filter("reverse", function ReverseFilter(stringService) {
            return stringService.reverse;
        })
        .controller("FirstCtrl", function FirstCtrl (greetingService, stringService) {
            var that = this;
            
            that.greetingService = greetingService;
            that.reverse = stringService.reverse;
        })              
        .controller("SecondCtrl", function SecondCtrl (greetingService) {
            var that = this;
            
            that.greetingService = greetingService;
        })
        ;              
}());
