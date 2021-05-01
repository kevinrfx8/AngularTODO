import { Component, EventEmitter, Input, Output } from "@angular/core";
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
    @Output() onDelete=new EventEmitter();
    @Input() index:Number;
    constructor() {

    }
    deleteTodo(){
        this.onDelete.emit(this.index);
    }
}