import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { map, catchError, pluck, switchMap, tap } from 'rxjs/operators';

import * as material from '../actions/material.actions';
import { FirebaseService } from '@core/services/firebase.service';
import { Material } from 'src/app/core/models/material';

@Injectable()
export class MaterialEffects {

  @Effect() materials$: Observable<material.MaterialActions> = this.actions$
    .pipe(
      ofType(material.MaterialActionTypes.LoadMaterials),
      pluck('payload'),
      switchMap((topicIds: string[]) =>
        this.firebaseService.materials$.pipe(
          map((list: any[]) => list.map(el => new Material(el))),
          map((list: Material[]) => list.filter(m => topicIds.includes(m.topicId))),
          map((materialList: Material[]) => {
            return new material.LoadMaterialsSuccess(materialList)
          })
        )),
      catchError(() => of(new material.LoadMaterialsError()))
    )

  constructor(
    private actions$: Actions,
    private firebaseService: FirebaseService
  ) { }
}
