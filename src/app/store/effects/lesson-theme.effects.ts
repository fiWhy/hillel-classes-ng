import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { LessonThemeActionTypes, LoadLessonThemesSuccess } from '../actions/lesson-theme.actions';
import { switchMap, map, tap } from 'rxjs/operators';
import { FirebaseService } from 'src/app/core/services/firebase.service';


@Injectable()
export class LessonThemeEffects {
  @Effect() lessonThemes$: any = this.actions$
    .pipe(
      ofType(LessonThemeActionTypes.LoadLessonThemes),
      switchMap(() => this.firebaseService.topics.snapshotChanges()),
      map(data => new LoadLessonThemesSuccess(data)),
      tap(data => {
        console.log(data);
      }),
    )
  constructor(
    private actions$: Actions,
    private firebaseService: FirebaseService
  ) { }
}
