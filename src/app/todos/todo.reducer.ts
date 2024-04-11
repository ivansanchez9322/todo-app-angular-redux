import { createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.model';
import * as actions from './todo.actions';


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
  on(actions.crear, (state, { texto }) => [...state, new Todo(texto)]),

  on(actions.toggle, (state, { id }) => {
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

  on(actions.editar, (state, { id, texto }) => {
    return state.map(todo => {

      if (todo.id === id) {
        return {
          ...todo,//spred
          texto: texto
        }
      } else {
        return todo;
      }

    });
  }),


  on(actions.borrar,
    (state, { id }) =>
      state.filter(todo => todo.id !== id)),

  //Verificar que puedas viajar enel tiempo y reconstruirlo
  // Es prueba de que se creo un nuevo estado o que solo se muto
  // importante evitar las mutaciones
  on(actions.borrarTodos, (state, { value }) => {
    return state.map(todo => {
      return {
        ...todo, //spred
        completado: value
      }
    });
  }),


);