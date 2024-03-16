const addTaskButton = document.querySelector("#add-task-button");
let taskCount = 0;
const task = document.querySelector("#to-do").value;

addTaskButton.addEventListener("click", (event) => {
  event.preventDefault();
  const form = document.querySelector("#to-do");
  const error = document.querySelector("#error-message");
  const ul = document.querySelector("ul");
  const liTemplate = taskTemplate(form.value);

  if (form.value.length) {
    ul.append(liTemplate);
    form.value = "";
    taskCount++;
    document.querySelector("p").innerText = taskCount;
    
    // remove error message if input is seuccseful
    if (error.innerText) { 
      error.innerText = "";
    }
    // if text input is empty, show message
  } else {
    error.innerText = "Error: Text Input Required!";
  }
  
});

// create template for list item (input text + delete button)
function taskTemplate(task) {
    const template = document.createElement("li");
    const deleteButton = document.createElement("button");
    // const p = document.createElement("p");
    template.innerText = task;
    // template.append(p);
    deleteButton.innerText = "Delete";
    template.append(deleteButton);
    removeTask(deleteButton);
    return template;
  }

// delete function
function removeTask(element) {
    element.addEventListener("click", (event) => {
      event.target.parentNode.remove();
      console.log(event.target);
      taskCount--;
      document.querySelector("p").innerText = taskCount;
    });
  } 