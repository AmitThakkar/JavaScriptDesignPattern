/**
 * Created by Amit Thakkar on 28/6/14.
 */


var Builder = (function () {
    function Home(options) {
        var roomCount = 2,
            Kitchen = function () {
            },
            Room = function () {
            },
            Hall = function () {
            };
        this.kitchen = new Kitchen();
        this.hall = new Hall();
        this.rooms = [];
        for (var count = 1; count <= roomCount; count++) {
            this.rooms.push(new Room());
        }
        this.toString = function () {
            return roomCount + "BHK Home";
        };
    }

    return {
        buyHome: function (options) {
            return new Home(options);
        }
    };
})();

var home2BHK = Builder.buyHome({rooomCount: 2});
var home1BHK = Builder.buyHome({rooomCount: 1});

console.log(home1BHK.toString());
console.log(home2BHK.toString());