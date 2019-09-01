import { Action } from '@ngrx/store';

export enum CategiresActionTypes {
    LoadCategories = '[Categories] Load categories'
}

export class LoadCategories implements Action {
    readonly type = CategiresActionTypes.LoadCategories;

    constructor() {}
}

export type CategoriesActions = LoadCategories;
