import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Material } from '../../../core/models/material';

@Component({
  selector: 'c-material-list',
  templateUrl: './material-list.component.html',
  styleUrls: ['./material-list.component.scss']
})
export class MaterialListComponent implements OnInit {

  @Input() title = 'Materials';
  @Input() items: Material[] = [];
  @Input() editable = true;

  newItems: Material[] = [];

  @Output() add = new EventEmitter<Material[]>();

  constructor() { }

  ngOnInit() {
  }

  handleAddMaterial() {
    this.newItems.push(new Material({}))
  }

  removeMaterial(index: number) {

  }

  handleSave() {
    const items = this.newItems.splice(0);
    this.add.emit(items.filter(m => m.link && m.text));
  }

}
