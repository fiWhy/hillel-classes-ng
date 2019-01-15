import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { TopicActionTypes, LoadTopicsSuccess, UpdateTopicSuccess, AddTopicSuccess, DeleteTopicSuccess } from '../actions/topic.actions';
import { switchMap, map, pluck, tap } from 'rxjs/operators';
import { FirebaseService } from 'src/app/core/services/firebase.service';
import { Topic } from 'src/app/core/models/topic';
import { Lesson } from 'src/app/core/models/lesson';
import { LessonFirebaseService } from 'src/app/core/services/lesson-firebase.service';


@Injectable()
export class TopicEffects {
  @Effect() lessonTopics$: any = this.actions$
    .pipe(
      ofType(TopicActionTypes.LoadTopics),
      pluck('payload'),
      switchMap((lesson: Lesson) => this.lessonFirebaseService.getTopics(lesson).pipe(
        map(data => {
          return data.map((el: any) => new Topic(el, lesson));
        })
      )),
      map(data => new LoadTopicsSuccess(data))
    );

  @Effect() updateLessonTopic$: any = this.actions$
    .pipe(
      ofType(TopicActionTypes.UpdateTopic),
      pluck('payload'),
      tap((data: Topic) => {
        this.lessonFirebaseService.updateTopic(data);
      }),
      map(() => new UpdateTopicSuccess())
    );

  @Effect() addLessonTopic$: any = this.actions$
    .pipe(
      ofType(TopicActionTypes.AddTopic),
      pluck('payload'),
      tap((data: Topic) => {
        this.lessonFirebaseService.addTopic(data);
      }),
      map(() => new AddTopicSuccess())
    );

  @Effect() deleteLessonTopic$: any = this.actions$
    .pipe(
      ofType(TopicActionTypes.DeleteTopic),
      pluck('payload'),
      tap((data: Topic) => {
        this.lessonFirebaseService.deleteTopic(data);
      }),
      map(() => new DeleteTopicSuccess())
    );

  constructor(
    private actions$: Actions,
    private lessonFirebaseService: LessonFirebaseService
  ) { }
}
