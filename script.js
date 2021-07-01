"use strict";

// const restaurant = {
//   name: "Classical Italiano",
//   location: ["Kolkata", "Mumbai", "Delhi", "Bangalore"],
//   categories: ["Italian", "Pizzeria", "Vegeterain", "Organic"],
//   starterMenu: ["Garlic Bread", "Salad", "Focaccia", "Bruschetta"],
//   mainMenu: ["Pizza", "Pasta", "Risotto"],

//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },
// };

// const arr = [1, 2, 3];
// // console.log(arr);
// // const x = arr[0];
// // const y = arr[1];
// // const z = arr[2];
// // console.log(x, y, z);

// // Destructuring an array

// const [a, b, c] = arr;
// console.log(a, b, c);

// // takes the  first and second

// // const [first, second] = restaurant.categories;
// // console.log(first, second);

// // now for some reason we want to choose first and third -> so leave space for the 2nd

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// // Swapping
// // const temp = main;
// // main = secondary;
// // secondary = temp;

// // console.log(main, secondary);

// // better method

// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// console.log(restaurant.order(2, 0));

// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// const nested = [2, 4, [5, 6]];
// // const [i, , j] = nested;
// // console.log(i, j);

// // destructuring inside destructuring

// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// // Default values
// // when data comes from an API
// const [p = 1, q = 1, r = 1] = [2, 5];
// console.log(p, q, r);

// destructuring objects

// const restaurant = {
//   name: "Classico Italiano",
//   location: "Via Angelo Tavanti 23, Firenze, Italy",
//   categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
//   starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
//   mainMenu: ["Pizza", "Pasta", "Risotto"],

//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },
//   orderDelivery: function ({
//     starterIndex = 1,
//     mainIndex = 0,
//     time = "20:00",
//     address,
//   }) {
//     console.log(
//       `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`
//     );
//   },

//   orderPasta: function (ing1, ing2, ing3) {
//     console.log(
//       `here is your delicious pasta with ${ing1},${ing2} and ${ing3}`
//     );
//   },
//   // it needs atleast one argument but in case multiple arguments are involved using REST parameter is a better option
//   orderPizza: function (mainIngredient, ...otherIngredients) {
//     console.log(mainIngredient);
//     console.log(otherIngredients);
//   },
// };

// order wont matter in case of function parameter when parameter is an object

// restaurant.orderDelivery({
//   time: "22:30",
//   address: "Via del Solo, 21",
//   mainIndex: 2,
//   starterIndex: 2,
// });

// restaurant.orderDelivery({
//   address: "Via del Solo, 21",
// });
// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// let a = 111;
// let b = 121;
// const obj = { a: 121, b: 3, c: 13 };
// ({ a, b } = obj);
// console.log(a, b);

// nested objects

// const { fri } = openingHours;
// console.log(fri);

// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);

// Lecture: Spread Operators

// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// const newArr = [...arr, 1, 2, ...arr];
// console.log(newArr);

// const newMenu = [...restaurant.mainMenu, "Gnocci"];
// console.log(newMenu);

// copy array

// const mainMenuCopy = [...restaurant.mainMenu];
// console.log(mainMenuCopy);

// merge two arrays

// const nmenu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(nmenu);

// spread operator also works on objects
// iterables : arrays, strings, maps, sets, NOT objects

// const str = "Kanisht";
// const letters = [...str, " ", "A."];
// console.log(letters);
// console.log(...str);

//  the below code wont work !
// console.log(`${...str} Agarwal`);

// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt("Ingredient 2?"),
//   prompt("Ingredient 3"),
// ];
// console.log(ingredients);

// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// restaurant.orderPasta(...ingredients);

// Objects

// const newRestaurant = { foundedIn: 1998, ...restaurant, founder: "Guiseppe" };
// console.log(newRestaurant);

// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = "El Dorado";

// console.log(restaurantCopy.name);
// console.log(restaurant.name);

// Lecture : Rest Pattern and Parameters

// same syntax as of spread
// works opposite as of spread
// collect multiple elements and condenses them into a single array

// spread : because on right side of assignment operator
const arr = [1, 2, ...[3, 4]];

console.log(arr);

// REST : used left of assignment operator
const [a, b, ...others] = arr;
console.log(a, b, others);
// the REST element must be the last element
// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherFood);

// Objects

// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// Functions

const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(numbers, sum);

  return sum;
};

add(2, 3);
add(5, 3, 7, 2);
add(5, 3, 7, 2, 1, 4);

// first spread and pass and then use rest and add them up

// const x = [23, 5, 7];
// add(...x);

