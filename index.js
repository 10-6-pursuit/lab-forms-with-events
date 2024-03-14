
document.addEventListener("DOMContentLoaded", () => {
  //Created own variables
    const $ = function(args) {
      return document.querySelector(args);
    }
  
    const create = function(args) {
      return document.createElement(args);
    }
  
    HTMLElement.prototype.on = function(a, b, c) {
      this.addEventListener(a, b, c);
    };
  

    function addGlobalEventListener(type, selector, callback) {
      document.addEventListener(type, e => {
        if (e.target.matches(selector)) callback(e)
      })
    };
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
        ul.appendChild(li).appendChild(delBtn);
      }
      form.reset();
    });

    
    //Add / Remove line-through with global function.
    //Add a ternary for toggling line-through
    addGlobalEventListener("click", ".list", e => {
      e.target.style.textDecoration === "line-through" ? e.target.style.textDecoration = 'none' : e.target.style.textDecoration = "line-through";
    })

    //Delete lists
    addGlobalEventListener("click", ".delete", e => {
      e.target.parentNode.remove();
    })
    
  });

