// const xyz = require("./people"); //import people file into modules

// console.log(xyz.people, xyz.ages); //this returns an empty object

// console.log(people); // this returns undefined --> have to manually export file

//destructure:
const { people, ages } = require("./people");

console.log(people, ages);

// to look into operating system

const os = require("os"); // built into node

console.log(os.platform(), os.homedir()); // to learn about operating system
