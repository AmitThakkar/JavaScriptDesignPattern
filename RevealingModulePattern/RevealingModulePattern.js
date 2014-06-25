/**
 * Created by amit on 19/6/14.
 */
(function () {
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
            insert = function (user) {
                users.push(user);
            },
            getAll = function () {
                return users.slice();
            },
            deleteAll = function () {
                users = [];
                return "DONE";
            },
            removeAll = function (password) {
                if (password == "amit") {
                    return deleteAll();
                } else {
                    return "Wrong Password";
                }
            };
        return {
            addUser: insert,
            getUsers: getAll,
            removeAllUsers: removeAll
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
})();