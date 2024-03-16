const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");
const errorMessage = document.getElementById("error-message");

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const todoText = document.createElement("span");
  todoText.className = "todo-text";
  todoText.innerText = todoInput.value;

  if (todoText === "") {
    errorMessage.style.display = "block";
    return;
  }

  errorMessage.style.display = "none";
  todoInput.value = "";

  const todoItem = document.createElement("li");
  todoItem.appendChild(todoText);
  todoItem.classList.add("todo-item");

  todoText.addEventListener("click", () => {
    todoText.classList.toggle("completed");
  });

  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";
  deleteButton.classList.add("delete-button");

  deleteButton.addEventListener("click", (e) => {
    todoItem.remove();
  });

  todoItem.appendChild(deleteButton);
  todoList.appendChild(todoItem);
});
