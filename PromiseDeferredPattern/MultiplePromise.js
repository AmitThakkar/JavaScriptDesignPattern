/**
 * Created by Amit Thakkar on 25/6/14.
 */
(function () {
    "use strict";

    var Q = require("../q"),
        getUserName = function () {
            var deferred = Q.defer(),
                resolvedTime = Math.floor(Math.random() * 2000);
            setTimeout(function () {
                deferred.resolve(["Amit", "PI", "Kushal"]);
            }, resolvedTime);
            return deferred.promise;
        },
        getCompanyName = function () {
            var deferred = Q.defer(),
                resolvedTime = Math.floor(Math.random() * 2000);
            setTimeout(function () {
                deferred.resolve(["Intelligpape", "Ongraph", "Code Chutney"]);
            }, resolvedTime);
            return deferred.promise;
        };
    var promises = [];
    promises.push(getCompanyName());
    promises.push(getUserName());
    Q.all(promises).done(function (names) {
        console.log("Names: ", names);
    });
})();