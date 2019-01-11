import { Component, OnInit, Input } from '@angular/core';
import { Anchor } from './models/anchor';

@Component({
  selector: 'c-quick-navigation',
  templateUrl: './quick-navigation.component.html',
  styleUrls: ['./quick-navigation.component.scss']
})
export class QuickNavigationComponent implements OnInit {
  @Input() items: Anchor[];

  constructor() { }

  ngOnInit() {
  }

}
