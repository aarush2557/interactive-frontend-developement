
let user={
    fullname:"AARUSH TYAGI",
    address:{
        city:"sonipat",
        state:"haryana",
    },
    mobileno:"9789897878",
    favcolor:["pink","red","black"],
    demo:function(){
        return "demo function"
    }
}

console.log(user.fullname,user.address.city,user.favcolor[0],user.mobileno,user.demo());

console.log("My name is "+user.fullname+".My fav color is "+user.favcolor[2] );

//string literal
console.log(`my name is ${user.fullname}.my fav color is ${user.favcolor[2]}`);

// object methods
