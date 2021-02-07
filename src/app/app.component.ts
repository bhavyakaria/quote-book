import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from './data.service';
import { ApiRequestService } from './utils/api-request.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'quote-book';

  constructor(private data: DataService,
    public router: Router,
    private apiRequestService: ApiRequestService) { }

  ngOnInit() {

  }
}
