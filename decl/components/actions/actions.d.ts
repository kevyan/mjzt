import { TodoItem } from "@ui/Models/TodoItem";
import { IInitStoreAction, IAddTodoAction, ICompleteTodoAction } from "@ui/Actions/actionTypes";
export declare const initStoreAction: (todos: TodoItem[]) => IInitStoreAction;
export declare const addTodoAction: (todo: TodoItem) => IAddTodoAction;
export declare const completeTodoAction: (todo: TodoItem) => ICompleteTodoAction;
export declare const actionCreators: {
    addTodoAction: (todo: TodoItem) => IAddTodoAction;
    completeTodoAction: (todo: TodoItem) => ICompleteTodoAction;
};
