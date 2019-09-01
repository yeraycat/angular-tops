import { Action } from '@ngrx/store';
import { Category } from '../types/category.interface';

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

    constructor(public payload: Category[]) {}
}

export class LoadFail implements Action {
    readonly type = CategoriesActionTypes.LoadFail;

    constructor(public payload: string) {}
}


export type CategoriesActions = Load
    | LoadSuccess
    | LoadFail;
