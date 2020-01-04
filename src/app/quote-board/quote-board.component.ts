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

  list = [];
  showList = [];
  listEmitter = new BehaviorSubject<any[]>(this.showList);

  ngOnInit() {

    this.data.bookData.subscribe(res => {
      this.list = res;
    });

    this.data.bookName.subscribe(val => {
      this.showList = [];
      this.list.forEach(obj => {

        if (!val) {
          val = this.list[0].book_name;
        }

        if (val === obj.book_name) {
          this.showList.push(obj);
        }
      });
      this.listEmitter.next(this.showList);
    });
  }

}
