// problelm causing code
// var hey = "file2";
// console.log(hey);

// // solution by IIFE
// (()=>{
//     var hey = "file2";
//     console.log(hey); 
//  })();

// // solution by let
// let hey = "file2";
// console.log(hey); 

// solution by let block level scope.
{
    var hey = "file2";
    console.log(hey);  
}