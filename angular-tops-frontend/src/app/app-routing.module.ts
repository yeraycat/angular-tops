import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'top',
    loadChildren: './pages/top-list/top-list.module#TopListModule'
  },
  {
    path: 'add-listing',
    loadChildren: './pages/add-listing/add-listing.module#AddListingModule'
  },
  {
    path: 'categories',
    loadChildren: './pages/categories/categories.module#CategoriesModule'
  },
  {
    path: 'vote',
    loadChildren: './pages/vote-landing/vote-landing.module#VoteLandingModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
