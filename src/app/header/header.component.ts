import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../utils/local-storage.service';

import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  userName = '';
  profilePic = '';
  constructor(private localStorageService: LocalStorageService) { }

  ngOnInit() {
    let adminName = this.localStorageService.get('name');
    this.userName = 'Hi, ' + (adminName || 'Awesome Blossom');
  }
}
