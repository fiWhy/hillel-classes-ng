import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LessonComponent } from './lesson.component';

const routes: Routes = [
    {
        path: '',
        component: LessonComponent
    }
]

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule],
    providers: [],
})
export class LessonRoutingModule { }