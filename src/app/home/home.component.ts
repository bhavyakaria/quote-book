import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { ApiRequestService } from '../utils/api-request.service';
import { BookResponse } from '../models/interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  listOfBooks: any[];

  constructor(private router: Router,
    private apiRequestService: ApiRequestService) { }

  ngOnInit() {
    this.apiRequestService.fetchBooks().subscribe((res: BookResponse) => {
      this.listOfBooks = res.books;

      if (this.listOfBooks.length == 0) {
        this.router.navigateByUrl('/file-upload');
      }
    });
  }

}
