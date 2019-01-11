import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

import { MenuComponent } from './components/menu/menu.component';
import { ArticleHeaderComponent } from './components/article-header/article-header.component';
import { MaterialListComponent } from './components/material-list/material-list.component';
import { QuickNavigationComponent } from './components/quick-navigation/quick-navigation.component';
import { StickyDirective } from './directives/sticky.directive';
import { EditableInputComponent } from './components/editable-input/editable-input.component';

@NgModule({
  declarations: [
    MenuComponent,
    ArticleHeaderComponent,
    MaterialListComponent,
    QuickNavigationComponent,
    StickyDirective,
    EditableInputComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule,
    CKEditorModule
  ],
  exports: [
    MenuComponent,
    ArticleHeaderComponent,
    MaterialListComponent,
    QuickNavigationComponent,
    EditableInputComponent
  ]
})
export class SharedModule { }
