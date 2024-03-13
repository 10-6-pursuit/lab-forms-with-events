const taskNode = document.getElementById("task-input");

// attempt to submit form on key down cmd + enter
taskNode.addEventListener("keydown", (e) => {
  console.log(e.key)
  if (e.metaKey && e.key === "Enter") console.log("Key COMBO")
})


// form submit
const formNode = document.getElementById("form");
formNode.addEventListener("submit", (e) => {
  e.preventDefault();
  const taskInput = e.target.task
  const taskValues = taskInput.value;
  console.log(taskValues.split("\n"))
  addTasks(taskValues);
  taskInput.value = "";
})


// 
const list = document.getElementById("list")


// applyListListeners();

// functions

function submitForm() {
  const taskInput = e.target.task
  const taskValues = taskInput.value;
  console.log(taskValues.split("\n"))
  addTasks(taskValues);
  taskInput.value = "";
}

function addTasks(string) {
  const taskArray = string.split("\n");
  for (let task of taskArray) {
    if (task) createLi(task);
  }
}

function createLi(task) {
  const li = document.createElement("li");
  li.classList.add("list-item");

  const span = document.createElement("span");
  span.innerText = task;
  span.classList.add("pointer");
  addToggleComplete(span);
  
  const deleteButton = document.createElement("input");
  deleteButton.setAttribute("type", "button")
  deleteButton.setAttribute("value", "Delete")
  deleteButton.classList.add("delete-button");
  deleteButton.classList.add("pointer");

  li.appendChild(span);
  li.appendChild(deleteButton);
  list.appendChild(li);
}

function createSpan() {
  
}

function addToggleComplete(node) {
  node.addEventListener("click", (e) => {
    e.target.classList.toggle(("complete"))
  })
}

function applyListListeners() {
  const tasks = document.getElementsByClassName("list-item");
  for (let task of tasks) {
    addToggleComplete(task);
  }
}