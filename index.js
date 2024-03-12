const form = document.querySelector("form")

form.addEventListener("submit", (event) => {

    event.preventDefault();

    const tasks = event.target.toDos.value.split("\n");

    const task = event.target.toDos.value;

    console.log(tasks)

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
            
            li.append(task);

            ul.append(li);
        }
    
    }

    form.reset()
})
