import { Action } from '@ngrx/store';
import { Topic } from '@core/models/topic';
import { Lesson } from '@core/models/lesson';

export enum TopicActionTypes {
  LoadTopics = '[Topic] Load Topics',
  LoadTopicsSuccess = '[Topic] Load Topics Success',
  LoadTopicsError = '[Topic] Load Topics Error',
  UpdateTopic = '[Topic] Update Topic',
  UpdateTopicSuccess = '[Topic] Update Topic Success',
  UpdateTopicError = '[Topic] Update Topic Error'
}

export class LoadTopics implements Action {
  readonly type = TopicActionTypes.LoadTopics;

  constructor(public payload: Lesson) { }
}

export class LoadTopicsSuccess implements Action {
  readonly type = TopicActionTypes.LoadTopicsSuccess;

  constructor(public payload: Topic[]) { }
}

export class LoadTopicsError implements Action {
  readonly type = TopicActionTypes.LoadTopicsError;
}

export class UpdateTopic implements Action {
  readonly type = TopicActionTypes.UpdateTopic;

  constructor(public payload: Topic) { }
}

export class UpdateTopicSuccess implements Action {
  readonly type = TopicActionTypes.UpdateTopicSuccess;
}

export class UpdateTopicError implements Action {
  readonly type = TopicActionTypes.UpdateTopicError;
}

export type TopicActions = LoadTopics |
  LoadTopicsSuccess |
  LoadTopicsError |
  UpdateTopic |
  UpdateTopicSuccess;
