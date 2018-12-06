import { storeFreeze } from 'ngrx-store-freeze';
import { createSelector, MetaReducer, ActionReducerMap } from '@ngrx/store';
import { environment } from '@env';

import * as fromMenu from './menu.reducer';
import * as fromMaterial from './material.reducer';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';


export interface State {
    router: RouterReducerState;
    menu: fromMenu.State;
    materials: fromMaterial.State;
}

export const reducers: ActionReducerMap<State> = {
    router: routerReducer,
    menu: fromMenu.reducer,
    materials: fromMaterial.reducer
};

export const metaReducers: MetaReducer<State>[] = environment.production ? [] : [storeFreeze];

export const getMenuState = (state: State) => state.menu;
export const getMenuList = createSelector(getMenuState, state => state.menu);
export const getMenuActiveElement = createSelector(getMenuState, state => state.activeElement);

export const getMaterialsState = (state: State) => state.materials;
export const getMaterialsList = createSelector(getMaterialsState, state => state.items);
