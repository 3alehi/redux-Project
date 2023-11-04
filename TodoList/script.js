import { addTodo } from "./Redux/actionsType.js"
import { setaddTodo } from "./Redux/action.js"
let btn = document.getElementById("add-btn")
let input = document.getElementById("input")
let Show_todo = document.getElementById("Show-todo")
const TodoList = (state = [] , action)=>{
  switch(action.type){
    case addTodo :{
      let newtodos = [...state];
      let createTodo = {
        id: crypto.randomUUID(),
        title: action.title,
        isComplated: false
      };
      newtodos.push(createTodo);

      return newtodos
    }


  }
}




const CreateStoreTotoList =  Redux.createStore(TodoList)

btn.addEventListener("click" , e =>{
  let inputValue = input.value
  CreateStoreTotoList.dispatch(setaddTodo(inputValue));
  input.value = ""
  Show_todo.innerHTML =""

  CreateStoreTotoList.getState().forEach(element => {
    Show_todo.insertAdjacentHTML("afterbegin",`
    
    <div class="todo">
    <h4>    ${element.title}
    <h4/>
    <div>
    ${element.isComplated == false ? "تکمیل نشده" : "تکمیل شده"}
    <div/>
    
    
    
    </div>
    
    
    
    
    
    `)
    console.log(element)
  });


})