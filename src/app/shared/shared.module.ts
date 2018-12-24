import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MenuComponent } from './components/menu/menu.component';
import { ArticleHeaderComponent } from './components/article-header/article-header.component';
import { MaterialListComponent } from './components/material-list/material-list.component';
import { QuickNavigationComponent } from './components/quick-navigation/quick-navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { NavComponent } from './components/nav/nav.component';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';

@NgModule({
  declarations: [
    MenuComponent,
    ArticleHeaderComponent,
    MaterialListComponent,
    QuickNavigationComponent,
    NavComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  exports: [
    MenuComponent,
    ArticleHeaderComponent,
    MaterialListComponent,
    QuickNavigationComponent,
    NavComponent
  ]
})
export class SharedModule { }
