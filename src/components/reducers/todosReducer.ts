import { Action } from "redux"

import {
    ActionTypes,
    IInitStoreAction,
    IAddTodoAction,
    ICompleteTodoAction
} from "@ui/Actions/actionTypes"

import { initState } from "@ui/Reducers/rootReducer"

const {
    INIT_STORE, ADD_TODO_ITEM, COMPLETE_TODO_ITEM
} = ActionTypes


export const todos = (state = initState.todos, action: Action) => {
    switch (action.type) {
        case INIT_STORE: {
            return (action as IInitStoreAction).todos;
        }

        case ADD_TODO_ITEM: {
            const todoItems = state.slice()
            const todo = (action as IAddTodoAction).todo

            todo.id = todoItems.length
            todo.key = todoItems.length
            todo.isCompleted = false

            todoItems.push(todo)
            return todoItems
        }

        case COMPLETE_TODO_ITEM: {
            const todoItems = state.slice()
            const todo = (action as ICompleteTodoAction).todo

            for (const item of todoItems) {
                if (item.id === todo.id) {
                    item.isCompleted = true
                    break
                }
            }

            return todoItems
        }

        default: {
            return state
        }
    }
}
