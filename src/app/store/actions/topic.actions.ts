import { Action } from '@ngrx/store';
import { Topic } from '@core/models/topic';
import { Lesson } from '@core/models/lesson';

export enum TopicActionTypes {
  LoadTopics = '[Topic] Load Topics',
  LoadTopicsSuccess = '[Topic] Load Topics Success',
  LoadTopicsError = '[Topic] Load Topics Error',
  UpdateTopic = '[Topic] Update Topic',
  AddTopic = '[Topic] Add Topic',
  AddTopicSuccess = '[Topic] Add Topic Success',
  AddTopicError = '[Topic] Add Topic Error',
  DeleteTopic = '[Topic] Delete Topic',
  DeleteTopicsuccess = '[Topic] Delete Topic Success',
  DeleteTopicError = '[Topic] Delete Topic Error',
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

export class AddTopic implements Action {
  readonly type = TopicActionTypes.AddTopic;

  constructor(public payload: Topic) { }
}
export class AddTopicSuccess implements Action {
  readonly type = TopicActionTypes.AddTopicSuccess;

  constructor() { }
}
export class AddTopicError implements Action {
  readonly type = TopicActionTypes.AddTopicError;

  constructor() { }
}
export class DeleteTopic implements Action {
  readonly type = TopicActionTypes.DeleteTopic;

  constructor(public payload: Topic) { }
}
export class DeleteTopicSuccess implements Action {
  readonly type = TopicActionTypes.DeleteTopicsuccess;

  constructor() { }
}
export class DeleteTopicError implements Action {
  readonly type = TopicActionTypes.DeleteTopicError;

  constructor() { }
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
  UpdateTopicSuccess |
  UpdateTopicError |
  AddTopic |
  AddTopicSuccess |
  AddTopicError |
  DeleteTopic |
  DeleteTopicSuccess |
  DeleteTopicError;
