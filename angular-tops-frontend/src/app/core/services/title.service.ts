import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

const pages = {
  '/': 'Home',
  '/add-listing': 'Add listing',
  '/categories': 'Categories',
  '/top-list': 'Top list',
  '/vote-landing': 'Vote'
};

@Injectable({
  providedIn: 'root'
})
export class TitleService {

  pageTitle$: Observable<string> = this.router.events.pipe(
    filter((e: any) => e instanceof NavigationEnd),
    map(e => this.mapPageTitle(e.url))
  );

  constructor(
    private router: Router
  ) {}

  private mapPageTitle(url: string): string {
    return url ? pages[url] : pages[''];
  }
}
