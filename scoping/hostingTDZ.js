"use strict";

//exmaple
// console.log(undefined);
// if (!numProducts) deleteShoppingCart();

// var numProducts = 10;

// function deleteShoppingCart() {
//   console.log("All Product delete");
// }

// let age = 30;
// let oldAge = age;
// age = 31;
// console.log(age);
// console.log(oldAge);

// const me = {
//   name: "jonas",
//   age: 30,
// };

// const friend = me;
// friend.age = 27;
// console.log("friend:", friend);
// console.log("me", me);

let lastName = "yuvi";
let oldLastName = lastName;
let newLastName = "akshay";
console.log(lastName, newLastName);

// referance object
const jassica = {
  fristName: "pooja",
  lastName: "Puranik",
  age: 23,
};

const marriedJassica = jassica;
marriedJassica.lastName = "Bagale";
console.log("Before Marriage:", jassica);
console.log("after Marriage:", marriedJassica);

// copy objectj
const jassica2 = {
  fristName: "Pooja",
  lastName: "Puranik",
  age: 23,
};
const JassicaCopy = Object.assign({}, jassica2); // assined new object
JassicaCopy.lastName = "Bagale";
console.log("Before marriage:", jassica2);
console.log("After marriage:", JassicaCopy);
