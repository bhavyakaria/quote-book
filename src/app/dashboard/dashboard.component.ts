import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookResponse } from '../models/interfaces';
import { ApiRequestService } from '../utils/api-request.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  listOfBooks: any[];

  constructor(private router: Router,
    private apiRequestService: ApiRequestService) { }

  ngOnInit() {
    this.apiRequestService.fetchBooks().subscribe((res) => {
      this.listOfBooks = res.books;
    });
  }

}
