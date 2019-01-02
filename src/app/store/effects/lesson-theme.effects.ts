import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { LessonThemeActionTypes, LoadLessonThemesSuccess } from '../actions/lesson-theme.actions';
import { switchMap, map, tap, mergeMap } from 'rxjs/operators';
import { FirebaseService } from 'src/app/core/services/firebase.service';
import { LessonTopic } from 'src/app/core/models/lesson-topic';


@Injectable()
export class LessonThemeEffects {
  @Effect() lessonThemes$: any = this.actions$
    .pipe(
      ofType(LessonThemeActionTypes.LoadLessonThemes),
      switchMap(() => this.firebaseService.topics$.pipe(
        map(data => {
          return data.map((el: any) => new LessonTopic(el));
        })
      )),
      map(data => new LoadLessonThemesSuccess(data))
    );

  constructor(
    private actions$: Actions,
    private firebaseService: FirebaseService
  ) { }
}
