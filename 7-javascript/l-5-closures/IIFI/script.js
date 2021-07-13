// // problelm causing code
// // after 2 seconds the printed value is file2.
// var hey = "file";
// console.log(hey);
// setTimeout(function(){
//     console.log(hey)
// },2000);

// //solution by IIFE
// (()=>{
//    var hey = "file";
//     console.log(hey);
//     setTimeout(function(){
//         console.log(hey)
//     },2000); 
// })();

// // solution by let method1 won't give an error
// let hey = "file";
// console.log(hey);
// setTimeout(function(){
//     console.log(hey)
// },2000);


// solution by let block level scope.
{
    let hey = "file";
    console.log(hey);
    setTimeout(function(){
        console.log(hey)
    },2000);  
}


