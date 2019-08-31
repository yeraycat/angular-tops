import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemApiService } from './services/in-mem-api.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemApiService),
  ]
})
export class CoreModule { }
