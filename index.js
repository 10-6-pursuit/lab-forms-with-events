const form = document.querySelector("form");

function addDeleteToButton (bttn) {
    bttn.addEventListener("click", event => {
        event.target.parentNode.remove();
    })
}

const buttons = document.querySelectorAll(".to-dos__delete-button");

for (let button of buttons) {
    addDeleteToButton(button);
}

form.addEventListener("submit", event => {
    event.preventDefault();

    const todoText = form.toDo.value;

    const todoLi = document.createElement("li");

    todoLi.innerText = todoText;

    const button = document.createElement("button");

    todoLi.appendChild(button);

    document.querySelector("ul").appendChild(todoLi);

    todoLi.classList.add("to-dos__list-item");
    button.classList.add("to-dos__delete-button");
    button.innerText = "Delete";
    addDeleteToButton(button);
    form.reset();
});