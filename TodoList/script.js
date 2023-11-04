import { addTodo } from "./Redux/actionsType.js";
import { setaddTodo } from "./Redux/action.js";

let btn = document.getElementById("add-btn");
let input = document.getElementById("input");
let Show_todo = document.getElementById("Show-todo");

// Define the initial state for the todo list
const initialState = [];

// Define the reducer function for the todo list
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
    default:
      return state;
  }
}

// Create a Redux store for the todo list
const createStoreTodoList = Redux.createStore(todoListReducer);

btn.addEventListener("click", (e) => {
  let inputValue = input.value;
  createStoreTodoList.dispatch(setaddTodo(inputValue));
  input.value = "";

  // Clear the Show_todo container
  Show_todo.innerHTML = "";

  const todoList = createStoreTodoList.getState();
  todoList.forEach((element) => {
    const todoItem = document.createElement("div");
    todoItem.classList.add("todo");
    todoItem.innerHTML = `
      <h4>${element.title}</h4>
      <div>${element.isCompleted ? "تکمیل شده" : "تکمیل نشده"}</div>
      <button class="btn-complete">انجام شده</button>
      <button class="btn-delete">حذف</button>
    `;

    // Add event listeners for the "complete" and "delete" buttons
    const completeButton = todoItem.querySelector(".btn-complete");
    completeButton.addEventListener("click", () => {
  alert("asdf")
    });

    const deleteButton = todoItem.querySelector(".btn-delete");
    deleteButton.addEventListener("click", () => {
      // Handle deleting the todo here
      // You can dispatch an action to remove the todo from the state
      // Update the state accordingly
      // ...
    });

    Show_todo.appendChild(todoItem);
  });
});
