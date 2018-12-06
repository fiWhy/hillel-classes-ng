import { Action } from '@ngrx/store';
import { Topic } from '../models/topic';

export enum TopicActionTypes {
  LoadTopics = '[Topic] Load Topics',
  LoadTopicsSuccess = '[Topic] Load Topics Success',
  LoadTopicsError = '[Topic] Load Topics Error'
}

export class LoadTopics implements Action {
  readonly type = TopicActionTypes.LoadTopics;

  constructor(public payload: number) { }
}

export class LoadTopicsSuccess implements Action {
  readonly type = TopicActionTypes.LoadTopicsSuccess;

  constructor(public payload: Topic[]) { }
}

export class LoadTopicsError implements Action {
  readonly type = TopicActionTypes.LoadTopicsError;
}

export type TopicActions = LoadTopics | LoadTopicsSuccess | LoadTopicsError;
