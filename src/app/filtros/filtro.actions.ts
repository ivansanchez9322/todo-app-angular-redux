import { createAction, props } from '@ngrx/store';

export const setFiltro = createAction(
    '[Filtro] Set filtro',
    props<{ filtro: string }>()
);