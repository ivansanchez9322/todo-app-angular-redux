import { createAction, props } from '@ngrx/store';

export type filtrosValidos = 'todos';

export const setFiltro = createAction(
    '[Filtro] Set filtro',
    props<{ filtro: filtrosValidos }>()
);