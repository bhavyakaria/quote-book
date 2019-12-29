import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  listSource = new BehaviorSubject(new Set());
  bookName = new BehaviorSubject('');
  bookData = new BehaviorSubject([]);
  // list = this.list

  constructor() { }

  bookList(list: Set<string>) {
    this.listSource.next(list);
  }

  setBookName(name: string) {
    this.bookName.next(name);
  }

  setbookData(data: any[]) {
    this.bookData.next(data);
  }

}
