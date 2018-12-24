import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '@store/reducers';
import { Observable } from 'rxjs';
import { Material } from 'src/app/shared/components/material-list/models/material';
import { getMaterialsList, getLessonThemesList } from 'src/app/store/reducers';
import { LoadMaterials } from 'src/app/store/actions/material.actions';
import { ActivatedRoute } from '@angular/router';
import { Topic } from './models/topic';
import { getTopicItemsList } from './reducers';
import { LoadTopics } from './actions/topic.actions';
import { LoadLessonThemes } from 'src/app/store/actions/lesson-theme.actions';

@Component({
  selector: 'c-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.scss']
})
export class LessonComponent implements OnInit {

  materials$: Observable<Material[]>;
  topics$: Observable<Topic[]>;
  lessonThemes$: Observable<any>;

  materials: Material[] = [];
  topics: Topic[] = [];

  constructor(
    private store: Store<State>,
    private route: ActivatedRoute
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
      console.log('Themes', data);
    })

    this.topics$.subscribe(data => {
      this.topics = data;
    })

    this.route.params.subscribe(({ id }) => {
      this.store.dispatch(new LoadMaterials(id));
      this.store.dispatch(new LoadTopics(id));
      this.store.dispatch(new LoadLessonThemes());
    })
  }

}
