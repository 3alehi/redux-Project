import { addTodo } from "./actionsType.js"


function setaddTodo (title){
    return {
        type: addTodo,
        title
    }
}

export {
    setaddTodo
}