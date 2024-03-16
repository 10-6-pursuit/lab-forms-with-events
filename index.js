const form = document.querySelector("form");

const main = document.querySelector("main");

deleteList();

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const ul = document.createElement("ul");

    const li = document.createElement("li");

    li.innerText = e.target.toDo.value;

    li.className = "list-item";

    const delet = document.createElement("button");

    delet.className = "delete";

    delet.innerText = "Delete";

    li.append(delet);

    ul.append(li)

    main.append(ul);

    deleteList()

    form.reset();
});

function deleteList () {
    
    const deleteB = document.querySelectorAll(".delete");

    for(let ele of deleteB) {
        ele.addEventListener("click", (event) => {
            event.target.parentNode.remove();
        })
    }

}
