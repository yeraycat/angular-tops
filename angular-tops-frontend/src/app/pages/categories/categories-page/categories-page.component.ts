import { Component, OnInit, OnDestroy } from '@angular/core';
import { CategoriesFacade } from '../categories-facade';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'ngtops-categories-page',
  templateUrl: './categories-page.component.html',
  styleUrls: ['./categories-page.component.scss']
})
export class CategoriesPageComponent implements OnInit, OnDestroy {

  categories$: Observable<{id: number, name: string}[]>;
  categoriesSubscription = new Subscription();

  constructor(
    private categoriesFacade: CategoriesFacade
  ) { }

  ngOnInit() {
    this.categories$ = this.categoriesFacade.allCategories$;
    this.categoriesSubscription = this.categories$.subscribe();
    this.categoriesFacade.getCategories();
  }

  ngOnDestroy() {
    if (this.categoriesSubscription) {
      this.categoriesSubscription.unsubscribe();
    }
  }

}
