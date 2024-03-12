const form = document.querySelector("form")

form.addEventListener("submit", (event) => {

    event.preventDefault();

    const task = event.target.toDos.value;

    const ul = document.querySelector("ul")

    const li = document.createElement("li")

    li.append(task)

    ul.append(li)

    console.log(task)

    form.reset()
})