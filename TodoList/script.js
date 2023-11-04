import { addTodo, IScomplated, DeleteTodo } from "./Redux/actionsType.js";
import { setaddTodo, setIsCompleted, setDeleteTodo } from "./Redux/action.js";

let btn = document.getElementById("add-btn");
let input = document.getElementById("input");
let Show_todo = document.getElementById("Show-todo");

const initialState = [];

const todoListReducer = (state = initialState, action) => {
  switch (action.type) {
    case addTodo: {
      let newtodos = [...state];
      let createTodo = {
        id: crypto.randomUUID(),
        title: action.title,
        isCompleted: false,
      };
      newtodos.push(createTodo);

      return newtodos;
    }
    case IScomplated: {
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, isCompleted: true } : todo
      );
    }
    case DeleteTodo: {
      return state.filter((todo) => todo.id !== action.id);
    }
    default:
      return state;
  }
}

const createStoreTodoList = Redux.createStore(todoListReducer);

btn.addEventListener("click", (e) => {
  let inputValue = input.value;
  createStoreTodoList.dispatch(setaddTodo(inputValue));
  input.value = "";

  Show_todo.innerHTML = "";

  const todoList = createStoreTodoList.getState();
  todoList.forEach((element) => {
    const todoItem = document.createElement("div");
    todoItem.classList.add("todo");
    todoItem.innerHTML = `
      <h4>${element.title}</h4>
      <div>${element.isCompleted ? "تکمیل شده" : "تکمیل نشده"}</div>
      <button class="btn-complete" onclick="markAsCompleted('${element.id}')">انجام شده</button>
      <button class="btn-delete" onclick="removeTodo('${element.id}')">حذف</button>
    `;

    Show_todo.appendChild(todoItem);
  });
});

function markAsCompleted(id) {
  createStoreTodoList.dispatch(setIsCompleted(id));
}

function removeTodo(id) {
  createStoreTodoList.dispatch(setDeleteTodo(id));
}
