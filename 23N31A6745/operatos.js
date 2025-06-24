let a = 10;
let b = 5;
console.log("Arithmetic Operators:");
console.log("a =",a,",b =",b);
let sum = a + b;
let difference = a-b;
let product = a * b;
let quotient = a/b;
let remainder = a % b;
let exponent = a ** b;

console.log("AP");
console.log("Sum:",sum);
console.log("Difference:",difference);
console.log("Product",product);
console.log("Quotient",quotient);
console.log("Remainder",remainder);
console.log("Exponent",exponent);
console.log("\n")






let x = 10;
x += 5;
x -= 3;
x *= 2;
x /= 4;
x %= 3;

console.log("Assignment Operators:");
console.log("x after assignment:", x);
console.log("\n");



let isEqual = (a == b);
let isStrictEqual = (a === b);
let isNotEqual = (a != b);
let isStrictNotEqual = (a !== b);
let isGreaterThan = (a>b);
let isLessThan = (a<b);
let isGreaterThanOrEqual = (a>=b);
let isLessThanOrEqual = (a<=b);

console.log("Comparison Operators:")
console.log("Is Equal:",isEqual);
console.log("Is Strict Equal:",isStrictEqual);
console.log("Is Not Equal:", isNotEqual);
console.log("Is Strict Not Equal:",isStrictNotEqual);
console.log("Is Greater Than:",isGreaterThan);
console.log("Is Less Than:",isLessThan);
console.log("Is Greater Than or Equal:",isGreaterThanOrEqual);
console.log("Is Less Than Or Equal:",isLessThanOrEqual);
console.log("\n");





let andOperator = (a>0 && b>0);
let orOperator = (a>0 || b < 0);
let notOperator = !(a<b);

console.log("Logical Operators:");
console.log("AND Operators:",andOperator);
console.log("OR Operators:",orOperator);
console.log("NOT Operators:",notOperator);
console.log("\n");







let bitwiseAnd = a & b;
let bitwiseOr = a / b;
let bitwiseXor = a ^ b;
let bitwiseNot = ~a;
let leftShift = a << 1;
let rightShift = a >> 1;

console.log("Bitwise Operators:");
console.log("Bitwise AND:", bitwiseAnd);
console.log("Bitwise OR:",bitwiseOr);
console.log("Bitwise XOR:",bitwiseXor);
console.log("Bitwise NOT:",bitwiseNot);
console.log("Left Shift:",leftShift);
console.log("Right Shift:",rightShift);
console.log("\n");





//Ternary Operator

let age= 18;
let eligibility = (age >= 18) ? "Eligible to vote" : "Not eligible to vote";
console.log("Ternary Operator:")
console.log("Eligibility:", eligibility);
console.log("\n");





let variableType = typeof a;
console.log("Typeof Operator:");
console.log("Type of variable 'a':", variableType);
console.log("\n");