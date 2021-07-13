var add = function add(){
  console.log("in function");
  var counter = 0;
  return function(){ return ++counter;}
}
// add();
var love = add();
console.log(love());
console.log(love());
console.log(love());
console.log(love());
(function(){
  console.log("in function");
})();

console.log(add);
console.log(add);
// console.log(add)

// look at following question
// console.log((function(x, f = () => x){
//   var x;
//   var y = x;
//   x = 2;
//   return [x, y, f()];
// })(1));

// function test(x,f=()=>{
//   console.log("in arrow",x); return x}){
//   var x = 3;
//   var y = x;
//   x = 2;
//   return [x,y,f()];
// }
// var x = 1;
// console.log(test(x));

// this in deferent scenerios

// case 1 calling from object and from global scope and function scope.
// 'use strict'
// let user = {
//   n:"jon",
//   a:this,
//   getN:function(){
//     console.log("from object function", this);
//     return this.n;
//   }};
// user.getN();
// console.log("from object property",user.a);

// console.log("from global",this);

// function add(){
//   console.log("from function", this);
// }
// add();

// from object's function's function
// 'use strict'
// let user = {
//   n:"jon",
//   getN:function(){
//     console.log("from object",this);
//     return function(){
//       console.log("from off ",this);
//       return this.jon;
//     };
//   }};
// user.getN();