import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Material } from '../../../core/models/material';

class ListItem {
  constructor(public material: Material, public edit = false) { }
}

@Component({
  selector: 'c-material-list',
  templateUrl: './material-list.component.html',
  styleUrls: ['./material-list.component.scss']
})
export class MaterialListComponent implements OnInit {

  @Input() title = 'Materials';

  listItems: ListItem[] = []

  @Input()
  public set items(value: Material[]) {
    this.listItems = value.map(m => ({
      edit: false,
      material: new Material(m)
    }))
  }

  @Input() editable = true;

  newItems: ListItem[] = [];

  @Output() add = new EventEmitter<Material[]>();
  @Output() remove = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  handleAddMaterial() {
    this.listItems.push(new ListItem(new Material({}), true))
  }

  handleRemove(index: number) {
    this.remove.emit(index);
  }

  handleSave() {
    const items = this.listItems.splice(0).map(l => l.material);
    this.add.emit(items.filter(m => m.link && m.text));
  }

  handleToggleEdit(index: number) {
    this.listItems[index].edit = !this.listItems[index].edit;
  }

  handleModel(e) {
    console.log(e);
  }

  get notSavedExists() {
    return this.listItems.some(l => l.edit);
  }

  editMaterial(index: number, fieldKey, fieldValue) {
    this.listItems[index][fieldKey] = fieldValue;
  }

}
