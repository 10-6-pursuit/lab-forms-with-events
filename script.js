//State
let taskCount = 0;

//Queries
const list = document.querySelector(".todos-list");
const form = document.querySelector("form");
const taskDefault = document.querySelector(".todos__default");

//Events
form.addEventListener("submit", handleSubmit);

//Functions
function handleSubmit(e) {
	markAsComplete, e.preventDefault();
	taskCount++;
	taskDefault.style.display = "none";

	const li = document.createElement("li");
	li.classList.add("todos-item");

	const p = document.createElement("p");
	p.classList.add("todos__text");
	p.innerText = e.target.toDo.value;

	const button = document.createElement("button");
	button.id = "delete";
	button.innerText = "Delete";
	button.classList.add("delete-btn");

	li.append(p);
	li.append(button);

	li.addEventListener("click", removeItem);
	li.addEventListener("click", markAsComplete);

	list.append(li);
	form.reset();
}

function removeItem(e) {
	e.preventDefault();
	if (e.target.id == "delete") {
		e.currentTarget.remove();
		taskCount--;
		if (!taskCount) taskDefault.style.display = "block";
	}
}
function markAsComplete(e) {
	e.preventDefault();
	if (e.target.classList.contains("todos__text")) {
		e.target.classList.toggle("completed");
	}
}
