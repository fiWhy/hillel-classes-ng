import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { LessonActionTypes, LoadLessonsSuccess, LoadLessonsError } from '../actions/lesson.actions';
import { switchMap, catchError, map } from 'rxjs/operators';
import { FirebaseService } from '@core/services/firebase.service';
import { of } from 'rxjs';
import { Lesson } from 'src/app/core/models/lesson';


@Injectable()
export class LessonEffects {
  @Effect() lessons$ = this.actions$
    .pipe(
      ofType(LessonActionTypes.LoadLessons),
      switchMap(() =>
        this.firebaseService.lessons$
          .pipe(
            map((lessons: Lesson[]) => new LoadLessonsSuccess(lessons))
          )
      ),
      catchError(err => of(new LoadLessonsError()))
    )

  constructor(
    private actions$: Actions,
    private firebaseService: FirebaseService
  ) { }
}
