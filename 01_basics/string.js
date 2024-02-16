// ********** Operations ************

let value = 3
let negvalue = -value
console.log(negvalue);

console.log(2+2);
console.log(2-2);
console.log(2/2);
console.log(2*2);
console.log(2**2);

let str1 = "Hello"
let str2 = " Vinit"

let str3 = str1 + str2
console.log(str3)

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");

console.log((3 + 4) * 5 % 3);


let gamecounter = 100
++gamecounter;
console.log(gamecounter);

//****** Postfix Increment*******
// let gameCounter = 100
// ++gameCounter;
// console.log(gameCounter);

// let x = 3 // This line declares a variable named x and assigns it the value of 3.
// let y = x++ // ek 'y' nam ka variable declare kia phir y ko value of x assign kiya phir x ko increment kiya means current value of x is 4
// console.log(x);// To print x
// console.log(y)

let x = 4
let y = ++x;
// console.log(y);const y = ++x; This line declares a constant variable named y and assigns it the value of x. However, because of the prefix increment operator (++x), the value of x is incremented before it is used in the assignment. Therefore, x is incremented to 4, and then 4 is assigned to y.
console.log( "value of x is", x);
console.log( "value of y is", y);