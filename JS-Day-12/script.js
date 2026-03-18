// document.getElementById("myInput").addEventListener("change", ()=> {
//     document.getElementById("output").textContent = "Code Changed By Piyush Jain";
// });

const myForm = document.getElementById("myForm");
const nameInput = document.getElementById("myInput");
const courceInput = document.getElementById("cource");
const output = document.getElementById("output");

// myForm.addEventListener("change", () => {
//     console.log(nameInput.value);
//     console.log(courceInput.value);
//     output.textContent = courceInput.value + "  " + nameInput.value;
// });


myForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = nameInput.value;
    const cource = courceInput.value;
    output.textContent = name + "  " + cource;
});