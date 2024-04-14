import { Component, OnInit } from '@angular/core';
import { AppState } from '../../app.reducer';

import { Store } from '@ngrx/store';
import { setFiltro } from '../../filtros/filtro.actions';
import { limpiarTodo } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrl: './todo-footer.component.css'
})
export class TodoFooterComponent implements OnInit {

  filtroActual: string = 'todos';
  filtros: string[] = ['todos', 'completados', 'pendientes']

  pendientes: number = 0;

  constructor(private store: Store<AppState>) { }


  ngOnInit(): void {

    this.store.subscribe(state => {
      this.filtroActual = state.filtro;

      this.pendientes = state.todos.filter(todo => !todo.completado).length;
    });

  }

  cambiarFiltro(filtro: string) {
    console.log(filtro);

    this.store.dispatch(setFiltro({ filtro }));

  }

  borrarCompletados(){
    this.store.dispatch(limpiarTodo())
  }
}
