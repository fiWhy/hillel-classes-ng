import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Topic, TopicGoal } from '@core/models/topic';

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

  @Output() update = new EventEmitter<Topic>();
  @Output() delete = new EventEmitter<Topic>();

  constructor() { }

  ngOnInit() { }

  handleUpdateField(field: string, value: string) {
    const newItem = this.item.clone();
    newItem[field] = value;
    this.update.emit(newItem)
  }

  handleUpdate(goal: TopicGoal, index: number) {
    const newItem = this.item.clone();
    newItem.data[index] = goal;
    this.update.emit(newItem);
  }

  handleAddGoal() {
    const newItem = this.item.clone();
    newItem.data.push(new TopicGoal({}));
    this.update.emit(newItem);
  }

  handleDelete() {
    this.delete.emit(this.item);
  }

  handleDeleteGoal(goal: TopicGoal, goalIndex: number) {
    const newItem = this.item.clone();
    newItem.data.splice(goalIndex, 1);
    this.update.emit(newItem);
  }

}
