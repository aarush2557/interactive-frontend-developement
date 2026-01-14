// For Loop Example: Add 3 to each element in the array

// let arr = [1, 2, 3, 4, 5, 6]
// for (i = 0; i < arr.length; i++) {
//     arr[i] = arr[i] + 3;
// }
// console.log(arr);

// ForEach Example: Add 3 to each element in the array

// let arr2 = [1, 2, 3, 4, 5, 6]
// arr2.forEach(function (element, index, array) {
//     array[index] = element + 3;
// });
// console.log(arr2);


// Map Example: Create a new array with each element increased by 3

// let arr3 = [1, 2, 3, 4, 5, 6]
// let newArr = arr3.map((i) => {
//     return i + 3;
// });
// console.log(newArr);

// Nested For Loop Example

// for (let i = 1; i <= 5; i++) {
//     for (let j = 1; j <= i; j++) {
//         console.log(j);
//     }
//     console.log(i);
// }

// Map Example: Create a new array that is identical to the original array

// let arr = [1, 2, 3, 4, 5]
// let result = arr.map((x) => x);
// console.log(result);

// Filter Example: Create a new array with score is greater than 90

// let scores = [85,92,78,90,88];
// let highScores = scores.filter((score) => score >= 90);
// console.log(highScores);

//  example-2

let scores = [85, 92, 78, 90, 88];
let highScores = scores.filter((score) => 
{
    if (score >= 90) {
        console.log(score + " is greater than or equal to 90");
    } else {
        console.log(score + " is less than 90");
    }
});