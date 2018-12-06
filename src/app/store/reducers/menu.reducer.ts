import * as menu from '../actions/menu.actions';
import { MenuItem } from 'src/app/shared/menu/menu-item';

export interface State {
    menu: MenuItem[];
    activeElement: MenuItem;
}

const initialState: State = {
    menu: [],
    activeElement: null
};

export function reducer(state = initialState, action: menu.Actions): State {
    switch (action.type) {
        case menu.GET_MENU: {
            return {
                menu: state.menu,
                activeElement: state.activeElement
            };
        }

        case menu.SET_MENU: {
            return {
                menu: action.payload,
                activeElement: state.activeElement
            };
        }

        case menu.SET_ACTIVE_MENU_ITEM: {
            return {
                menu: state.menu,
                activeElement: action.payload
            };
        }

        default: {
            return state;
        }
    }
}
