const todoList = [
  
]

const display=(listItems)=>{
    let items = document.querySelector("#todo-items")
    items.innerHTML = ''
    if(listItems.length<1){
        let li = document.createElement('li')
        li.textContent = " No Task addedd"
        items.appendChild(li)
    }
   else{
    listItems.map((list, index)=>{
        
        let li = document.createElement('li')
        li.textContent = list
        let span = document.createElement("span")
        span.addEventListener('click', (e)=>{
            todoList.splice(index, 1)
            display(todoList)
        })  
        span.textContent = 'x'
        li.appendChild(span)  
        items.appendChild(li)
    })
   }

}
display(todoList)

const addItem = ()=>{
    const text= document.querySelector("#todo-input")
    if(text.value.length<2 || todoList.includes(text)){
        alert("Item already added or text is too short")
    }
    else{
        todoList.push(text.value)
        display(todoList)
        text.value = ''
    }

}
const removeItem =(index)=>{
    console.length(index)
}