import { addTodo } from "./Redux/actionsType.js"
import { setaddTodo } from "./Redux/action.js"
let btn = document.getElementById("add-btn")
let input = document.getElementById("input")

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

  CreateStoreTotoList.getState().forEach(element => {
    console.log(element)
  });


})