import { Action } from '@ngrx/store';
import { Lesson } from 'src/app/core/models/lesson';

export enum LessonActionTypes {
  LoadLessons = '[Lesson] Load Lessons',
  LoadLessonsSuccess = '[Lesson] Load Lessons Success',
  LoadLessonsError = '[Lesson] Load Lessons Error',
  LoadSingleLesson = '[Lesson] Load Single Lesson',
  LoadSingleLessonSuccess = '[Lesson] Load Single Lesson Success',
  LoadSingleLessonError = '[Lesson] Load Single Lesson Error',
  LoadLessonMaterials = '[Lesson] Load Lesson Materials',
  LoadLessonMaterialsSuccess = '[Lesson] Load Lesson Materials Success',
  LoadLessonMaterialsError = '[Lesson] Load Lesson Materials Error',
}

export class LoadLessons implements Action {
  readonly type = LessonActionTypes.LoadLessons;
}

export class LoadLessonsSuccess implements Action {
  readonly type = LessonActionTypes.LoadLessonsSuccess;

  constructor(public payload: Lesson[]) { }
}

export class LoadLessonsError implements Action {
  readonly type = LessonActionTypes.LoadLessonsError;
}

export class LoadSingleLesson implements Action {
  readonly type = LessonActionTypes.LoadSingleLesson;

  constructor(public payload: string) { }
}

export class LoadSingleLessonSuccess implements Action {
  readonly type = LessonActionTypes.LoadSingleLessonSuccess;

  constructor(public payload: Lesson) { }
}

export class LoadSingleLessonError implements Action {
  readonly type = LessonActionTypes.LoadSingleLessonError;
}

export type LessonActions = LoadLessons |
  LoadLessonsSuccess |
  LoadLessonsError |
  LoadSingleLesson |
  LoadSingleLessonSuccess |
  LoadSingleLessonError;
