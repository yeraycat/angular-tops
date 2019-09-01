import { Action } from '@ngrx/store';

export enum CategoriesActionTypes {
    Load = '[Categories] Load',
    LoadSuccess = '[Categories] Load Success',
    LoadFail = '[Categories] Load Fail'
}

export class Load implements Action {
    readonly type = CategoriesActionTypes.Load;

    constructor() {}
}

export class LoadSuccess implements Action {
    readonly type = CategoriesActionTypes.LoadSuccess;

    constructor() {}
}

export class LoadFail implements Action {
    readonly type = CategoriesActionTypes.LoadFail;

    constructor() {}
}

export type CategoriesActions = Load
    | LoadSuccess
    | LoadFail;
