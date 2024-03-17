
const h1=document.querySelector(`h1`)

h1.innerText=`Todos`
let hr=document.createElement(`hr`);
let b=document.querySelector(`body`)

b.append(hr)

let section=document.createElement(`section`)

let text= `<form action="go">
<input type="text" placeholder="Type a todo" name="go">
<button type="submit" >Submit</button>
</form> <ul></ul>`

section.innerHTML=text
b.append(section)



let form=document.querySelector(`form`)

form.addEventListener(`submit`,(event)=>{
    event.preventDefault();
    let li=document.createElement(`li`)
    let ul=document.querySelector(`ul`)
    let t=event.target.go.value
    console.log(t)
li.textContent=t

    ul.append(li)


   form.reset()

    
})
