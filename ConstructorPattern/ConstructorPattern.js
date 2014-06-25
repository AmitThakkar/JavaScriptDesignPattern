/**
 * Created by Amit Thakkar on 15/6/14.
 */
(function () {
    "use strict";

    function Person(name, age) {
        this.name = name;
        this.age = age;
        this.toString = function () {
            return "Name: " + this.name + " And Age: " + this.age;
        };
    }

    var amit = new Person("Amit Thakkar", 25),
        pi = new Person("Shreyance", 30);

    console.log(amit.toString());
    console.log(pi.toString());
})();