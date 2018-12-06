import { Component, OnInit, Input } from '@angular/core';
import { Topic } from '../../models/topic';

@Component({
  selector: 'c-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit {

  @Input() item = new Topic(null, null, null, null);

  constructor() { }

  ngOnInit() {
  }

}
