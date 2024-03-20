const form = document.querySelector("form");

const submit = document.querySelector(".submit-button");
submit.addEventListener("click", event => {
    event.preventDefault();

    const toDoInput = document.querySelector(".to-do-input").value;

    const ul = document.querySelector(".to-do-list");
    const li = document.createElement("li");
    li.innerText = toDoInput;

    const messageBox = document.querySelector(".message-box");

    if (toDoInput !== "") {
        ul.append(li);
        form.reset();
    } else {
        messageBox.style.display = "flex";
    }

})

const btn = document.querySelector(".btn");
btn.addEventListener("click", event => {
    const messageBox = document.querySelector(".message-box");

    messageBox.style.display = "none";
})
