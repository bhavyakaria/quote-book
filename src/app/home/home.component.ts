import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private data: DataService, private router: Router) { }

  ngOnInit() {
    console.log(this.data.bookData.value);
    if (this.data.bookData.value.length === 0) {
      this.router.navigateByUrl('/');
    }
  }

}
