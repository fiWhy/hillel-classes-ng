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

  @Output() goalSave = new EventEmitter<TopicGoal>();
  @Output() contentSave = new EventEmitter<TopicGoal>();
  @Output() materialsAdd = new EventEmitter<Material[]>();

  @Input() item: TopicGoal;
  @Input() editable: boolean;

  constructor() { }

  ngOnInit() {
  }

  handleContentSave(data: string) {
    const newItem = this.item.clone();
    newItem.content = data;
    this.contentSave.emit(newItem);
  }

  handleGoalSave(data: string) {
    const newItem = this.item.clone();
    newItem.goal = data;
    this.goalSave.emit(newItem);
  }

  handleAddMaterials(materials: Material[]) {
    this.materialsAdd.emit(materials);
  }
}
