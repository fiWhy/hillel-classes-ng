import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import * as menu from '../actions/menu.actions';
import menuList from '../../mocks/menu';

@Injectable()
export class MenuEffects {

  @Effect() menu$: Observable<menu.Actions> = this.actions$
    .pipe(
      ofType(menu.MenuActions.GET_MENU),
      map(() => new menu.SetMenuAction(menuList)),
      catchError(() => of(new menu.SetMenuAction([])))
    )

  constructor(private actions$: Actions) { }
}
