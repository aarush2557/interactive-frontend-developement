
// let user={
//     fullname:"AARUSH TYAGI",
//     address:{
//         city:"sonipat",
//         state:"haryana",
//     },
//     mobileno:"9789897878",
//     favcolor:["pink","red","black"],
//     demo:function(){
//         return "demo function"
//     }
// }

// console.log(user.fullname,user.address.city,user.favcolor[0],user.mobileno,user.demo());

// console.log("My name is "+user.fullname+".My fav color is "+user.favcolor[2] );

// //string literal
// console.log(`my name is ${user.fullname}.my fav color is ${user.favcolor[2]}`);

// // object methods

// //Object.keys(variable name)

// console.log(Object.keys(user));

// console.log(object.values(user)):
 
// console.log(object.entries(user))

const car ={
    make: "mahindra",
    modle: "thar"
};
//
//object.freeze(car);//we cant add a new key and value pair and we cant change or update the existing value

object.seal(car) // we cant add a new key and value pair but we can change and update the existing value

car.modle="xuv700"
car.color="zblack";
console.log(car);