const form = document.querySelector("form")

form.addEventListener("submit", (event) => {

    event.preventDefault();

    const task = event.target.toDos.value;

    const ul = document.querySelector("ul");

    const li = document.createElement("li");

    li.addEventListener("click", (event) => {
        event.target.style.textDecoration = "line-through"
    } )

    const error = document.createElement("p");

    if (!task) {
        error.innerText = "Error! Todo cannot be empty";

        ul.before(error);

    } else {

        li.append(task);
    
        ul.append(li);

    }

    form.reset()
})