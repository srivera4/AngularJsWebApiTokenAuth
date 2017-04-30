(function () {
    "use strict";

    var app = angular.module("networkServices");

    app.service("userAccountService", function ($http, appSettings) {
    
        return ({
            registration: registration,
            login: login
        });

        function registration(userInfo) {

            var resp = $http({
                url: appSettings.serverPath + "/api/Account/Register",
                method: "POST",
                data: userInfo
            });

            return resp;
        }

        function login(userLogin) {
            var data = "grant_type=password&username=" + userLogin.userName + "&password=" + userLogin.password;

            var resp = $http.post(appSettings.serverPath + "/TOKEN", data, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } });

            return resp;
        }

    });
})();