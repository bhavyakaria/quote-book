import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare const gapi: any;

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})

export class AuthComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    if (gapi && gapi.signin2) {
      googleRenderer.call(this);
    } else {
      setTimeout(googleRenderer.bind(this), 1500)
    }
    function googleRenderer() {
      if (!gapi || !gapi.signin2) {
        // this.toastr.danger('Page not loaded correctly, Please refresh', 'Load Error');
        alert("Page not loaded correctly, Please reload")
      }
      gapi.signin2.render('my-signin2', {
        'scope': 'profile email',
        'width': 240,
        'height': 50,
        'left': 'auto',
        'right': 'auto',
        'longtitle': true,
        'theme': 'light',
        'onsuccess': param => this.onSignIn(param)
      });
    }
  }

  onSignIn(googleUser) {
    // this.authService.setGoogleAuthInstance(gapi.auth2.getAuthInstance());
    let profile = googleUser.getBasicProfile();
    let idToken = googleUser.getAuthResponse().id_token;
    console.log(profile);
    console.log(idToken);
    this.router.navigate(['/home']);
  }

}
