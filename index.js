// console.log("Code your solution!")

// const todo = document.getElementById("todo");
const form = document.getElementById("to-do-form");

const button = document.getElementsByTagName("button");

form.addEventListener("submit", (event) => {
    event.preventDefault();
  
    const todoText = event.target.todotask.value;

    // const button = document.createElement("button");
    // todoLi.appendChild(button);
    // document.querySelector("ul").appendChild(todoLi);

    if(!todoText) {
        const p = document.createElement("p");
        p.innerText = "Please enter a to-do item";
        document.getElementById("form-container").append(p);
    } else {
        const pSearch = document.querySelectorAll("p") || null;
        if(pSearch) {
            pSearch.forEach((p) => {
                p.style.display = "none";
            });
        }


    const todoLi = document.createElement("li");
    todoLi.innerText = todoText;
    todoLi.addEventListener("click", (e) => {
        e.target.style.textDecoration = "line-through";
    })

    const ul = document.getElementById("to-do-list");
    ul.append(todoLi)
    }
  
    // strikeThru(todoLi);
  
  
  
    // todoLi.classList.add("to-dos__list-item");
    // button.classList.add("to-dos__delete-button");
    // button.innerText = "Delete";
    // addDeleteToButton(button);
  
    form.reset();
  
  });

// const items = document.querySelectorAll("li");
// function strikeThru (li) {
//     li.addEventListener("click", (event) => {
//         event.target.classList.toggle("strike-thru");
//     })
// }
// for (let item of items) {
//     strikeThru(item)
// }

