import { Component } from "@angular/core";
import { Todo } from "src/app/models/todo.model";
import { TodoService } from "src/app/services/todo.service";

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss']
})
export class ListComponent {
    description: string;

    todos: Todo[] = [];

    constructor(
        private todoService: TodoService
    ) {
        this.loadTodos();
    }

    loadTodos() {
        this.todos = this.todoService.todos;
    }

    addTodo() {
        let todo = new Todo();
        todo.description = this.description;
        this.todoService.addTodo(todo);
        this.loadTodos();
    }
}