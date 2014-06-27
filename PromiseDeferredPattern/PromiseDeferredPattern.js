/**
 * Created by Amit Thakkar on 25/6/14.
 */
(function () {
    "use strict";

    var Q = require("../q"),
        getUserName = function () {
            var deferred = Q.defer(),
                resolvedTime = Math.floor(Math.random() * 10000),
                rejectTime = Math.floor(Math.random() * 10000),
                processTotalTime = resolvedTime < rejectTime ? resolvedTime : rejectTime,
                processSentInterval = processTotalTime / 10,
                processed = 0;
            setTimeout(function () {
                deferred.resolve(["Amit", "PI", "Kushal"]);
            }, resolvedTime);
            setTimeout(function () {
                deferred.reject(new Error("Server Error"));
            }, rejectTime);
            setTimeout(function a() {
                deferred.notify(processed += 10);
                if (processed < 90) {
                    setTimeout(a, processSentInterval);
                }
            }, processSentInterval);
            return deferred.promise;
        },
        successHandler = function (names) {
            console.log("Names: ", names);
        },
        errorHandler = function (error) {
            console.log("Error: ", error);
        },
        processHandler = function (progress) {
            console.log("Process: ", progress, "%")
        };

    getUserName().then(successHandler, errorHandler, processHandler);
})();