import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { LessonActionTypes, LoadLessonsSuccess, LoadLessonsError, LoadSingleLessonSuccess, LoadSingleLessonError, UpdateLessonSuccess, UpdateLessonError, CreateLessonSuccess, CreateLessonError } from '../actions/lesson.actions';
import { switchMap, catchError, map, pluck, tap } from 'rxjs/operators';
import { FirebaseService } from '@core/services/firebase.service';
import { of } from 'rxjs';
import { Lesson } from 'src/app/core/models/lesson';
import { LessonFirebaseService } from 'src/app/core/services/lesson-firebase.service';
import { StoreErrorResponse, StoreResponse, StoreSuccessResponse } from 'src/app/core/models/response';


@Injectable()
export class LessonEffects {
  @Effect() lessons$ = this.actions$
    .pipe(
      ofType(LessonActionTypes.LoadLessons),
      switchMap(() =>
        this.firebaseService.lessons$
          .pipe(
            map((lessons: Lesson[]) => new LoadLessonsSuccess(new StoreSuccessResponse(lessons)))
          )
      ),
      catchError(err => of(new LoadLessonsError(new StoreErrorResponse(err))))
    )

  @Effect() lesson$ = this.actions$
    .pipe(
      ofType(LessonActionTypes.LoadSingleLesson),
      pluck('payload'),
      switchMap((id: string) =>
        this.lessonFirebaseService.getLessonChanges(id)
          .pipe(
            map((lesson: Lesson) => new LoadSingleLessonSuccess(new StoreSuccessResponse(lesson)))
          )
      ),
      catchError(err => of(new LoadSingleLessonError(new StoreErrorResponse(err))))
    )

  @Effect() lessonUpdate$ = this.actions$
    .pipe(
      ofType(LessonActionTypes.UpdateLesson),
      pluck('payload'),
      switchMap((lesson: Lesson) =>
        this.lessonFirebaseService.updateLesson(lesson)
          .pipe(
            map(() => new UpdateLessonSuccess(new StoreSuccessResponse()))
          )
      ),
      catchError(err => of(new UpdateLessonError(new StoreErrorResponse(err))))
    )

  @Effect() lessonCreate$ = this.actions$
    .pipe(
      ofType(LessonActionTypes.CreateLesson),
      pluck('payload'),
      switchMap((lesson: Lesson) => {
        console.log(lesson);
        return this.lessonFirebaseService.createLesson(lesson)
          .pipe(
            map(() => new CreateLessonSuccess(new StoreSuccessResponse()))
          )
      }
      ),
      catchError(err => of(new CreateLessonError(new StoreErrorResponse(err))))
    )

  constructor(
    private actions$: Actions,
    private firebaseService: FirebaseService,
    private lessonFirebaseService: LessonFirebaseService
  ) { }
}
