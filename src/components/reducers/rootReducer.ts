import { combineReducers } from "redux"

import { IState } from "@ui/Store/configStore"
import { todos } from "@ui/Reducers/todosReducer"

export const initState: IState = {
    todos: [],
}

export const rootReducer = combineReducers({
    todos,
})
