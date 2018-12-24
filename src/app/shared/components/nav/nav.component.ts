import { Component, Input } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MenuItem } from '../menu/menu-item';

@Component({
  selector: 'c-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  @Input() opened: boolean;
  @Input() items: MenuItem[] = [];
  @Input() activeElement: MenuItem = new MenuItem();

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver) { }

  isLinkActive(item: MenuItem) {
    return this.activeElement ? item.link === this.activeElement.link : false;
  }

}
