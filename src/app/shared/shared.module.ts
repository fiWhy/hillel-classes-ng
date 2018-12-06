import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MenuComponent } from './components/menu/menu.component';
import { ArticleHeaderComponent } from './components/article-header/article-header.component';
import { MaterialListComponent } from './components/material-list/material-list.component';
import { QuickNavigationComponent } from './components/quick-navigation/quick-navigation.component';

@NgModule({
  declarations: [
    MenuComponent,
    ArticleHeaderComponent,
    MaterialListComponent,
    QuickNavigationComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    MenuComponent,
    ArticleHeaderComponent,
    MaterialListComponent,
    QuickNavigationComponent
  ]
})
export class SharedModule { }
