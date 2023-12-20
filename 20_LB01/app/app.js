/*
Sample output
$ node app.js
Price or age are not defined! Try again.

$ node app.js 50 5
With age 5 years: Free entrance!

$ node app.js 50 7
With age 7 years: You will get a 50.00% discount!Pay CHF 25.00

$ node app.js 50 15
With age 15 years you get 50% discount! Pay CHF 25.00.

$ node app.js 50 21
With age 21 years you get NO discount! Pay CHF 50.00.

$ node app.js 50 21 true
With age 21 years you get 30% discount! Pay CHF 35.00.

$ node app.js 50 65
With age 65 years you get 30% discount! Pay CHF 35.00.
 */
'use strict';
const app = require("./price");
let args = process.argv.slice(2);
let price = args[0];
let age = args[1];
let isStudent = args[2];
console.log(`${app.price(price,age,isStudent)}`);
