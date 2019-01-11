import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { map, catchError, pluck, switchMap, tap } from 'rxjs/operators';

import { FirebaseService } from '@core/services/firebase.service';
import { LessonFirebaseService } from 'src/app/core/services/lesson-firebase.service';
import { Lesson } from 'src/app/core/models/lesson';
import { MaterialActions, MaterialActionTypes, LoadMaterialsSuccess, LoadMaterialsError } from '../actions/material.actions';

@Injectable()
export class MaterialEffects {

  @Effect() materials$: Observable<MaterialActions> = this.actions$
    .pipe(
      ofType(MaterialActionTypes.LoadMaterials),
      pluck('payload'),
      switchMap((lesson: Lesson) =>
        this.lessonFirebaseService.getLessonMaterials(lesson)
          .pipe(
            map(data => new LoadMaterialsSuccess(data))
          )),
      catchError(() => of(new LoadMaterialsError()))
    )

  constructor(
    private actions$: Actions,
    private firebaseService: FirebaseService,
    private lessonFirebaseService: LessonFirebaseService
  ) { }
}
