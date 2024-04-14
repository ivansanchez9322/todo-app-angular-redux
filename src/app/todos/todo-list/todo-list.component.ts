import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo.model';
import { AppState } from '../../app.reducer';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent implements OnInit {

  todos: Todo[] = [];

  filtroActual: string = "";

  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {

    //this.store.select('todos').subscribe(todos => this.todos = todos)

    //this.store.subscribe(state=>{
    this.store.subscribe( ({ todos, filtro}) => {
      //this.todos = state.todos;
      //this.filtroActual = state.filtro;
      this.todos = todos;
      this.filtroActual = filtro;
    })

  }

}