// restaurant.orderPizza("mushrooms", "onion", "olives", "spinach");
// restaurant.orderPizza("muahrooms");

// they can return any data type , use any data type and can perform short circuiting

// if the first operand is truthy value it will return it immediately

console.log("------OR------");

console.log(3 || "Johnas");
console.log("" || "Johnas");
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || "" || "hello" || 23 || null);

// restaurant.numGuests = 0;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;

// console.log(guests1);
// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);

console.log("------AND------");

console.log(0 && "Johnas");
console.log(7 && "Johnas");
console.log("Hello" && 23 && null && "Johnas");

// restaurant.orderPizza && restaurant.orderPizza("mushroom", "spinach");

// nullish value for null and undefined (NOT 0 or '')
// ?? nullish coalescing operator

// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);

// Coding Challenge #1:     Date: 16/06/2021

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

// 1.
const [players1, players2] = game.players;
console.log(players1, players2);
// 2.
const [gk, ...fieldPlayers] = [...players1];
console.log(gk, fieldPlayers);
// 3. merge two arrays using spread operator
const allPlayers = [...players1, ...players2];
console.log(allPlayers);
// 4.
const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];
console.log(players1Final);
// 5.
const { team1, x: draw, team2 } = game.odds;
console.log(team1, draw, team2);
//6.
const printGoals = function (...players) {
  console.log(players);
  console.log(`${players.length} goals were scored.`);
};
printGoals("Davies", "Muller", "Lewandowski", "Kimmich");
printGoals("Davies", "Muller");
printGoals(...game.scored);
// 7.

team1 < team2 && console.log("Team 1 is more likely to win");
team1 > team2 && console.log("Team 2 is more likely to win");

// Lecture : Looping Arrays : the for-of loop  Date: 16/06/2021

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// for (const item of menu) {
//   console.log(item);
// }

// for (const [i, el] of menu.entries()) {
//   console.log(`${i + 1}: ${el}`);
// }

// Lecture : Enhanced Object Literals : Date: 16/06/2021

// first lets create an opening hours object separately and then we still want this object to be the part of the restauarnt object
// the way of writing methods have been modified

