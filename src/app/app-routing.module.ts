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
        redirectTo: '/dashboard'
    }
];

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forRoot(routes, {
            anchorScrolling: 'enabled'
        })
    ],
    exports: [],
    providers: [],
})
export class AppRoutingModule { }