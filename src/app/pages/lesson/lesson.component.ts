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
import { UpdateTopic, AddTopic, DeleteTopic } from 'src/app/store/actions/topic.actions';
import { LoadSingleLesson, UpdateLesson } from 'src/app/store/actions/lesson.actions';
import { StoreResponse } from 'src/app/core/models/response';

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
  lessonSelect: Observable<StoreResponse<Lesson>>;
  lessonMaterialsSelect: Observable<Material[]>;

  topics$: Subscription;
  materials$: Subscription;
  lesson$: Subscription;

  materials: Material[] = [];
  topics: Topic[] = [];
  quickNavigation: Anchor[] = [];
  lesson: Lesson;
  authorized: boolean;
  previewMode = false;

  get editable() {
    return this.authorized && !this.previewMode;
  }

  constructor(
    private store: Store<State>,
    private route: ActivatedRoute,
    private authService: AuthService
  ) {
    this.materialsSelect = this.store.select(getMaterialsList);
    this.topicsSelect = this.store.select(getLessonTopicsList);
    this.lessonMaterialsSelect = this.store.select(getMaterialsList);
    this.lessonSelect = this.store.select(getLesson);

  }

  ngOnInit() {
    this.lesson$ = this.lessonSelect.subscribe(lesson => {
      if (lesson.data) {
        this.lesson = lesson.data;
        this.loadAdditionalData();
      }
    })

    this.topics$ = this.topicsSelect.subscribe(data => {
      this.topics = data;
      this.quickNavigation = data.map(topic => new Anchor(topic.anchor, topic.title));
      this.materials = LessonFirebaseService.accumulateLessonTopicsMaterials(this.topics)
    });

    this.route.params.subscribe(({ id }) => {
      this.load(id);
    });

    this.authService.authorized.subscribe(data => {
      this.authorized = data.authorized;
    });

  }

  private load(id: string) {
    this.store.dispatch(new LoadSingleLesson(id));
  }

  private loadAdditionalData() {
    this.store.dispatch(new LoadTopics(this.lesson));
    this.store.dispatch(new LoadMaterials(this.lesson));
  }
  
  togglePreview() {
    this.previewMode = !this.previewMode;
  }

  handleTopicSave(topic: Topic) {
    this.store.dispatch(new UpdateTopic(topic));
  }

  handleUpdateField(key: string, value: string) {
    const newLesson = this.lesson.clone();
    newLesson[key] = value;
    this.store.dispatch(new UpdateLesson(newLesson));
  }

  handleAddTopic() {
    const lastTopic = this.topics[this.topics.length - 1];
    const id = String(lastTopic ? Number(lastTopic.id) + 1 : 1);
    this.store.dispatch(new AddTopic(new Topic({
      id
    }, this.lesson)));
  }

  handleDeleteTopic(topic: Topic) {
    this.store.dispatch(new DeleteTopic(topic));
  }
}
