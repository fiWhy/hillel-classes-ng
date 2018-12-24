import { Action } from '@ngrx/store';
import { Lesson } from 'src/app/core/models/lesson';
import { AngularFireList } from 'angularFire2/database';

export enum LessonThemeActionTypes {
  LoadLessonThemes = '[LessonTheme] Load LessonThemes',
  LoadLessonThemesSuccess = '[LessonTheme] Load LessonThemes Success'
}

export class LoadLessonThemes implements Action {
  readonly type = LessonThemeActionTypes.LoadLessonThemes;
}

export class LoadLessonThemesSuccess implements Action {
  readonly type = LessonThemeActionTypes.LoadLessonThemesSuccess;

  constructor(public payload: any) { }
}

export type LessonThemeActions = LoadLessonThemes | LoadLessonThemesSuccess;
