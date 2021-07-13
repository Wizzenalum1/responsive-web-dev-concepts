// // getting done useing the inheritence using the only functions.
// let Question = function(problem,solution){
//     this.problem = problem;
//     this.solution = solution;
// }
// // set a fucntion total to share with all the questions.
// Question.prototype.total = function(){return this.constructor.length};


// // how to use inheritance in js by funciton only
// let K = function(problem,solution,l){
//     this.l = l;
//     Question.call(this,problem,solution);
// }
// let k1 = new K("fka","kf","kfs");
// // but this k1 wont have the total functionality
// //We need to get K() to inherit the methods defined on quesiton()'s prototype
// K.prototype = Object.create(Question.prototype);
// // now we set the K's prototype as Question's prototype
// Object.defineProperty(K.prototype,'constructor',{
//                 value:K,
//             enumerable:false,// so that it wont appear in for in loop.
//             writable:true
//         });

// let k2 = new K("k2","k2","k2");
// // adding functionality to thet K constructor.
// K.prototype.greet = function(){
//     return "question is "+this.problem+" ans is "+this.solution;
// }
// let k3 = new K("k3","k3","k3");



// using    ECMAScript 2015 Classes
class Question{
    constructor(problem,solution){
        this.problem = problem;
        this.solution = solution;
    }
    total(){
        return this.constructor.length;
    }
}

class K extends Question{
    constructor(problem,solution,l){
        super(problem,solution);
        this.l = l;
    }
    greet(){
        return "question is "+this.problem+" ans is "+this.solution;
    }
}

let k3 = new K("k3","k3","k3");










// how to use inheritance in js by funciton only





let questionList = [1,2];
let q1 = new Question("quesiton 1 ", "first answer");
let q2 = new Question("quesiton 2 ", "second answer");
let q3 = new Question("fds","answers");


// crating the ineheritance 
class List{
    constructor(list,subject){
        this.list = list;
        this.subject = subject;
    }
    questionNumber(){
        return this.list.length;
    }
}

class Test extends List{
    constructor(name, list, duration){
        super(list,"math");
        this.name = name;
        this.duration = duration;
    }
    duration(){
        return this.duration;
    }
}

let t1 = new Test("name my", "how lenghty",2);
