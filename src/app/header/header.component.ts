import { Component, OnInit } from '@angular/core';
import { AuthService } from '../utils/auth-service.service';
import { LocalStorageService } from '../utils/local-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  userName = '';
  constructor(private authService: AuthService, private localStorageService: LocalStorageService) { }

  ngOnInit() {
    let adminName = this.localStorageService.get('name');
    this.userName = adminName || 'Awesome Blossom';
  }

  logout(event: MouseEvent) {
    this.authService.logout();
    try {
      event.preventDefault();
    } catch (e) {

    }
  }

}
