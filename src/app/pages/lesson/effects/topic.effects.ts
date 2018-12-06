import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { TopicActionTypes, LoadTopicsSuccess, LoadTopicsError } from '../actions/topic.actions';
import { map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';


@Injectable()
export class TopicEffects {

  @Effect() topics$ = this.actions$
    .pipe(
      ofType(TopicActionTypes.LoadTopics),
      map(() => new LoadTopicsSuccess([])),
      catchError(() => of(new LoadTopicsError()))
    )

  constructor(private actions$: Actions) { }
}
