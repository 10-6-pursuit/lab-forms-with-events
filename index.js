console.log("Code your solution!")

const form = document.getElementById("to-do-form");


form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const submit = e.target.task.value;
    const li = document.createElement("li");
    li.innerText = submit;
    
    
    if (!submit) {
        const p = document.querySelector("p");
        p.innerText = "Please enter text";
    } else {
        const pSearch = document.querySelector("p");
        pSearch.innerText = "";

        const ul = document.getElementById("to-do-list");
        ul.append(li);

        li.addEventListener("dblclick", (e) => {
            e.target.style.textDecoration = "line-through";
        })
    }
});