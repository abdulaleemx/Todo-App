let ul = document.querySelector("ul");
let li = document.querySelector("li");
let inp = document.querySelector("input");
const addIcon = document.querySelector(".add-icon");

addIcon.addEventListener("click" , function() {
    if (inp.value.trim() === "") return;
    let item = document.createElement("li");
    item.innerText = inp.value;

    let delBtn = document.createElement("i")
    delBtn.classList.add("bx" , "bxs-trash-alt" , "delete-icon");

    item.appendChild(delBtn);
    ul.appendChild(item);
    inp.value = "";
})

ul.addEventListener("click" , function(event) {
    if (event.target.nodeName == "I") {
        let listItem = event.target.parentElement;
        listItem.remove();
    }
}) 



// let delBtns = document.querySelectorAll(".delete-icon");

// for(delBtn of delBtns) {
//     delBtn.addEventListener("click" , function() {
//         let par = this.parentElement;
//         console.log(par);
//         par.remove();
//     })
// }