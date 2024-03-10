// When the user writes something in the form's text input area and clicks submit, the ul should update with a new li item at the bottom of the list. The page should not refresh.
const form = document.querySelector('form');
const ul = document.querySelector('ul');
const error = document.querySelector('p');

form.addEventListener('submit', () => {
  event.preventDefault();
  // When the user writes nothing in the form's text input area and clicks submit, an error message (inside a p tag) should appear below the form.
  if (form.toDo.value.trim().length > 0) {
    let li = document.createElement('li');
    li.textContent = form.toDo.value;
    ul.appendChild(li);
  } else {
    error.innerText = '⚠️ Error. Todo cannot be empty.';
    setTimeout(() => (error.innerText = ''), 2000);
  }

  // When the user clicks on one of the li items, the item should be crossed out, indicating that that to-do is complete.
  const items = document.querySelectorAll('li');
  for (const item of items) {
    item.addEventListener('click', () => {
      // Bonus task: Clicking a todo that is crossed out (completed) uncrosses the todo.
      if (item.style.textDecoration === 'line-through') {
        item.style.textDecoration = 'none';
      } else {
        item.style.textDecoration = 'line-through';
      }
    });
  }

  // Bonus task: Have the input go back to empty after adding a new todo.
  form.reset();
});
