import { Component, OnInit } from '@angular/core';
import { AutoUnsubscribe } from 'ngx-auto-unsubscribe';
import { Store } from '@ngrx/store';
import { State } from '@store/reducers';
import { Observable, Subscription } from 'rxjs';
import { Material } from '@core/models/material';
import { getMaterialsList, getLessonTopicsList, getLesson } from '@store/reducers';
import { ActivatedRoute } from '@angular/router';
import { LoadTopics } from '@store/actions/topic.actions';
import { Topic } from '@core/models/topic';
import { AuthService } from '@core/services/auth.service';
import { Lesson } from '@core/models/lesson';
import { LoadMaterials } from '@store/actions/material.actions';
import { LessonFirebaseService } from '@core/services/lesson-firebase.service';
import { Anchor } from '@shared/components/quick-navigation/models/anchor';
import { UpdateTopic } from 'src/app/store/actions/topic.actions';

@AutoUnsubscribe()
@Component({
  selector: 'c-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.scss']
})
export class LessonComponent implements OnInit {
  private id: string;
  materialsSelect: Observable<Material[]>;
  topicsSelect: Observable<Topic[]>;
  lessonSelect: Observable<Lesson>;
  lessonMaterialsSelect: Observable<Material[]>;

  topics$: Subscription;
  materials$: Subscription;
  lesson$: Subscription;

  materials: Material[] = [];
  topics: Topic[] = [];
  quickNavigation: Anchor[] = [];

  authorized: boolean;

  constructor(
    private store: Store<State>,
    private route: ActivatedRoute,
    private authService: AuthService
  ) {
    this.materialsSelect = this.store.select(getMaterialsList);
    this.topicsSelect = this.store.select(getLessonTopicsList);
    this.lessonMaterialsSelect = this.store.select(getLessonTopicsList);
    this.lessonSelect = this.store.select(getLesson);

  }

  ngOnInit() {
    this.materials$ = this.materialsSelect.subscribe(data => {
      this.materials = [
        ...data,
        ...LessonFirebaseService.accumulateLessonTopicsMaterials(this.topics)
      ];
    });

    this.topics$ = this.topicsSelect.subscribe(data => {
      this.topics = data;
      this.quickNavigation = data.map(topic => new Anchor(topic.anchor, topic.title));
      this.store.dispatch(new LoadMaterials(new Lesson({
        id: 'lesson-1'
      })));
    });

    this.route.params.subscribe(({ id }) => {
      this.id = 'lesson-1';
      this.load();
    });

    this.authService.authorized.subscribe(data => {
      this.authorized = data.authorized;
    });

  }

  load() {
    this.store.dispatch(new LoadTopics(new Lesson({
      id: this.id
    })));
  }

  handleTopicSave(topic: Topic) {
    this.store.dispatch(new UpdateTopic(topic));
  }
}
