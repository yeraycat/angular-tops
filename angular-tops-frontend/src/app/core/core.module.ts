import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemApiService } from './services/in-mem-api.service';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemApiService),
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({
      name: 'Ng Tops Devtools',
      maxAge: 25,
      logOnly: environment.production
    }),
  ]
})
export class CoreModule { }
