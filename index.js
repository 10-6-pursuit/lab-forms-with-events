//do the event.default() to prevent refreshing page.
window.addEventListener("DOMContentLoaded", () => {
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
      const li = create("li");

      if(text.value === '') {
        p.innerText = "Error!";
      } else {
        p.innerText = '';
        li.textContent = text.value;
        ul.appendChild(li);
      }
      form.reset();
    })

    //Function to Cross Out List-not currently working
    const list = $$("li");
    list.forEach((li) => {
      li.on("dblclick", () => {
        li.style.textDecoration = "line-through";
      })
    })

});