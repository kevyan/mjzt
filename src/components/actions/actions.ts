import { TodoItem } from "@ui/Models/TodoItem"

import {
    ActionTypes,
    IInitStoreAction,
    IAddTodoAction,
    ICompleteTodoAction
} from "@ui/Actions/actionTypes"

const {
    INIT_STORE, ADD_TODO_ITEM, COMPLETE_TODO_ITEM
} = ActionTypes


export const initStoreAction = (todos: TodoItem[]): IInitStoreAction => {
    return {
        type: INIT_STORE,
        todos
    }
}

export const addTodoAction = (todo: TodoItem): IAddTodoAction => {
    return {
        type: ADD_TODO_ITEM,
        todo
    }
}

export const completeTodoAction = (todo: TodoItem): ICompleteTodoAction => {
    return {
        type: COMPLETE_TODO_ITEM,
        todo
    }
}

export const actionCreators = {
    addTodoAction,
    completeTodoAction,
}
