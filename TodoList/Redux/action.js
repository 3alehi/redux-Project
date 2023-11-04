import { addTodo ,IScomplated,DeleteTodo} from "./actionsType.js"


function setaddTodo (title){
    return {
        type: addTodo,
        title
    }
}
function setIsCompleted (id){
    return {
        type: IScomplated,
        id
    }
}
function setDeleteTodo (id){
    return {
        type: DeleteTodo,
        id
    }
}

export {
    setaddTodo,
    setIsCompleted,
    setDeleteTodo
}