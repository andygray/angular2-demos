import {Component, OnInit, OnDestroy} from 'angular2/core';
import {EventEmitter} from "angular2/core";
import {Observable} from "rxjs/Observable";
import {Subscription} from "rxjs/Subscription";
import {ChangeDetectionStrategy} from "angular2/core";
import {Output} from "angular2/core";

import {TodoService} from "../core/todo.service";
import {TodoFormComponent} from '../todo-form.component/todo-form.component';
import {TodoListComponent} from '../todo-list.component/todo-list.component';
import {TodoCountPipe} from "../core/todo-count.pipe/todo-count.pipe";

// This is only required as I also use TodoListItemComponent internally to demonstrate parent -> child binding
import {TodoListItemComponent} from "../todo-list-item.component/todo-list-item.component";
import {ChangeDetectorRef} from "angular2/core";
import {ViewEncapsulation} from "angular2/core";
import {TodoButtonBarComponent} from "../todo-button-bar.component/todo-button-bar.component";

@Component({
    selector: 'my-todo-dashboard',
    templateUrl: 'app/todo-dashboard.component/todo-dashboard.component.html',
    styleUrls: ['app/todo-dashboard.component/todo-dashboard.component.css'],
    pipes: [],
    directives: [TodoFormComponent, TodoListComponent, TodoButtonBarComponent]
})
export class TodoDashboardComponent implements OnInit, OnDestroy {

    todoList:Todo[] = [];
    toggleAll:boolean = false;
    filter:string = '';

    private _subscription:EventEmitter<Todo[]>;

    constructor(private _todoService:TodoService) {
        this._subscription = this._todoService.todoListChange.subscribe((data) => this.todoList = data);
    }

    ngOnInit() {
        console.log('Calling ngOnInit()');
        this.todoList = this._todoService.todoList;
    }

    ngOnDestroy() {
        console.log('Calling ngOnDestroy()');
        this._subscription.unsubscribe();
    }

    onFilterChanged($event) {
        console.log('Calling onFilterChanged()', $event);
        this.filter = $event;
    }

    markAllAsComplete() {
        console.log('Calling markAllAsComplete()', this.toggleAll);
        this._todoService.markAllAsComplete(!this.toggleAll);
        this.toggleAll = !this.toggleAll;
    }


}