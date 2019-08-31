import { CategoriesState } from '../types/state.interface';

export function reducer(state: CategoriesState, action): CategoriesState {
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
