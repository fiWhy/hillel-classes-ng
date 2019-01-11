import { storeFreeze } from 'ngrx-store-freeze';
import { createSelector, MetaReducer, ActionReducerMap, Action } from '@ngrx/store';
import { environment } from '@env';

import * as fromMenu from './menu.reducer';
import * as fromMaterial from './material.reducer';
import * as fromLessonTopic from './topic.reducer';
import * as fromLesson from './lesson.reducer';
import { routerReducer, RouterReducerState } from '@ngrx/router-store';


export interface State {
    router: RouterReducerState;
    menu: fromMenu.State;
    materials: fromMaterial.State;
    lessonTopics: fromLessonTopic.State;
    lessons: fromLesson.State
}

export const reducers: ActionReducerMap<State> = {
    router: routerReducer,
    menu: fromMenu.reducer,
    materials: fromMaterial.reducer,
    lessonTopics: fromLessonTopic.reducer,
    lessons: fromLesson.reducer
};

export const metaReducers: MetaReducer<State>[] = environment.production ? [] : [storeFreeze];

export const getMenuState = (state: State) => state.menu;
export const getMenuList = createSelector(getMenuState, state => state.menu);
export const getMenuActiveElement = createSelector(getMenuState, state => state.activeElement);

export const getMaterialsState = (state: State) => state.materials;
export const getMaterialsList = createSelector(getMaterialsState, state => state.items);

export const getLessonTopicsState = (state: State) => state.lessonTopics;
export const getLessonTopicsList = createSelector(getLessonTopicsState, state => state.items);


export const getLessonsState = (state: State) => state.lessons;
export const getLessonsList = createSelector(getLessonsState, state => state.lessons);
export const getLesson = createSelector(getLessonsState, state => state.lesson);
