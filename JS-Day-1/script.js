// Types of function in JS

// normal function 

function greet(name) {
    console.log(name);
}

greet("AARUSH");

// arrow function 

const farewell = (name) => { console.log(name); };

farewel("AARUSH");

// callback function => a function passed as an argument to another function

const sample = (callback) => {
    console.log("Sample");
    callback();
};

const demo = () => {
    console.log("Demo");
};

sample(demo);