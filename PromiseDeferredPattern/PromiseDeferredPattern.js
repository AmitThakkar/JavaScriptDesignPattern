/**
 * Created by Amit Thakkar on 25/6/14.
 */
(function () {
    "use strict";

    var Q = require("../q");

    function getUserName() {
        var deferred = Q.defer();
        setTimeout(function () {
            deferred.resolve(["Amit", "PI", "Kushal"]);
        }, 2000);
        return deferred.promise;
    }

    getUserName()
        .then(function () {
            console.log(arguments);
        });
})();

