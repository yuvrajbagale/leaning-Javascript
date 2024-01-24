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

// let lastName = "yuvi";
// let oldLastName = lastName;
// let newLastName = "akshay";
// console.log(lastName, newLastName);

// referance object
// const jassica = {
//   fristName: "pooja",
//   lastName: "Puranik",
//   age: 23,
// };

// const marriedJassica = jassica;
// marriedJassica.lastName = "Bagale";
// console.log("Before Marriage:", jassica);
// console.log("after Marriage:", marriedJassica);

// // copy objectj
// const jassica2 = {
//   fristName: "Pooja",
//   lastName: "Puranik",
//   age: 23,
//   family: ["rushi", "prasad"],
// };
// const JassicaCopy = Object.assign({}, jassica2); // assined new object
// JassicaCopy.lastName = "Bagale";

// JassicaCopy.family.push("yuvi");
// JassicaCopy.family.push("sid");

// console.log("Before marriage:", jassica2);
// console.log("After marriage:", JassicaCopy);
/**
 * 

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, //Open 24 hours
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    console.log(
      `Order Recived! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} we will delvered this ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`here is you fev pizza order ${ing1} , ${ing2} and ${ing3}`);
  },
  orderPizza: function (mainIngredient, ...otheringredient) {
    console.log(mainIngredient);
    console.log(otheringredient);
  },
};

// restaurant.numGuests = 0;
const guests = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guests);

// Nulish: null and undefined (NOt 0 or '')
const guestsCorrect = restaurant.numGuests ?? 10;
console.log(guestsCorrect);

// use ANY data type, return Any datatype short-circuiting
// console.log("----OR-----");
// console.log(3 || "yuvi");
// console.log("" || "yuvi");
// console.log(true || 0);
// console.log(undefined || null);
 */
// console.log(undefined || 0 || "" || "hello" || 23 || null);
// restaurant.numGuests = 23;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);

// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);

// console.log("-----AND--------");
// console.log(0 && "yuvi");
// console.log(7 && "yuvi");
// console.log("hello" && 23 && null && "yuvi");

// //Practical Example
// if (restaurant.orderPizza) {
//   restaurant.orderPizza("mashroom", "spinach");
// }

// restaurant.orderPizza && restaurant.orderPizza("mashroom", "spinach");
//REST, becouse on LEFT side of =
// const arr = [1, 2, ...[3, 4]];
// console.log(arr);

// //Rest, becouse on left side of
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// const [pizza, , Risotto, ...othersFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, Risotto, othersFood);

// //object
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(sat, weekdays);

// // 2 funtion
// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) sum += numbers[i];
//   console.log(sum);
// };
// add(1, 2);
// add(5, 3, 7, 2);
// add(8, 2, 5, 3, 2, 1, 4);

// const x = [23, 5, 7];
// add(...x);

// restaurant.orderPizza("mushroom", "onian", "olives", "spinach");
// restaurant.orderPizza("mushrooms");
// restaurant.orderPizza("onian");
//The spread opreter
// restaurant.orderDelivery({
//   time: "22:30",
//   address: "Via del Sole, 21",
//   mainIndex: 2,
//   starterIndex: 2,
// });

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// const { menu = ["Choose the Menu"], starterMenu: staters = [] } = restaurant;
// console.log(menu, staters);

// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// const newArr = [1, 2, ...arr];
// console.log(newArr);

// console.log(...newArr);

// use full example
// const newMenu = [...restaurant.mainMenu, "Gnocci"];
// console.log(newMenu);

//Copy array
// const mainMenuCopy = [...restaurant.mainMenu];
// console.log(mainMenuCopy);

//join 2 arrays
// const joinMenu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(joinMenu);

// iterables: array, string, maps, sets NOT objects
// const str = "yuvraj";
// const letters = [...str, "", ".s"];
// console.log(letters);
// console.log(...str);
// console.log("y", "j");

//real world example
// const ingredients = [
// prompt("let's make pesta! ingredients 1?"),
// prompt("ingredients2?"),
// prompt("ingredients3?"),
// ];
// console.log(ingredients);

// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// restaurant.orderPasta(...ingredients);

// //object
// const newRestarant = { foundedIn: 2021, founder: "Yuvi", ...restaurant };
// console.log(newRestarant);

// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = "Ristorante Roma";
// console.log(restaurantCopy.name);
// console.log(restaurant.name);
//Mutating variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };

// ({ a, b } = obj);
// console.log(a, b);

//Nested object
// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);
// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;
// console.log(x, y, z);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// swiatching veriables
// let temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// const [stater, mainscores] = restaurant.order(2, 0);
// console.log(stater, mainscores);

// const nested = [2, 3, [4, 5]];
// // const [i, , j] = nested;
// const [i, , [j, k]] = nested;
// console.log(i, j, k);
// Coding Challenge #1

/* 
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.

TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

GOOD LUCK 😀
*/

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//1
const [player1, player2] = game.players;
console.log(player1, player2);

//2
const [gk, ...fildPlayer] = player1;
console.log(gk, fildPlayer);
//3
const allPlayers = [...player1, ...player2];
console.log(allPlayers);
//4
const playerFinal = [...player1, "Thiago", "Coutinho", "Periscic"];
//5
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

const printGols = function (...players) {
  console.log(players);
  console.log(`${players.length} goals were scored`);
};

// printGols("Davies", "Muller", "Lewandowski", "Kimmich");
// printGols("Davies", "Muller");
printGols(...game.scored);

team1 < team2 && console.log("Team 1 is more likly win");
team1 > team2 && console.log("Team 2 is more likly win");
