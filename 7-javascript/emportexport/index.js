// //importing single fucntion
// import add from './math.js';// you need to write extension of the file.
// let a = 10;
// let b = 20;
// let sum = add;
// console.log(a,"from the ",sum(a,b))


//importint multiple fucntions

import {add,toString} from './math.js';// you need to write extension of the file.
let a = 10;
let b = 20;
let sum = add;
console.log(a,"from the ",sum(a,b),"tostring",toString(a,b));
