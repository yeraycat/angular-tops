import * as fromRoot from '@core/state/app.state';

export interface State extends fromRoot.State {
    categories: CategoriesState;
}


export interface CategoriesState {
    categoriesList: {id: number, name: string}[];
}
