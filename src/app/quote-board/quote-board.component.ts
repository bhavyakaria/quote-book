import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-quote-board',
  templateUrl: './quote-board.component.html',
  styleUrls: ['./quote-board.component.scss']
})
export class QuoteBoardComponent implements OnInit {

  constructor(private data: DataService) { }

  listOfBooks = new Set();
  list = [];
  showList = [];
  listEmitter = new BehaviorSubject<any[]>(this.showList);

  ngOnInit() {

    this.data.bookData.subscribe(res => {
      this.list = res;
    });

    this.data.bookName.subscribe(val => {
      this.showList = [];
      let x = val;
      this.list.forEach(obj => {
        console.log(val['book_name'] == obj['book_name']);
        if (val === obj['book_name']) {
          this.showList.push(obj);
        }
      });
      console.log(this.showList);
      this.listEmitter.next(this.showList);
    });
  }

}
