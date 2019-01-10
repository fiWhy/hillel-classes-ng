import { Component, OnInit, Input } from '@angular/core';
import { Material } from '../../../core/models/material';

@Component({
  selector: 'c-material-list',
  templateUrl: './material-list.component.html',
  styleUrls: ['./material-list.component.scss']
})
export class MaterialListComponent implements OnInit {

  @Input() title = 'Materials';
  @Input() items: Material[] = [];

  constructor() { }

  ngOnInit() {
  }

}
