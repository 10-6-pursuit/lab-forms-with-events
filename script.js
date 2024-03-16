

document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('todo-form');
  const input = document.getElementById('todo-input');
  const errorMessage = document.getElementById('error-message');
  const todoList = document.getElementById('todo-list');

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const todoText = input.value.trim();

    if (todoText === "") {
      errorMessage.style.display = 'block';
      return;
    }

    errorMessage.style.display = 'none';

    const todos = todoText.split('\n');
    
    todos.forEach((todo) => {
      if (todo) {
        addTodo(todo);
      }
    });

    input.value = ''; 
  });

  function addTodo(todoText) {
    const newTodo = document.createElement('li');
    newTodo.textContent = todoText;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete-btn';
    deleteBtn.onclick = function() {
      todoList.removeChild(newTodo);
    };

    newTodo.appendChild(deleteBtn);

    newTodo.addEventListener('click', function(e) {

      if (e.target !== deleteBtn) {
        newTodo.style.textDecoration = newTodo.style.textDecoration === 'line-through' ? 'none' : 'line-through';
      }
    });

    todoList.appendChild(newTodo);
  }
});
