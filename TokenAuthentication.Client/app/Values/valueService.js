(function () {
    "use strict";

    var app = angular.module('networkServices');

    app.service('valueService', function ($http, appSettings) {
        return ({
            getValues: getValues
        });

        function getValues(user) {

            var accessToken = user.getProfile().token;

            var authHeaders = {};

            if (accessToken) {
                authHeaders.Authorization = 'Bearer ' + accessToken;
            }

            var resp = $http({
                url: appSettings.serverPath + '/api/Values',
                method: 'GET',
                headers: authHeaders
            });

            return resp;
        }
    });
})();