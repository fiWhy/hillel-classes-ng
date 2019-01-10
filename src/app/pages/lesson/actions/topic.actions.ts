import { Action } from '@ngrx/store';
import { LessonTopic } from '@core/models/lesson-topic';

export enum TopicActionTypes {
  LoadTopics = '[Topic] Load Topics',
  UpdateTopics = '[Topic] Update Topics',
  LoadTopicsSuccess = '[Topic] Load Topics Success',
  UpdateTopicsSuccess = '[Topic] Update Topics Success',
  LoadTopicsError = '[Topic] Load Topics Error'
}

export class LoadTopics implements Action {
  readonly type = TopicActionTypes.LoadTopics;

  constructor(public payload: number) { }
}
export class UpdateTopics implements Action {
  readonly type = TopicActionTypes.LoadTopics;

  constructor(public payload: { key: string, value: LessonTopic }) { }
}

export class LoadTopicsSuccess implements Action {
  readonly type = TopicActionTypes.LoadTopicsSuccess;

  constructor(public payload: LessonTopic[]) { }
}

export class UpdateTopicsSuccess implements Action {
  readonly type = TopicActionTypes.UpdateTopicsSuccess;

  constructor(public payload: LessonTopic[]) { }
}

export class LoadTopicsError implements Action {
  readonly type = TopicActionTypes.LoadTopicsError;
}

export type TopicActions = LoadTopics | LoadTopicsSuccess | LoadTopicsError;
