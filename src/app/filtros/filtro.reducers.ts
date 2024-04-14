import { createReducer, on } from '@ngrx/store';
import * as actions from './filtro.actions';

export const initialState: string ="";

export const filtroReducer = createReducer(
    initialState,
    on(actions.setFiltro, (state, { filtro }) => filtro),

);
