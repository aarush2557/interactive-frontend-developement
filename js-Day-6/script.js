// let sentence = "I,am,a,comma,separated,sentence";
// console.log(sentence.length)
// let words = sentence.split("a");
// console.log(words)

// Q1. count the occerence of "r" in the given string .Q1

// let str = "tu meri me tera me tera tu meri";
// console.log(str.length)
// let words = str.split("r");
// console.log((words.length)-1)


// first class function


// function test(){
//     console.log("test")
//     return function test2(){
//         console.log("test2")
//     }
// }
// let value = test()
// value();

// function test(){
//     console.log("test")
//     return function test2(){
//         console.log("test2")
//         return function test3(){
//             console.log("test3")
//         }
//     }
// }
// let value = test()
// let value2=value();
// value2()
//     //   or
// test()()()   


// Anonymous function

// Map(function(){

// })



// self invoking function

// (function(){
//     let a=10;
//     console.log(a)
// })()
// console.log(a) //cant access a

// (function(){
//     let a=10;
//     b=a;
//     console.log(a)
// })()
// console.log(b)