import { Action } from '@ngrx/store';
import { Material } from '@shared/components/material-list/models/material';
import * as material from '../actions/material.actions';

export interface State {
  id: number;
  items: Material[];
}

export const initialState: State = {
  id: null, // lesson id
  items: []
};

export function reducer(state = initialState, action: material.MaterialActions): State {
  switch (action.type) {
    case material.MaterialActionTypes.LoadMaterials: {
      return { id: action.payload.id, items: [] };
    }

    case material.MaterialActionTypes.LoadMaterialsSuccess: {
      return { id: state.id, items: action.payload };
    }

    case material.MaterialActionTypes.LoadMaterialsError: {
      return { id: state.id, items: [] };
    }

    default:
      return state;
  }
}
