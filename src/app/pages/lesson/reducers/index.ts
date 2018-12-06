import { ActionReducerMap, createSelector, createFeatureSelector } from '@ngrx/store';

import * as fromTopic from '../reducers/topic.reducer';
export interface State {
    topics: fromTopic.State;
}

export const reducers: ActionReducerMap<State> = {
    topics: fromTopic.reducer
};

export const getTopicState = createFeatureSelector<State>('Topic');
export const getTopicItemsList = createSelector(getTopicState, state => state.topics.items);
