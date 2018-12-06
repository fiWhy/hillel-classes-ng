import { Action } from '@ngrx/store';
import { MenuItem } from 'src/app/shared/menu/menu-item';

export const GET_MENU = '[Menu] Get Menu';
export const SET_MENU = '[Menu] Set Menu';
export const SET_ACTIVE_MENU_ITEM = '[Menu] Set Active Menu Item';

export class GetMenuAction implements Action {
    readonly type = GET_MENU;

    constructor() { }
}

export class SetMenuAction implements Action {
    readonly type = SET_MENU;

    constructor(public payload: MenuItem[]) { }
}


export class SetActiveMenuItemAction implements Action {
    readonly type = SET_ACTIVE_MENU_ITEM;

    constructor(public payload: MenuItem) { }
}

export type Actions
    = GetMenuAction
    | SetMenuAction
    | SetActiveMenuItemAction;
