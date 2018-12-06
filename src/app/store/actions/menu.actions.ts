import { Action } from '@ngrx/store';
import { MenuItem } from '@shared/components/menu/menu-item';

export enum MenuActions {
    GET_MENU = '[Menu] Get Menu',
    SET_MENU = '[Menu] Set Menu',
    SET_ACTIVE_MENU_ITEM = '[Menu] Set Active Menu Item'

}

export class GetMenuAction implements Action {
    readonly type = MenuActions.GET_MENU;

    constructor() { }
}

export class SetMenuAction implements Action {
    readonly type = MenuActions.SET_MENU;

    constructor(public payload: MenuItem[]) { }
}


export class SetActiveMenuItemAction implements Action {
    readonly type = MenuActions.SET_ACTIVE_MENU_ITEM;

    constructor(public payload: MenuItem) { }
}

export type Actions
    = GetMenuAction
    | SetMenuAction
    | SetActiveMenuItemAction;
