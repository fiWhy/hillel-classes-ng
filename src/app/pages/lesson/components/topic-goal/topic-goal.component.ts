import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { TopicGoal } from 'src/app/core/models/topic';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';
import { Material } from 'src/app/core/models/material';

@Component({
  selector: 'app-topic-goal',
  templateUrl: './topic-goal.component.html',
  styleUrls: ['./topic-goal.component.css']
})
export class TopicGoalComponent implements OnInit {
  Editor = ClassicEditor;
  editContent = false;
  editGoal = false;

  content: string;

  @Output() update = new EventEmitter<TopicGoal>();
  @Output() delete = new EventEmitter<TopicGoal>();

  @Input() item: TopicGoal;
  @Input() editable: boolean;

  constructor() { }

  ngOnInit() {
  }

  handleContentSave(data: string) {
    const newItem = this.item.clone();
    newItem.content = data;
    this.update.emit(newItem);
  }

  handleGoalSave(data: string) {
    const newItem = this.item.clone();
    newItem.goal = data;
    this.update.emit(newItem);
  }

  handleAddMaterials(materials: Material[]) {
    const newItem = this.item.clone();
    newItem.articles = [...materials];
    this.update.emit(newItem);
  }

  handleRemoveMaterial(index: number) {
    const newItem = this.item.clone();
    newItem.articles.splice(index, 1);
    this.update.emit(newItem);
  }

  handleInitializeMaterials() {
    const newItem = this.item.clone();
    newItem.articles.push(new Material({}));
    this.update.emit(newItem);
  }

  handleDeleteGoal() {
    this.delete.emit();
  }
}
