import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '@store/reducers';
import { Observable } from 'rxjs';
import { Material } from 'src/app/core/models/material';
import { getMaterialsList, getLessonThemesList, ofResult } from 'src/app/store/reducers';
import { LoadMaterials } from 'src/app/store/actions/material.actions';
import { ActivatedRoute } from '@angular/router';
import { getTopicItemsList } from './reducers';
import { LoadTopics } from './actions/topic.actions';
import { LoadLessonThemes, LessonThemeActionTypes, UpdateLessonThemes } from 'src/app/store/actions/lesson-theme.actions';
import { LessonTopic } from '@core/models/lesson-topic';
import { AuthService } from '@core/services/auth.service';

@Component({
  selector: 'c-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.scss']
})
export class LessonComponent implements OnInit {

  materials$: Observable<Material[]>;
  topics$: Observable<LessonTopic[]>;
  lessonThemes$: Observable<any>;

  materials: Material[] = [];
  topics: LessonTopic[] = [];

  authorized: boolean;

  constructor(
    private store: Store<State>,
    private route: ActivatedRoute,
    private authService: AuthService
  ) {
    this.materials$ = this.store.select(getMaterialsList);
    this.topics$ = this.store.select(getTopicItemsList);
    this.lessonThemes$ = this.store.select(getLessonThemesList);
  }

  ngOnInit() {
    this.materials$.subscribe(data => {
      this.materials = data;
    });

    this.lessonThemes$.subscribe(data => {
      this.topics = data;
      const ids = data.map(topic => topic.id);
      this.store.dispatch(new LoadMaterials(ids));
    });

    this.route.params.subscribe(({ id }) => {
      this.load(id);
    });

    this.authService.authorized.subscribe(data => {
      this.authorized = data.authorized;
    });
  }

  load(id: number) {
    this.store.dispatch(new LoadTopics(id));
    this.store.dispatch(new LoadLessonThemes());
  }

  handleTopicSave(topic: LessonTopic) {
    this.store.dispatch(new UpdateLessonThemes(topic));
  }
}
