const form = document.querySelector("form")

form.addEventListener("submit", (event) => {

    event.preventDefault();

    const task = event.target.toDos.value;

    const ul = document.querySelector("ul");

    const li = document.createElement("li");

    li.addEventListener("click", (event) => {
        
            if (event.target.style.textDecoration !== "line-through") {
                event.target.style.textDecoration = "line-through"
            } else {
                event.target.style.textDecoration = "none"
            }

            console.log(event.target.style.textDecoration)

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
