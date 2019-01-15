import { Component, OnInit } from '@angular/core';
import { State } from '@store/reducers';
import { Store } from '@ngrx/store';
import { getLessonsList } from 'src/app/store/reducers';
import { Observable, Subscription } from 'rxjs';
import { Lesson } from 'src/app/core/models/lesson';
import { LoadLessons, CreateLesson } from '@store/actions/lesson.actions';
import { AutoUnsubscribe } from 'ngx-auto-unsubscribe';
import { StoreResponse, ResponseType } from 'src/app/core/models/response';

@AutoUnsubscribe()
@Component({
  selector: 'c-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  lessonsSelect: Observable<StoreResponse<Lesson[]>>;
  loaded: boolean;
  lessons$: Subscription;
  lessons: Lesson[] = [];
  constructor(
    private store: Store<State>
  ) {
    this.lessonsSelect = this.store.select(getLessonsList);
  }

  private load() {
    this.store.dispatch(new LoadLessons());
  }

  ngOnInit() {
    this.lessons$ = this.lessonsSelect.subscribe(lessons => {
      this.loaded = lessons.type === ResponseType.SUCCESS;
      this.lessons = lessons.data;
    });
    this.load();
  }

  handleCreateLesson() {
    const lastLesson = this.lessons[this.lessons.length-1];
    const lastLessonId = lastLesson ? Number(lastLesson.id) : 0;
    this.store.dispatch(new CreateLesson(new Lesson({
      id: String(!lastLessonId ? 1 : lastLessonId + 1),
      title: 'Placeholder title'
    })));
  }

}
