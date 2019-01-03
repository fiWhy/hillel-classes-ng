import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { isObject } from 'util';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  storage = new BehaviorSubject(window.localStorage);
  constructor() { }

  update(data: any) {
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        window.localStorage.setItem(key, isObject(data[key]) ? JSON.stringify(data[key]) : data[key]);
      }
    }
    this.storage.next(window.localStorage);
  }

  fetch() {
    return window.localStorage;
  }

  get(key) {
    const item = window.localStorage.getItem(key);
    return item && item[0] === '{' || item[0] === '[' ? JSON.parse(item) : item;
  }

  clear() {
    window.localStorage.clear();
    this.storage.next(null);
  }
}
