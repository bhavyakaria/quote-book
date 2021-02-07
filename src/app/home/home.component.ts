import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { ApiRequestService } from '../utils/api-request.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private data: DataService, 
    private router: Router,
    private apiRequestService: ApiRequestService) { }

  ngOnInit() {

    if (this.data.bookData.value.length === 0) {
      this.router.navigateByUrl('/');
    }
  }

}
