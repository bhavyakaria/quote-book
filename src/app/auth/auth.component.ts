import { Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ApiRequestService } from '../utils/api-request.service';
import { AuthService } from '../utils/auth-service.service';

declare const gapi: any;

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})

export class AuthComponent implements OnInit {

  constructor(private router: Router,
    private apiRequest: ApiRequestService,
    private authService: AuthService,
    private ngZone: NgZone) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.intitiateGoogleApi();
  }

  intitiateGoogleApi() {
    gapi.load('auth2', () => {
      gapi.auth2.init({
        client_id: '815992551156-irt3gg9c74m5taujctpt6dsu8bm4gm5v.apps.googleusercontent.com',
        cookie_policy: 'single_host_origin',
        ux_mode: 'popup',
      }).attachClickHandler(document.getElementById('google-signIn-btn'), {},
          (googleUser) => {
            const profile = googleUser.getBasicProfile();
            const idToken = googleUser.getAuthResponse().id_token;
            const email = profile.getEmail();
            const name = profile.getName();
            const profilePic = profile.getImageUrl();
            this.ngZone.run(() => this.googleSignIn(idToken, email, name, profilePic));
          }, (error) => {

          });
    });
  }

  googleSignIn(idToken, email, name, profilePic) {
    this.apiRequest.userLogin(idToken, email, name, profilePic).subscribe(res => {
      this.authService.login(res['data']);
    });
  }

}
