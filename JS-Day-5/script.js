// string methods
// let str = "JavaScript is fun!";
// let sliced = str.slice(0, 10);
// console.log(sliced);

// let str = "JavaScript is fun!";
// let sub = str.substring(-2, 2);
// console.log(sub); //negative index supports this but not slice

// const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';
// const indexOfFirst = paragraph.indexOf("dog");
// console.log(indexOfFirst);

// let str = "OpenAI is innovative!";
// let sub = str.substring(8, 2); // sub is "is"


// let firstName = "John";
// let lastName = "Doe";
// let fullName = firstName.concat(" ", lastName);

// console.log(fullName);

// string literls

// let fullName = `${firstName} : this is my firstname, ${lastName} : this is my lastname`

// console.log(fullName)

// let uni = 'K.R Mangalam';
// let prog = 'BCA AI/DS';

// console.log('My name is Aarush and im pursuing'+' '+ prog + ' from ' + uni);

// let details = `My name is Aarush and im pursuing ${prog} form ${uni}`;

// console.log(details);



// function palindrome() {
//     let arr = [1, 2, 3, 2, 1];
//     let temp = [];
//     let original = [...arr];

    // for(let i = 0; i <= arr.length-1; i++) {
    //     original.push(arr[i]);
    // }
    // console.log(original);

//     while(arr.length > 0) {
//         temp.push(arr.pop());
//     }

//     for(let i = 0; i <= original.length-1; i++) {
//         if(original[i] === temp[i]) {
//             return "palindrome";
//         }
//         else {
//             return "not a palindrome";
//         }
//     }
// }
// console.log(palindrome());

// let arr = [1, 2, 3];
// let arr2 = [4, 5, 6];
// let new_array = [...arr, ...arr2];

// console.log(new_array);


// let sentence = "   This is a sentence with spaces.   ";
// let trimmed = sentence.trim(); 

// let sentence = "I,am,a,comma,separated,sentence";
// let words = sentence.split(",");