// //Q1.
// let arr = [1,2,3,4,5]

// let res=[]

// while(arr.length>0){
//     res.push(arr.pop());
// }
// console.log(res)
// //Q2.
// let arrTwo=[-3,4,0,-2,5,6,-7]
// let posint= []

// while(arrTwo.length>0){
//     let val = arrTwo.shift();
//     if(val>=0){
//         posint.push(val);
//     }
// }
// console.log(posint);

// Q3.
function palindrome(){
let arr = [1,2,3,4,5]
let temp=[]
let original=[]

// push the existant array into original empty array
for(let i=0; i<arr.lengtgh;i++){
    priginal.push(arr(i))
}
console.log(original);

while(arr.length>0){
    temp.push(arr.pop());
}
for(let i=0;i<original.length;i++){
    if (original[i]!== temp[i])
        return("not a palindrome");
}
return(palindrome);
}
console.log(palindrome());