import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import * as material from '../actions/material.actions';
import materialList from '../../mocks/materials';

@Injectable()
export class MaterialEffects {

  @Effect() materials$: Observable<material.MaterialActions> = this.actions$
    .pipe(
      ofType(material.MaterialActionTypes.LoadMaterials),
      map(() => new material.LoadMaterialsSuccess(materialList)),
      catchError(() => of(new material.LoadMaterialsError()))
    )

  constructor(private actions$: Actions) { }
}
