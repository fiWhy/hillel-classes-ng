import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LessonComponent } from './lesson.component';
import { LessonRoutingModule } from './lesson-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { TopicComponent } from './components/topic/topic.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { TopicEffects } from './effects/topic.effects';

@NgModule({
  declarations: [
    LessonComponent,
    TopicComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    LessonRoutingModule,
    StoreModule.forFeature('Topic', reducers),
    EffectsModule.forFeature([TopicEffects])
  ]
})
export class LessonModule { }
