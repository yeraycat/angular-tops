import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemApiService implements InMemoryDbService {

  constructor() { }

  createDb() {
    const categories = [
      { id: 1, name: 'Browser MMORPG' },
      { id: 2, name: 'WOW Private Servers' },
      { id: 3, name: 'Runescape Private Servers' },
      { id: 4, name: 'Lineage 2 Private Servers' },
      { id: 5, name: 'Ragnarok Online Private Servers'},
      { id: 6, name: 'MU Onlne Private Servers'}
    ];
    return {categories};
  }
}
