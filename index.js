document.addEventListener("DOMContentLoaded", () => {
  //Created own variables
    const $ = function(args) {
      return document.querySelector(args);
    }
  
    const $$ = function(args) {
      return document.querySelectorAll(args);
    }
  
    HTMLElement.prototype.$ = function(s) {
      return this.querySelector(s);
    }
  
    HTMLElement.prototype.$$ = function(s) {
      return this.querySelectorAll(s);
    }
  
    const create = function(args) {
      return document.createElement(args);
    }
  
    HTMLElement.prototype.on = (a,b,c) => this.addEventListener(a,b,c);
  
    HTMLElement.prototype.off = (a,b) => this.removeEventListener;

    // ------------------------------------------------
    const form = $(".to-do__form");
    const text = $(".text-area");
    const ul = $("ul");
    const p = $("p");

  
    
    form.on("submit", (event) => {
      event.preventDefault();

      //Create li
      const li = create("li");
      li.className = "list";

      //Problem here was using .on bc it had this.
      li.addEventListener("click", deleteList);
      li.addEventListener("click", lineThrough);

      //Create delete button
      const delBtn = create("button");
      delBtn.className = "delete";
      delBtn.innerText = "Delete";
      
      //If no entry, output message
      if(text.value === '') {
        p.innerHTML = `Error! No Text Input Detected. <br> Please input text before submitting.`;
      } else {
        p.innerText = '';
        li.textContent = text.value;
        ul.appendChild(li);
        li.appendChild(delBtn);
      }
      form.reset();
    });

    //Function to Cross Out To-Do Lists.
    //Used Event Bubbling: https://typeofnan.dev/how-to-bind-event-listeners-on-dynamically-created-elements-in-javascript/  
    //Add a ternary for toggling line-through
    function lineThrough(e) {
      if(e.target.classList.contains("list")) {
        e.target.style.textDecoration === "line-through" ? e.target.style.textDecoration = 'none' : e.target.style.textDecoration = "line-through"
      }
    };

    function deleteList(e) {
      if(e.target.classList.contains("delete")) {
        // e.currentTarget.remove() this also works;
        e.target.parentNode.remove();
      }
    };
    
  });

