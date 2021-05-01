import { Injectable } from "@angular/core";
import { Todo } from "../models/todo.model";

@Injectable({
    providedIn: 'root'
})
export class TodoService {

    todos: Todo[] = [];

    constructor() {
        this.loadTodos();
    }

    loadTodos() {
        let todoStr = localStorage.getItem("TODO")
        if (todoStr) {
            this.todos = JSON.parse(todoStr);
        }
    }

    addTodo(todo: Todo) {
        this.todos.push(todo);
        localStorage.setItem("TODO", JSON.stringify(this.todos));
    }

    deleteTdo(index:number){
        this.todos.splice(index,1);
        localStorage.setItem("TODO", JSON.stringify(this.todos));
    }
}
