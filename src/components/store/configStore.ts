import { createStore, applyMiddleware, Dispatch, Action } from "redux"
import thunk from "redux-thunk"
import {composeWithDevTools} from "redux-devtools-extension/developmentOnly"

import { TodoItem } from "@ui/Models/TodoItem"
import { initStoreAction } from "@ui/Actions/actions"
import { rootReducer } from "@ui/Reducers/rootReducer"

export interface IState {
    todos: TodoItem[]
}

export const initStore = () => {
    return (dispatch: Dispatch<Action>) => {
        const todos: TodoItem[] = [];

        return dispatch(initStoreAction(todos))
    }
}

export const configureStore = () => {
    if (process.env.NODE_ENV === "production") {
        return createStore(
            rootReducer,
            applyMiddleware(thunk),
        )
    } else {
        return createStore(
            rootReducer,
            composeWithDevTools(
                applyMiddleware(thunk),
            ),
        )
    }
}
