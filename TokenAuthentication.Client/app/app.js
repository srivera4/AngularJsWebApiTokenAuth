(function () {
    "use strict";

    var app = angular.module('myApp', ['ngRoute', 'networkServices']);

    app.config(function ($routeProvider,$locationProvider) {
        $locationProvider.hashPrefix('');
        $routeProvider.when("/", {
            controller: "ValueCtrl",
            controllerAs: "vm",
            templateUrl: "app/Views/mainView.html"
        });

        $routeProvider.when("/login/", {
            controller: "UserCtrl",
            controllerAs: "vm",
            templateUrl: "app/User/loginView.html"
        });

        $routeProvider.when("/register/", {
            controller: "UserCtrl",
            controllerAs: "vm",
            templateUrl: "app/User/registerView.html"
        });

        $routeProvider.otherwise({ redirectTo: "/" });
    });
})();