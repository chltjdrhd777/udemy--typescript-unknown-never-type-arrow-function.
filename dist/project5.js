// unkown type
let userInput; //is analogous to any but there is one difference
userInput = 5;
userInput = "string";
let userName;
//userName = userInput; --->error because unknown is not asignable to string.
userInput = userName; // but it is acceptable because userInput is like any.
if (typeof userInput === "string") {
    userName = userInput;
} // If i assign string type to unknown, then it acts as string.
//never type
//function generateError(message: string, code: number): never {
//  throw { message: message, errorCode: code };
//}
//generateError("Error!", 500); //notice error with the form of {message :'Error!', errorcode:500}
//type never means crash and break our codes and return never.
//Therefore, the next things placed are all influenced like "cannot use const, let....etc"
// arrow function
function ad(a, b) {
    return a + b;
} // shortening this code
const add = (a, b) => a + b;
console.log(add(2, 5));
//and we can also omit round bracket like that
const printOut = output => console.log(output);
printOut(add(2, 5));
//# sourceMappingURL=project5.js.map