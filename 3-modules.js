// GLOBALS

// __dirname
// __filename
// require function to use modules (common JS)
// module info about current module(file)
// process info about where the program is being executed

// console.log(__dirname)
// setInterval(() => {
//  console.log('hello world');
// }, 1000);

// MODULES

const names = require("./4-names");
const sayHi = require("./5-utils");
const data = require("./6-alternative-flavor");
require("./7-mind-grenade");
// console.log(data);
// // console.log(names.john);
sayHi("susan");
sayHi(names.john);
sayHi(names.peter);
