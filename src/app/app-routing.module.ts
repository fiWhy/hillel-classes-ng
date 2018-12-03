import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

export const routes = [
    {
        path: 'dashboard',
        loadChildren: './pages/dashboard/dashboard.module#DashboardModule'
    },
    {
        path: 'lesson/:id',
        loadChildren: './pages/lesson/lesson.module#LessonModule'
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: ''
    }
];

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [],
    providers: [],
})
export class AppRoutingModule { }