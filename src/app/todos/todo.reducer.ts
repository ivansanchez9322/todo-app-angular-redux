import { createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.model';
import { crear, toggle } from './todo.actions';


export const initialState: Todo[] = [
  new Todo("Salvar el mundo"),
  new Todo("Vencer a thanos"),
  new Todo("Comprar traje ironman"),
  new Todo("Robar escudo del capitan america")
];

export const todoReducer = createReducer(
  initialState,
  // para retornar un nuevo arreglo
  // ... operador para separar spred para seprar todos de manera independiente
  // new agregando un nuevo todo al estado
  // Los objetos pasan por referencia en javascript
  // no se puede hacer un simple push por que se puede mutar
  on(crear, (state, { texto }) => [...state, new Todo(texto)]),

  on(toggle, (state, { id }) => {
    return state.map(todo => {

      if (todo.id === id) {
        return {
          ...todo,//spred
          completado: !todo.completado
        }
      } else {
        return todo;
      }

    });
  }),


);