import { Action } from '@ngrx/store';
import { LessonTopic } from '@core/models/lesson-topic';

export enum LessonThemeActionTypes {
  LoadLessonThemes = '[LessonTheme] Load LessonThemes',
  UpdateLessonThemes = '[LessonTheme] Update LessonThemes',
  LoadLessonThemesSuccess = '[LessonTheme] Load LessonThemes Success',
  UpdateLessonThemesSuccess = '[LessonTheme] Update LessonThemes Success'
}

export class LoadLessonThemes implements Action {
  readonly type = LessonThemeActionTypes.LoadLessonThemes;
}

export class UpdateLessonThemes implements Action {
  readonly type = LessonThemeActionTypes.UpdateLessonThemes;

  constructor(public payload: LessonTopic) { }
}

export class LoadLessonThemesSuccess implements Action {
  readonly type = LessonThemeActionTypes.LoadLessonThemesSuccess;

  constructor(public payload: any) { }
}

export class UpdateLessonThemesSuccess implements Action {
  readonly type = LessonThemeActionTypes.UpdateLessonThemesSuccess;
}

export type LessonThemeActions = LoadLessonThemes |
  LoadLessonThemesSuccess |
  UpdateLessonThemes |
  UpdateLessonThemesSuccess;
