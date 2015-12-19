const numberly = require("../lib");

// Get a pseudo number hash for this string
console.log(numberly("Hello World"));
// => 1052

// Get it again, for the same string (it should be equal)
console.log(numberly("Hello World"));
// => 1052

// Now, let's do the same for this string
console.log(numberly("Hello Mars!"));
// => 968

// Limit the number between 0 and 20
console.log(numberly("Hello Mars!", 0, 20));
// => 8

// Limit the number between 10 and 20
console.log(numberly("Hello Mars!", 10, 20));
// => 18
