import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { LessonThemeActionTypes, LoadLessonThemesSuccess, UpdateLessonThemesSuccess } from '../actions/lesson-theme.actions';
import { switchMap, map, pluck, tap } from 'rxjs/operators';
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

  @Effect() updateLessonThemes$: any = this.actions$
    .pipe(
      ofType(LessonThemeActionTypes.UpdateLessonThemes),
      pluck('payload'),
      tap((data: LessonTopic) => {
        this.firebaseService.updateTopics(data);
      }),
      map(() => new UpdateLessonThemesSuccess())
    );

  constructor(
    private actions$: Actions,
    private firebaseService: FirebaseService
  ) { }
}
