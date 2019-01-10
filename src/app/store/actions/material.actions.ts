import { Action } from '@ngrx/store';
import { Material } from '../../core/models/material';

export enum MaterialActionTypes {
  LoadMaterials = '[Material] Load Materials',
  LoadMaterialsSuccess = '[Material] Load Materials Success',
  LoadMaterialsError = '[Material] Load Materials Error'
}

export class LoadMaterials implements Action {
  readonly type = MaterialActionTypes.LoadMaterials;

  constructor(public payload: string[]) { }
}

export class LoadMaterialsSuccess implements Action {
  readonly type = MaterialActionTypes.LoadMaterialsSuccess;

  constructor(public payload: Material[]) { }
}

export class LoadMaterialsError implements Action {
  readonly type = MaterialActionTypes.LoadMaterialsError;
}

export type MaterialActions = LoadMaterials | LoadMaterialsSuccess | LoadMaterialsError;
