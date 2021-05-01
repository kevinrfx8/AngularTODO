import { Component, Input } from "@angular/core";
import { Todo } from "src/app/models/todo.model";

@Component({
    selector: 'app-todo',
    templateUrl: './todo.component.html',
    styleUrls: [
        './todo.component.scss'
    ]
})
export class TodoComponent {
    @Input() todo: Todo;

    constructor() {

    }
}