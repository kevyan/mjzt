import { IState } from "@ui/Store/configStore";
export declare const initState: IState;
export declare const rootReducer: import("redux").Reducer<{
    todos: import("../models/TodoItem").TodoItem[];
}, import("redux").AnyAction>;
