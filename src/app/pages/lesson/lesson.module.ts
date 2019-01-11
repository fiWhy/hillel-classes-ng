import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LessonComponent } from './lesson.component';
import { LessonRoutingModule } from './lesson-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { TopicComponent } from './components/topic/topic.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { TopicGoalComponent } from './components/topic-goal/topic-goal.component';

@NgModule({
  declarations: [
    LessonComponent,
    TopicComponent,
    TopicGoalComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    LessonRoutingModule,
    StoreModule.forFeature('Topic', []),
    EffectsModule.forFeature([])
  ]
})
export class LessonModule { }
