const head=document.getElementById("heading");

console.log(head.innerText) //it will only show the visible text
console.log(head.textContent) //it will show all the text including hidden text
console.log(head.innerHTML) //it will show all the text with its element

//DOM modifaction
//Create a new element and set its content
const newParagraph = document.createElement("p");
newParagraph.textContent = "This is a dynaically created paragraph.";
console.log(newParagraph.textContent);

//Append the new elemet to the container
const contaoiner = document.getElementById("container");
contaoiner.appendChild(newParagraph);