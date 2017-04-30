(function () {
    "use strict";
    
    var app = angular.module('networkServices');

    app.service('currentUser', function () {
        var profile = {
            isLoggedIn: false,
            userName: '',
            token: ''
        };

        var setProfile = function (userName, token, isAuthenticated) {
            profile.userName = userName;
            profile.token = token;
            profile.isLoggedIn = isAuthenticated;
        };

        var getProfile = function () {
            return profile;
        }

        return {
            setProfile: setProfile,
            getProfile: getProfile
        };
    });
})();