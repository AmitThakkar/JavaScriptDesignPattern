/**
 * Created by amit on 22/6/14.
 */
"use strict";

var Builder = (function () {
    var getPrice = function (floor, countOfRoom) {
        var price;
        switch (floor) {
            case 0:
                price = 5000;
                break;
            case 1:
                price = 5100;
                break;
            case 2:
                price = 4500;
                break;
            case 3:
                price = 4000;
                break;
            case 4:
                price = 3500;
                break;
            case 5:
                price = 3000;
                break;
            case 6:
                price = 2500;
                break;
        }
        switch (countOfRoom) {
            case 1:
                price = price * 1000;
                break;
            case 2:
                price = price * 1500;
                break;
            case 3:
                price = price * 1900;
                break;
        }
        return price;
    };
    return {
        rate: getPrice
    }
})();

console.log(Builder.rate(3, 3));
console.log(Builder.rate(5, 2));
console.log(Builder.rate(5, 3));