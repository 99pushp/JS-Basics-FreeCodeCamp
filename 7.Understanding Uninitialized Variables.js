/*
When JavaScript variables are declared, they have an initial value of undefined. 
If you do a mathematical operation on an undefined variable your result will be NaN which means "Not a Number".
If you concatenate a string with an undefined variable, you will get a string of undefined.
 */

var ud1;
console.log(typeof(ud1));


let ud2;
console.log(typeof(ud2));


//SyntaxError: Missing initializer in const declaration
/*const x;
console.log(x);
*/

//mathematical operation with undefined = undefined

console.log(ud1*5);

//concatenate a string with an undefined variable, you will get a string of undefined.

var t = ud1+"abc";

console.log(t);

