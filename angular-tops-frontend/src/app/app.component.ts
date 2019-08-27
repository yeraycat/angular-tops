import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { TitleService } from './core/services/title.service';

@Component({
  selector: 'ngtops-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  siteTitle = 'Ng Tops';
  pageTitle$: Observable<string>;
  pageTitleSubscription: Subscription;

  constructor(
    private titleService: TitleService,
  ) {}

  ngOnInit() {
    this.subscribeToPageTitle();
  }

  ngOnDestroy() {
    this.unsubscribeFromPageTitle();
  }

  private subscribeToPageTitle() {
    this.pageTitle$ = this.titleService.pageTitle$;
    this.pageTitleSubscription = this.pageTitle$.subscribe(t => console.log(t));
  }

  private unsubscribeFromPageTitle() {
    if (this.pageTitleSubscription) {
      this.pageTitleSubscription.unsubscribe();
    }
  }
}
