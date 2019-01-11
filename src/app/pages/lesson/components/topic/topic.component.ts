import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Topic, TopicGoal } from '@core/models/topic';
import { Material } from 'src/app/core/models/material';

@Component({
  selector: 'c-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit {
  @Input() item = new Topic({}, null);
  @Input() editable: boolean;

  editContent = false;
  editGoal = false;

  @Output() change = new EventEmitter<Topic>();

  constructor() { }

  ngOnInit() { }

  handleContentSave(item: TopicGoal, index: number) {
    const newItem = this.item.clone();
    newItem.data.splice(index, 1, item);
    this.change.emit(newItem);
  }

  handleGoalSave(item: TopicGoal, index: number) {
    const newItem = this.item.clone();
    newItem.data.splice(index, 1, item);
    this.change.emit(newItem);
  }

  handleMaterialsAdd(materials: Material[]) {
    const newItem = this.item.clone();
    newItem.articles = [...newItem.articles, ...materials];
    this.change.emit(newItem);
  }

}
