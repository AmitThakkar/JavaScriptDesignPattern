/**
 * Created by Amit Thakkar on 15/6/14.
 */
function User(name, age) {
    this.name = name;
    this.age = age;
}

var amit = new User("Amit Thakkar", 25),
    pi = new User("Shreyance", 30);

console.log("Name: ", amit.name, "And Age: ", amit.age);
console.log("Name: ", pi.name, "And Age: ", pi.age);