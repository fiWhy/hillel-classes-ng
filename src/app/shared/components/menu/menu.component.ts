import { Component, OnInit, Input } from '@angular/core';
import { MenuItem } from './menu-item';

@Component({
  selector: 'c-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  @Input() items: MenuItem[] = [];
  @Input() activeElement: MenuItem = new MenuItem();

  constructor() { }

  ngOnInit() {
  }

  isLinkActive(item: MenuItem) {
    return this.activeElement ? item.link === this.activeElement.link: false;
  }
}
