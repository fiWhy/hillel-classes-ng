import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from './store/reducers';
import { Observable } from 'rxjs';
import { MenuItem } from './shared/menu/menu-item';
import { SetMenuAction, SetActiveMenuItemAction } from './store/actions/menu.actions';
import { Router, NavigationEnd } from '@angular/router';
import menu from './menu';

@Component({
  selector: 'c-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'hillel-ng';

  menuItems$: Observable<MenuItem[]>;
  activeMenuItem$: Observable<MenuItem>;

  activeItem: MenuItem;
  menuItems: MenuItem[];

  constructor(
    private store: Store<fromRoot.State>,
    private router: Router
  ) {
    this.menuItems$ = store.select(fromRoot.getMenuList);
    this.activeMenuItem$ = store.select(fromRoot.getMenuActiveElement);
  }

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.store.dispatch(new SetActiveMenuItemAction(menu.find(m => m.link === event.url)));
      }
    });
    this.store.dispatch(new SetMenuAction(menu));

    this.activeMenuItem$.subscribe(data => {
      this.activeItem = data;

      console.log(data);
    });

    this.menuItems$.subscribe(data => {
      this.menuItems = data;
    });
  }
}
