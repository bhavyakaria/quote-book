import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'quote-book';
  constructor(private data: DataService, public router: Router) {
    if (this.data.bookData.value.length === 0) {
      this.router.navigateByUrl('/file-upload');
    }
  }
}
