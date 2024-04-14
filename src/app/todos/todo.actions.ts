import { createAction, props } from '@ngrx/store';

export const limpiarTodo = createAction(
    '[TODO] limparTodo TODO'
);

export const crear = createAction(
    '[TODO] Crear TODO',
    props<{ texto: string }>()
);


export const toggle = createAction(
    '[TODO] toggle Todo',
    props<{ id: number }>()
);


export const editar = createAction(
    '[TODO] editar Todo',
    props<{ id: number, texto: string }>()
);


export const borrar = createAction(
    '[TODO] borrar Todo',
    props<{ id: number }>()
);

export const borrarTodos = createAction(
    '[TODO] borrarTodos Todo',
    props<{ value: boolean }>()
);
