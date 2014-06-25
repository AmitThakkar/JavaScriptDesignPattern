/**
 * Created by amit on 19/6/14.
 */
"use strict";

function User(name, age) {
    this.name = name;
    this.age = age;
    this.toString = function () {
        return "Name: " + this.name + " And Age: " + this.age;
    };
}

var UserManagement = (function () {
    var users = [],
        removeAll = function () {
            users = [];
            return "DONE";
        };
    return {
        addUser: function (user) {
            users.push(user);
        },
        getUsers: function () {
            return users.slice();
        },
        removeAllUsers: function (password) {
            if (password == "amit") {
                return removeAll();
            } else {
                return "Wrong Password";
            }
        }
    };
})();

UserManagement.addUser(new User("Amit Thakkar", 25));
UserManagement.addUser(new User("Shreyance", 30));
var users = UserManagement.getUsers();
users.push(new User("PI", 32));
console.log("Local User List: ", users);
console.log("\n\n\n==================================================================================");
console.log("Remote User List: ", UserManagement.getUsers());
console.log("\n\n\n==================================================================================");
console.log("Remove Users Result with no or Wrong Password", UserManagement.removeAllUsers());
console.log("\n\n\n==================================================================================");
console.log("Remove Users Result with correct Password", UserManagement.removeAllUsers("amit"));
console.log("\n\n\n==================================================================================");
console.log("Local User List: ", users);
console.log("\n\n\n==================================================================================");
console.log("Remote User List: ", UserManagement.getUsers());