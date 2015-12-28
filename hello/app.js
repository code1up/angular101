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
        })
        .controller("FirstCtrl", function FirstCtrl () {
            var that = this;
            
            that.greeting = "Hello World";
        });              
}());
