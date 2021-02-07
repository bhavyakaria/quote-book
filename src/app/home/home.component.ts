import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiRequestService } from '../utils/api-request.service';
import { BookResponse } from '../models/interfaces';

import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  listOfBooks: any[];

  constructor(private router: Router,
    private apiRequestService: ApiRequestService,
    private ngxLoader: NgxUiLoaderService) { }

  ngOnInit() {
    this.ngxLoader.start();
    this.apiRequestService.fetchBooks().subscribe((res: BookResponse) => {
      this.listOfBooks = res.books;
      this.ngxLoader.stop();
      if (this.listOfBooks.length == 0) {
        this.router.navigateByUrl('/file-upload');
      }
    });
  }

}
