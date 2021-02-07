import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-quote-board',
  templateUrl: './quote-board.component.html',
  styleUrls: ['./quote-board.component.scss']
})
export class QuoteBoardComponent implements OnInit {

  constructor(private data: DataService) { }

  @Input() listOfBooks: any[];

  list = [];
  showList = [];
  listEmitter = new BehaviorSubject<any[]>(this.showList);

  ngOnInit() {

    this.data.bookName.subscribe(val => {
      this.showList = [];
      if (this.listOfBooks) {
        this.listOfBooks.forEach(obj => {

          if (!val) {
            val = this.listOfBooks[0]['title'];
          }

          if (val === obj['title']) {
            this.showList = obj['notes'];
          }
        });
        this.listEmitter.next(this.showList);
      }
    });
  }

}
