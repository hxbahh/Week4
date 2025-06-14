
//short circuiting
//JavaScript stops evaluating an expression as soon as the result is known.

//logical OR- returns the first truthy value
console.log(null || 0 || "Hiba" || 21); // "Hiba"
//null - falsy
//0 - falsy
//"Hiba" - truthy - returned
//21 is not even checked

//logical &&- returns first falsy values
console.log(10 && "hello" && 0 && "world"); // 0
// 10 → truthy
// "hello" → truthy
// 0 → falsy →  returned
// "world" is not even checked