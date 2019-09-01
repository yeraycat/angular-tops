import { CategoriesState } from '../types/state.interface';
import { createFeatureSelector, createSelector } from '@ngrx/store';

const initialState: CategoriesState = {
    categoriesList: []
};

const getCategoriesState = createFeatureSelector<CategoriesState>('categories');

export const getAllCategories = createSelector(
    getCategoriesState,
    state => state.categoriesList
);

export function reducer(state = initialState, action): CategoriesState {
    switch (action.type) {
        case '[Categories] Load categories':
            return {
                ...state,
                categoriesList: [
                    {id: 1, name: 'Browser MMORPGs'},
                    {id: 2, name: 'WOW Private Servers'},
                    {id: 3, name: 'Runescape Private Servers'},
                    {id: 4, name: 'Ragnarok Online Private Servers'},
                    {id: 5, name: 'MU Online Private Servers'},
                    {id: 6, name: 'Lineage 2 Private Servers'},
                ]
            };

        default:
            return state;
    }
}
