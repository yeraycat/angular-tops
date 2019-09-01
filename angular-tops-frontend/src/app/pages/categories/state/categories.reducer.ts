import { CategoriesState } from '../types/state.interface';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CategoriesActionTypes, CategoriesActions } from './categories.actions';

const initialState: CategoriesState = {
    categoriesList: []
};

const getCategoriesState = createFeatureSelector<CategoriesState>('categories');

export const getAllCategories = createSelector(
    getCategoriesState,
    state => state.categoriesList
);

export function reducer(state = initialState, action: CategoriesActions): CategoriesState {
    switch (action.type) {
        case CategoriesActionTypes.LoadSuccess:
            return {
                ...state,
                categoriesList: action.payload
            };

        default:
            return state;
    }
}
