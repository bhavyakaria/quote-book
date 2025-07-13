import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookResponse } from '../models/interfaces';
import { Router, RouterModule } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  listOfBooks: any[] = [];
  selectedBook: any;
  currentDate: Date = new Date();

  constructor(private data: DataService) { }

  selectBook(book: any) {
    this.selectedBook = book;
    this.currentDate = new Date();
  }

  ngOnInit() {
    this.data.bookData.subscribe((books) => {
      this.listOfBooks = books;
      if (books.length) {
        this.selectedBook = books[0];
        this.currentDate = new Date();
      }
    });
  }

}
