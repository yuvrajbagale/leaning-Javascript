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

const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const openingHours = {
  [weekdays[1]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, //Open 24 hours
    close: 24,
  },
};

const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  //Es6  enhacesed object literals
  openingHours,
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  orderDelivery({ starterIndex, mainIndex, time, address }) {
    console.log(
      `Order Recived! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} we will delvered this ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(`here is you fev pizza order ${ing1} , ${ing2} and ${ing3}`);
  },
  orderPizza(mainIngredient, ...otheringredient) {
    console.log(mainIngredient);
    console.log(otheringredient);
  },
};

/////////////String//////////////////
const planeTxt =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima atque accusamus quis blanditiis, nobis voluptatum, explicabo eius enim officiis inventore soluta ut voluptatibus tenetur corrupti dicta odit fugiat ab illo! Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis natus harum ullam nobis quas non ipsam suscipit, voluptatum, illum beatae eos atque dolor ipsa saepe quibusdam sunt quaerat doloremque incidunt?";
const airline = "TAP Air India";
const plane = "A320";
console.log(plane[0]);
console.log(plane[1]);
console.log(plane[2]);
console.log(plane[3]);
console.log("yuvraj"[0]);
console.log(airline.length);
console.log(plane.length);

console.log(airline.indexOf("a"));
console.log(airline.lastIndexOf("a"));
console.log(airline.indexOf("india"));

console.log(airline.slice(4));
console.log(planeTxt.slice(0, planeTxt.indexOf(" ")));
console.log(planeTxt.slice(planeTxt.lastIndexOf(" ") + 1));
console.log(planeTxt.length);

//Set
// const orderSet = new Set([
//   "Pasta",
//   "Pasta",
//   "Pasta",
//   "risotto",
//   "Pasta",
//   "Pizza",
//   "Pizza",
//   "Pizza",
// ]);
// console.log(orderSet);
// console.log(orderSet.size);
// console.log(new Set("Yuvraj"));
// console.log(orderSet.has("Pizza"));
// console.log(orderSet.has("Bread"));
// orderSet.add("Sandwich");
// orderSet.add("Mazza");
// orderSet.delete("Pizza");
// console.log(orderSet);
// console.log(orderSet.size);

// for (const order of orderSet) console.log(order);

// //Example
// const staff = ["waiter", "chef", "waiter", "manager", "chef", "waiter"];
// const staffUnique = [...new Set(staff)];
// console.log(staffUnique);

// console.log(
//   new Set(["waiter", "chef", "waiter", "manager", "chef", "waiter"]).size
// );

// Use forEach to iterate over the Set
// staff.forEach((value) => {
//   console.log(value);
// });

// const questions = new Map([
//   ["question", "What is the best programming language in the world?"],
//   [1, "C"],
//   [2, "Java"],
//   [3, "JavaScript"],
//   ["Correct", 3],
//   [true, "Correct"],
//   [false, "Try Again!"],
// ]);
// console.log(questions);

//Convert Object to Map
// console.log(Object.entries(openingHours));
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

//Quiz App
// console.log(questions.get("question"));
// for (const [key, value] of questions) {
//   if (typeof key === "number") console.log(`Answer ${key}: ${value}`);
// }
// const answer = 3;
// const answer = Number(prompt("Your answer"));
// console.log(answer);
// console.log(questions.get(questions.get("Correct") === answer));

// Convert map to array
// console.log([...questions]);
// console.log([questions.entries()]);
// console.log([...questions.keys()]);
// console.log([...questions.values()]);
// Maps: Fundamentals

// const rest = new Map();
// rest.set("name", "Classico Italiano");
// rest.set(1, "Firenze, Italy");
// console.log(rest.set(2, "Lisbon, Portugal"));

// rest
//   .set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
//   .set("open", 11)
//   .set("close", 23)
//   .set(true, "We are open :D")
//   .set(false, "We are closed :(");

// console.log(rest.get("name"));
// console.log(rest.get(true));
// console.log(rest.get(1));

// const time = 8;
// console.log(rest.get(time > rest.get("open") && time < rest.get("close")));

// console.log(rest.has("categories"));
// rest.delete(2);
// // rest.clear();

// const arr = [1, 2];
// rest.set(arr, "Test");
// rest.set(document.querySelector("h1"), "Heading");
// console.log(rest);
// console.log(rest.size);

// console.log(rest.get(arr));

/**

const properties = Object.keys(openingHours);
console.log(properties);

let openStr = `we are open on ${properties.length} days: `;
for (const day of properties) {
  openStr += `${day} `;
}
console.log(openStr);

//Property Values
const values = Object.values(openingHours);
console.log(values);

//Entire Object
const entries = Object.entries(openingHours);
// console.log(entries);

//[key, value]
for (const [key, { open, close }] of entries) {
  console.log(`on ${key} we opent at ${open} and close at ${close}`);
}
 */
// if (restaurant.openingHours && restaurant.openingHours.mo)
//   console.log(restaurant.openingHours.mo.open);

// With optional chaining
// console.log(restaurant.openingHours.mo?.open);
// console.log(restaurant.openingHours?.mo?.open);

/** Example - real time example here on optional chaining */
// const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
// for (const day of days) {
//   const open = restaurant.openingHours[day]?.open ?? "cloased";
//   console.log(`on ${day}, we open at ${open}`);
// }

//Methodes
// console.log(restaurant.order?.(0, 1) ?? "Method does not exist");
// console.log(restaurant.orderRisotto?.(0, 1) ?? "method does not exist");

//Array
// const users = [{ name: "yuvraj", email: "hello@jonas.io" }];
// const users = [];
// console.log(users[0]?.name ?? "user array empty");

// if (users.length > 0) console.log(users[0].name);
// else console.log("user array empty");

// for looping for arrayty
// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menu);

// for (let item of menu) console.log(item);

// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}:${el}`);
// }

// console.log(restaurant);

// restaurant.numGuests = 0;
// const guests = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests);

// Nulish: null and undefined (NOt 0 or '')
// const guestsCorrect = restaurant.numGuests ?? 10;
// console.log(guestsCorrect);

// use ANY data type, return Any datatype short-circuiting
// console.log("----OR-----");
// console.log(3 || "yuvi");
// console.log("" || "yuvi");
// console.log(true || 0);
// console.log(undefined || null);

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

// const game = {
//   team1: "Bayern Munich",
//   team2: "Borrussia Dortmund",
//   players: [
//     [
//       "Neuer",
//       "Pavard",
//       "Martinez",
//       "Alaba",
//       "Davies",
//       "Kimmich",
//       "Goretzka",
//       "Coman",
//       "Muller",
//       "Gnarby",
//       "Lewandowski",
//     ],
//     [
//       "Burki",
//       "Schulz",
//       "Hummels",
//       "Akanji",
//       "Hakimi",
//       "Weigl",
//       "Witsel",
//       "Hazard",
//       "Brandt",
//       "Sancho",
//       "Gotze",
//     ],
//   ],
//   score: "4:0",
//   scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
//   date: "Nov 9th, 2037",
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// //1
// const [player1, player2] = game.players;
// console.log(player1, player2);

// //2
// const [gk, ...fildPlayer] = player1;
// console.log(gk, fildPlayer);
// //3
// const allPlayers = [...player1, ...player2];
// console.log(allPlayers);
// //4
// const playerFinal = [...player1, "Thiago", "Coutinho", "Periscic"];
// //5
// const {
//   odds: { team1, x: draw, team2 },
// } = game;
// console.log(team1, draw, team2);

// const printGols = function (...players) {
//   console.log(players);
//   console.log(`${players.length} goals were scored`);
// };

// // printGols("Davies", "Muller", "Lewandowski", "Kimmich");
// // printGols("Davies", "Muller");
// printGols(...game.scored);

// team1 < team2 && console.log("Team 1 is more likly win");
// team1 > team2 && console.log("Team 2 is more likly win");

//Coding Challenge 2
// Coding Challenge #2

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/
/**
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

for (const [i, plyer] of game.scored.entries()) {
  console.log(`Gols ${i + 1}:${plyer}`);
}

const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) average += odd;
average /= odds.length;
console.log(average);

//3.
for (const [team, odd] of Object.entries(game.odds)) {
  // console.log(team, odd);
  const teamStr = team === "x" ? "draw" : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr} ${odd}`);
}
/**
 * Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
*/

// const scorers = {};
// for (const player of game.scored) {
//   scorers[player] ? scorers[player]++ : (scorers[player] = 1);
// }
// console.log(scorers);

//Codeing challenge 3
/*
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL
*/
/**

const gameEvents = new Map([
  [17, "⚽️ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽️ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽️ GOAL"],
  [80, "⚽️ GOAL"],
  [92, "🔶 Yellow card"],
]);

// console.log(gameEvents.values());

const events = [...new Set(gameEvents.values())];
console.log(events);

//2
gameEvents.delete(64);
// console.log(gameEvents);

//3
console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
);

const time = [...gameEvents.keys()].pop(); //pop use have used to getting last element on arrya
console.log(time);
console.log(
  `An event happened, on average, every ${time / gameEvents.size} minutes`
);

//4.
for (const [min, event] of gameEvents) {
  const half = min <= 45 ? "FIRST" : "SECOND";
  console.log(`[${half} HALF] ${min}:${event}`);
}
 */