const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  // openingHours: openingHours, // restaurant object is restored again but property name and variable name are same
  // so here the role of enhanced object literals comes to play
  openingHours,

  // previous version
  // order: function (starterIndex, mainIndex) {
  //   return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  // },

  // new version
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = "20:00", address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}.`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `here is your delicious pasta with ${ing1},${ing2} and ${ing3}`
    );
  },
  // it needs atleast one argument but in case multiple arguments are involved using REST parameter is a better option
  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};
// console.log(restaurant);

// Lecture : Optional chaining

// now when we get a data from a web api there can be many restaurants which donot open on monday so lets get the opening time for such a restaurant which opens on Monday

// console.log(restaurant.openingHours.mon.open);

//  the above line of code gives an error because monday is not a part of openingHours object
// so first we need to check whether the opening hours object exists or not

// if (restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);

// now for the above code we also need to be sure that the openingHours object exists too

// so to take care of it we add

// if (restaurant.openingHours && restaurant.openingHours.mon)
// console.log(restaurant.openingHours.mon.open);

//  Now the dilemma is that the object can have a lot of nestings
//  we can't check for each parent and even if we do it will look messy

//Soln :

// with optional chaining

// if mon exists then only it goes to open else it immediately
console.log(restaurant.openingHours?.mon?.open);

const days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

for (const item of days) {
  // console.log(item);
  const open = restaurant.openingHours[item]?.open ?? "closed";
  console.log(`On ${item} we open at ${open}`);
}

// methods : application of optional chaining to check whether a method exists

console.log(restaurant.order?.(0, 1) ?? "Method doesnot exist");
console.log(restaurant.orderRisstoto?.(0, 1) ?? "Method doesnot exist");

// array : to check array is empty or not

// const users = [];
const users = [{ name: "Kanisht", email: "kanisht09@gmail.com" }];
console.log(users[0]?.name ?? "User array empty");

// Lecture : Looping Objects Object keys, values and entries , Date: 17/06/2021

// we have two options : loop over keys / keys and values both

console.log("lecture starts from here");
for (const day of Object.keys(restaurant)) {
  console.log(day);
}
// property names :
const properties = Object.keys(openingHours);
console.log(properties);
let str = ` We are open on ${properties.length} days : `;

for (const item of Object.keys(openingHours)) {
  str += `${item}, `;
}
console.log(str);

// property values
const values = Object.values(openingHours);
console.log(values);

for (const item of Object.values(openingHours)) {
  console.log(item);
}
// Entire Object
const entries = Object.entries(openingHours);
// console.log(entries);

for (const [day, { open, close }] of entries) {
  console.log(`On ${day} we open at ${open} and close at ${close}`);
}

// Coding Challenge #2  Date : 17/06/2021
// 1.
for (const [number, teamname] of game.scored.entries()) {
  console.log(`Goal ${number + 1}: ${teamname}`);
}

// 2.
let sum = 0;
const valueS = Object.values(game.odds);
for (const x of valueS) {
  sum += x;
}
const AVG = sum / valueS.length;
console.log(AVG);

// 3.
const xValues = Object.entries(game.odds);
// console.log(xValues);

for (const [x, y] of xValues) {
  const temStr = x === "x" ? "draw" : `victory ${game[x]}`;
  console.log(`Odd of ${temStr} ${y}`);
}

const scorers = {};
for (const x of game.scored) {
  scorers[x] ? scorers[x]++ : (scorers[x] = 1);
}
console.log(scorers);

// Set is an iterable

const orderSet = new Set(["hello", "hi", "hecco", "tdhd", "hi", "hii"]); // check sorting and uniqueness
// not sorted
console.log(orderSet);

console.log(new Set("Hello"));
console.log(orderSet.length);
console.log(orderSet.has("hi"));
console.log(orderSet.has("golu"));
orderSet.add("He");
orderSet.add("He");
orderSet.delete("hello");
orderSet.delete("golu"); // doest exists but still tried to delete no error
// orderSet.clear();

for (const s of orderSet) {
  console.log(s);
}
console.log(orderSet);

const staff = ["waiter", "waiter", "stuff", "chef", "stuff"];
const staffUnique = [...new Set(staff)];
console.log(staffUnique);

const rest = new Map();
rest.set("name", "Classic Italiano");
rest.set(1, "Firenze, Italy");
rest.set(2, "Lisbon,Portugal");
// no need of writting rest then set for each property again and again instead write it at once
rest
  .set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
  .set("open", 11)
  .set("close", 23)
  .set(true, "We are open :D")
  .set(false, "We are closed :(");
console.log(rest);

console.log(rest.get("name"));
console.log(rest.get(true));

const time = 21;
console.log(rest.get(time > rest.get("open") && time < rest.get("close")));

console.log(rest.has("categories"));
rest.delete(2);
// rest.clear();

// we can set arras as key

console.log(rest);
// wont work althoouh we wrote it in the same way while setting
// rest.set([1, 2],"Test"));
// console.log(rest);
// console.log(rest.get([1, 2]));

// this works
const arrr = [1, 2];
rest.set(arrr, "Test");

console.log(rest.get(arrr));

// deleting object key is not that efficient

rest.set(document.querySelector("h1"), "heading");
rest.set(document.querySelector(".search-bar"), "searching");

console.log(rest.size); // then number of keys

// better method creating a map (Avoiding the usage of set method)
const question = new Map([
  ["question", "What is the best programming language in the world ?"],
  [1, "C"],
  [2, "Java"],
  [3, "JavaScript"],
  ["correct", 3],
  [true, "Correct 🎉"],
  [false, "Try again 😅"],
]);
33;
console.log(question);

// The above structure is found below

// converts objects to map

console.log(Object.entries(openingHours));
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);
// Quiz app

console.log(question.get("question"));
for (const [key, value] of question) {
  if (typeof key === "number") console.log(`Option ${key} : ${value}`);
}

// const answer = Number(prompt("Your answer"));
// console.log(question.get(answer === question.get("correct")));
// console.log(answer);

// convert map into an array

console.log([...question]);

// coding challenge #3

const gameEvents = new Map([
  [17, "⚽ GOAL"],
  [36, "🔄 Substitution"],
  [47, "⚽ GOAL"],
  [61, "🔄 Substitution"],
  [64, "🟨 Yellow card"],
  [69, "🟥 Red card"],
  [70, "🔄 Substitution"],
  [72, "🔄 Substitution"],
  [76, "⚽ GOAL"],
  [80, "⚽ GOAL"],
  [92, "🟨 Yellow card"],
]);
// 1.
// const events = [...new Set(gameEvents.values())];
// console.log(events);
// 2.
// gameEvents.delete(64);
// console.log(gameEvents);
// 3.
const timex = [...gameEvents.keys()].pop();
console.log(timex);
console.log(
  `An event happened, on average, every ${timex / gameEvents.size} minutes`
);
// 4.
for (const [x, y] of gameEvents) {
  const timeR = x;
  const stringE = timeR > 45 ? "[SECOND HALF]" : "[FIRST HALF]";
  console.log(`${stringE} ${x}:${y}`);
}
// Lecture : Working with strings - Part-1
