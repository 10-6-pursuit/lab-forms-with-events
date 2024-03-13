const form = document.querySelector("form")

form.addEventListener("submit", (event) => {

    event.preventDefault();

    const allTasks = event.target.toDos.value.split("\n");

    const tasks = allTasks.filter(ele => ele !== "")

    const task = event.target.toDos.value;

    const ul = document.querySelector("ul");

    const error = document.createElement("p");

    if (!task) {
        error.innerText = "Error! Todo cannot be empty";

        ul.before(error);

    } else {

        for (let task of tasks) {

            const li = document.createElement("li");

            li.addEventListener("click", (event) => {
                
                    if (event.target.style.textDecoration !== "line-through") {
                        event.target.style.textDecoration = "line-through"
                    } else {
                        event.target.style.textDecoration = "none"
                    }
        
            } )

            const del = document.createElement("button")

            del.addEventListener("click", (event) => {

                event.target.parentNode.remove()
            })

            del.innerText = "Delete"

            li.append(task);

            li.append(del);

            ul.append(li);
        }
    
    }

    form.reset()
})
