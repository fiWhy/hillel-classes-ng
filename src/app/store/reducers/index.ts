import { storeFreeze } from 'ngrx-store-freeze';
import { createSelector, MetaReducer } from '@ngrx/store';
import { environment } from '@env';

import * as fromMenu from './menu.reducer';
import { routerReducer } from '@ngrx/router-store';


export interface State {
    menu: fromMenu.State;
}

export const reducers = {
    router: routerReducer,
    menu: fromMenu.reducer
};

export const metaReducers: MetaReducer<State>[] = environment.production ? [] : [storeFreeze];

export const getMenuState = (state: State) => state.menu;
export const getMenuList = createSelector(getMenuState, state => state.menu);
export const getMenuActiveElement = createSelector(getMenuState, state => state.activeElement);
