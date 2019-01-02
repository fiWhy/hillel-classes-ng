import { storeFreeze } from 'ngrx-store-freeze';
import { createSelector, MetaReducer, ActionReducerMap, Action } from '@ngrx/store';
import { environment } from '@env';

import * as fromMenu from './menu.reducer';
import * as fromMaterial from './material.reducer';
import * as fromLessonTheme from './lesson-theme.reducer';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';


export interface State {
    router: RouterReducerState;
    menu: fromMenu.State;
    materials: fromMaterial.State;
    lessonThemes: fromLessonTheme.State;
}

export const reducers: ActionReducerMap<State> = {
    router: routerReducer,
    menu: fromMenu.reducer,
    materials: fromMaterial.reducer,
    lessonThemes: fromLessonTheme.reducer
};

export const metaReducers: MetaReducer<State>[] = environment.production ? [] : [storeFreeze];

export const getMenuState = (state: State) => state.menu;
export const getMenuList = createSelector(getMenuState, state => state.menu);
export const getMenuActiveElement = createSelector(getMenuState, state => state.activeElement);

export const getMaterialsState = (state: State) => state.materials;
export const getMaterialsList = createSelector(getMaterialsState, state => state.items);

export const getLessonThemesState = (state: State) => state.lessonThemes;
export const getLessonThemesList = createSelector(getLessonThemesState, state => state.items);


export const ofResult = (resultConstant: string) => (cb: (action: Action) => void) => (action: any) => {
    switch (action.type) {
        case resultConstant:
            cb(action);
    }
};
