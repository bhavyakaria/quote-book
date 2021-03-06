import { Component, OnInit, ChangeDetectorRef, Input } from '@angular/core';
import { DataService } from '../data.service';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  message: string;
  items = [];
  itemsEmitter = new BehaviorSubject<any[]>(this.items);
  list = new Set();

  @Input() listOfBooks : any[];

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.listSource.subscribe(data => {
      data.forEach(val => {
        if (val) {
          this.items.push(val);
        }
      });
      this.itemsEmitter.next(this.items);
    });
  }

  newMessage(name) {
    this.data.setBookName(name);
  }

}
