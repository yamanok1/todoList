const todoInput = document.querySelector(".todo-ınput")
const todoBtn = document.querySelector(".todo-btn")
const todoList = document.querySelector(".todo-list")

todoBtn.addEventListener("click",addTodo)
todoList.addEventListener("click",deleteTodo)


function addTodo(event){
    event.preventDefault();

    if (todoInput.value !=="") {
        const todoDiv = document.createElement("div")
        todoDiv.className="todo"

        const newTodo = document.getElement("li")
        newTodo.className="todo-item"
        newTodo.innerText = todoInput.value

        todoDiv.appendChild(newTodo)
        todoInput.value="";

        const completedBtn = document.createElement('button');
        completedBtn.innerText = `✔️`;
        completedBtn.classList.add('complete-btn');
        todoDiv.appendChild(completedBtn);

       
        const trashBtn = document.createElement('button');
        trashBtn.innerText = `❌`;
        trashBtn.classList.add('trash-btn');
        todoDiv.appendChild(trashBtn);

        
        todoList.appendChild(todoDiv);
    }
}
function deleteTodo(e){
    const item = e.target;

    if(item.classList[0] === 'trash-btn'){
        const todo = item.parentElement;
        todo.classList.add('fade-away');

        todo.addEventListener('transitionend', e => {
            todo.remove();
        });
    }

    if(item.classList[0] === 'complete-btn'){
        const todo = item.parentElement;
        const todoItem = todo.querySelector('.todo-item');
        todoItem.classList.toggle('completed');

    }
}