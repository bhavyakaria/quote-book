import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookListComponent } from '../book-list/book-list.component';
import { QuoteBoardComponent } from '../quote-board/quote-board.component';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { BookResponse } from '../models/interfaces';
import { NgxUiLoaderService } from 'ngx-ui-loader';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, BookListComponent, QuoteBoardComponent, NgxUiLoaderModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  listOfBooks: any[];

  constructor(private router: Router,
    private ngxLoader: NgxUiLoaderService) { }

  ngOnInit() {
    // this.ngxLoader.start();
    // this.apiRequestService.fetchBooks().subscribe((res: BookResponse) => {
    //   this.listOfBooks = res.books;
    //   this.ngxLoader.stop();
    //   if (this.listOfBooks.length == 0) {
    //     this.router.navigateByUrl('/file-upload');
    //   }
    // });
  }

}
