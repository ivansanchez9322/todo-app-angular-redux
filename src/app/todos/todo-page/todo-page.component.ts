import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { borrarTodos } from '../todo.actions';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrl: './todo-page.component.css'
})
export class TodoPageComponent {

  completado: boolean = false;

  constructor(private store: Store<AppState>){
  }

  toggleAll() {
    this.completado = !this.completado;
    console.log(this.completado)
    this.store.dispatch( borrarTodos ({value: this.completado }))
    console.log('click')
  }


}
