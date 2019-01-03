import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from './store/reducers';
import { Observable } from 'rxjs';
import { MenuItem } from '@shared/components/menu/menu-item';
import { SetActiveMenuItemAction, GetMenuAction } from './store/actions/menu.actions';
import { Router, NavigationEnd } from '@angular/router';
import menu from './mocks/menu';
import { AuthService } from './core/services/auth.service';
import { StorageService } from './core/services/storage.service';

@Component({
  selector: 'c-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'hillel-ng';
  photoUrl: string;
  username: string;

  menuItems$: Observable<MenuItem[]>;
  activeMenuItem$: Observable<MenuItem>;

  activeItem: MenuItem;
  menuItems: MenuItem[];


  constructor(
    private store: Store<fromRoot.State>,
    private authService: AuthService,
    private storageService: StorageService,
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

    this.store.dispatch(new GetMenuAction());

    this.storageService.storage.subscribe(data => {
      const user = this.storageService.get('user');
      this.photoUrl = user.photoURL;
      this.username = user.displayName;
    });

    this.activeMenuItem$.subscribe(data => {
      this.activeItem = data;
    });

    this.menuItems$.subscribe(data => {
      this.menuItems = data;
    });
  }

  auth() {
    this.authService.google()
      .subscribe(result => {
        this.storageService.update({
          user: result.user,
          at: result.credential.accessToken
        });
      });
  }
}
