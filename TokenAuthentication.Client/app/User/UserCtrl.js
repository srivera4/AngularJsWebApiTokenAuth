(function () {
    "use strict";

    var app = angular.module('myApp');

    app.controller("UserCtrl", function (userAccountService, currentUser, $location) {

        var vm = this;

        vm.isLoggedIn = function () {
            return currentUser.getProfile().isLoggedIn;
        }

        vm.message = "";
        vm.userData = {
            userName: "",
            email: "",
            password: "",
            confirmPassword: ""
        };

        vm.registerUser = function () {
            vm.userData.confirmPassword = vm.userData.password;

            var promiseRegister = userAccountService.registration(vm.userData);

            promiseRegister.then(function (resp) {
                vm.confirmPassword = "";
                vm.message = "Registration successful";
                vm.login();
            }, function (err) {
                alert(err.statusText);
            });            
        }

        vm.login = function () {
            vm.userData.grant_type = "password";
            vm.userData.userName = vm.userData.email;

            var promiseLogin = userAccountService.login(vm.userData);

            promiseLogin.then(function (resp) {
                vm.password = "";
                vm.message = "";
                currentUser.setProfile(vm.userData.userName, resp.data.access_token, true);
                $location.path("/");
            }, function (err) {
                vm.password = "";
                vm.isLoggedIn = false;
                vm.message = err.statusText + "\r\n";
            });
        }

        vm.logout = function () {
            currentUser.setProfile("", "", false);
        }

    });
})();