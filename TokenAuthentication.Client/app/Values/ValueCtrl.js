(function () {
    "use strict";

    var app = angular.module('myApp');

    app.controller("ValueCtrl", function (valueService, currentUser) {

        var vm = this;

        vm.values = [];

        getValues();

        function getValues() {
            var promiseEvent = valueService.getValues(currentUser);

            promiseEvent.then(function (resp) {
                vm.message = "";
                vm.values = resp.data;
            }, function (err) {
                vm.message = err.statusText;
            });
        }

    });
})();