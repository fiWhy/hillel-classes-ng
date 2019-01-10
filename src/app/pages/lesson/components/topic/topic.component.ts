import { Component, OnInit, Input, Output } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { EventEmitter } from '@angular/core';
import { ChangeEvent } from '@ckeditor/ckeditor5-angular/ckeditor.component';
import { LessonTopic } from '@core/models/lesson-topic';

@Component({
  selector: 'c-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit {
  Editor = ClassicEditor;
  @Input() item = new LessonTopic({});
  @Input() editable: boolean;

  editContent = false;
  editGoal = false;

  content: string;

  @Output() goalSave = new EventEmitter<LessonTopic>();
  @Output() contentSave = new EventEmitter<LessonTopic>();

  constructor() { }

  ngOnInit() {
  }

  enableContentEditor(e) {
    this.content = this.item.content;
    this.editContent = this.editable;
  }

  disableContentEditor(e) {
    this.editContent = false;
    if (this.content !== this.item.content) {
      const newItem = this.item.clone();
      newItem.content = this.content;
      this.contentSave.emit(newItem);
    }
  }

  enableGoalEditor(e) {
    this.content = this.item.goal;
    this.editGoal = this.editable;
  }

  disableGoalEditor(e) {
    this.editGoal = false;
    if (this.content !== this.item.goal) {
      const newItem = this.item.clone();
      newItem.goal = this.content;
      this.goalSave.emit(newItem);
    }
  }

  handleContentChanged({ editor }: ChangeEvent) {
    this.content = editor.getData();
  }
}
