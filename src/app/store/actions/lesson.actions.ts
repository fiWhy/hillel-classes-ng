import { Action } from '@ngrx/store';
import { Lesson } from 'src/app/core/models/lesson';
import { StoreErrorResponse, StoreSuccessResponse, StorePending } from 'src/app/core/models/response';

export enum LessonActionTypes {
  LoadLessons = '[Lesson] Load Lessons',
  LoadLessonsSuccess = '[Lesson] Load Lessons Success',
  LoadLessonsError = '[Lesson] Load Lessons Error',
  LoadSingleLesson = '[Lesson] Load Single Lesson',
  LoadSingleLessonSuccess = '[Lesson] Load Single Lesson Success',
  LoadSingleLessonError = '[Lesson] Load Single Lesson Error',
  UpdateLesson = '[Lesson] Update Lesson',
  UpdateLessonSuccess = '[Lesson] Update Lesson Success',
  UpdateLessonError = '[Lesson] Update Lesson Error',
  CreateLesson = '[Lesson] Create Lesson',
  CreateLessonSuccess = '[Lesson] Create Lesson Success',
  CreateLessonError = '[Lesson] Create Lesson Error',
  LoadLessonMaterials = '[Lesson] Load Lesson Materials',
  LoadLessonMaterialsSuccess = '[Lesson] Load Lesson Materials Success',
  LoadLessonMaterialsError = '[Lesson] Load Lesson Materials Error',
}

export class LoadLessons implements Action {
  readonly type = LessonActionTypes.LoadLessons;
}

export class LoadLessonsSuccess implements Action {
  readonly type = LessonActionTypes.LoadLessonsSuccess;

  constructor(public payload: StoreSuccessResponse<Lesson[]>) { }
}

export class LoadLessonsError implements Action {
  readonly type = LessonActionTypes.LoadLessonsError;
  constructor(public payload: StoreErrorResponse) { }
}

export class LoadSingleLesson implements Action {
  readonly type = LessonActionTypes.LoadSingleLesson;

  constructor(public payload: string) { }
}

export class LoadSingleLessonSuccess implements Action {
  readonly type = LessonActionTypes.LoadSingleLessonSuccess;

  constructor(public payload: StoreSuccessResponse<Lesson>) { }
}

export class LoadSingleLessonError implements Action {
  readonly type = LessonActionTypes.LoadSingleLessonError;
  constructor(public payload: StoreErrorResponse) { }
}

export class UpdateLesson implements Action {
  readonly type = LessonActionTypes.UpdateLesson;

  constructor(public payload: Lesson) { }
}

export class UpdateLessonSuccess implements Action {
  readonly type = LessonActionTypes.UpdateLessonSuccess;

  constructor(public payload: StoreSuccessResponse<null>) { }
}

export class UpdateLessonError implements Action {
  readonly type = LessonActionTypes.UpdateLessonError;

  constructor(public payload: StoreErrorResponse) { }
}


export class CreateLesson implements Action {
  readonly type = LessonActionTypes.CreateLesson;

  constructor(public payload: Lesson) { }
}

export class CreateLessonSuccess implements Action {
  readonly type = LessonActionTypes.CreateLessonSuccess;

  constructor(public payload: StoreSuccessResponse<null>) { }
}

export class CreateLessonError implements Action {
  readonly type = LessonActionTypes.CreateLessonError;

  constructor(public payload: StoreErrorResponse) { }
}

export type LessonActions = LoadLessons |
  LoadLessonsSuccess |
  LoadLessonsError |
  LoadSingleLesson |
  UpdateLesson |
  UpdateLessonSuccess |
  UpdateLessonError |
  CreateLesson |
  CreateLessonSuccess |
  CreateLessonError |
  LoadSingleLessonSuccess |
  LoadSingleLessonError;
