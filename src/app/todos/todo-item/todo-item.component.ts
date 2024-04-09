import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Todo } from '../models/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { AppState } from '../../app.state';
import { Store } from '@ngrx/store';
import { toggle } from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;

  //relacion con elemento html fisico
  @ViewChild('inputFisico') elementRef: ElementRef;

  completado: FormControl;
  txtInput: FormControl;
  editando: boolean = false;

  constructor(private er: ElementRef, private store: Store<AppState>) {
    this.elementRef = er;
    this.todo = new Todo("");
    this.completado = new FormControl(this.todo.completado);
    this.txtInput = new FormControl(this.todo.texto, Validators.required)
  }

  ngOnInit(): void {

    this.completado.valueChanges.subscribe(valor => {
      this.store.dispatch( toggle({id: this.todo.id}));
    })
  }

  editar() {
    this.editando = true;
    setTimeout(() => {
      this.elementRef.nativeElement.select();
    }, 1)
  }

  terminarEdicion() {
    this.editando = false;
  }
}