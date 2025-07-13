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

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.bookData.subscribe((books) => {
      this.listOfBooks = books;
    });
  }

}
