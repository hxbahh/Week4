//Symbol
//A Symbol is a unique and immutable primitive value used as an identifier for object properties.
let id = Symbol("id");
let user = {
  name: "Hiba",
  [id]: 12345
};

console.log(user[id]); // 12345
console.log(Object.keys(user)); // ['name'] (Symbol is hidden)

//BigInt
//BigInt is used for very large integers that cannot be represented by the regular Number type (which is limited to 2⁵³ - 1)
let a = 9007199254740991n;  // This is larger than Number.MAX_SAFE_INTEGER
let b = 1n;

console.log(a + b); // 9007199254740992n

let big = 10n;
let num = 5;
console.log(big + num); // TypeError