import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
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
    MenuComponent
  ]
})
export class SharedModule { }
