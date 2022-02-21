"use strict";
let user;
user = {
    name: "Alvin",
    age: 30,
    greet(phrase) {
        console.log(phrase + " " + this.name);
    },
};
user.greet("Hi I am Alvin Okoro");
