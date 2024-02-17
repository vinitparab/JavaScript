const name = "Vinit "
const repocount = 1

// console.log(name + repocount);
console.log(`Hello my name is ${name}and my repo count is ${repocount}`);

const gamename = new String('vinithc')
console.log(gamename[0])
console.log(gamename.__proto__);

console.log(gamename.length);
console.log(gamename.toUpperCase())
console.log(gamename.charAt(2));
console.log(gamename.indexOf('v'));

const newstring = gamename.substring(0,4)
console.log(newstring)

const anotherstring = gamename.slice(-4,4)
console.log(anotherstring);

const string1 = "   Vinit   "
console.log(string1);
console.log(string1.trim());