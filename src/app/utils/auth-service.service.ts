import { Injectable, NgZone } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import { User } from '../models/interfaces';
// import { ShareService } from '../shared/share.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(this.tokenAvailable());
  authInstance: any;

  constructor(private router: Router,
    private ngZone: NgZone) {
  }
  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }
  login(user: User) {
    // add && user.name && user.email
    if (user.user_session_token && user.user_id) {
      this.setUserDataInLocalStorage(user);
      this.loggedIn.next(true);
      this.router.navigate(['/']);
    }
  }
  logout() {
    this.deleteUserLocalStoageData();
    try {
      this.googleSignOut();
    } catch (err) {
      this.router.navigate(['']);
    }
  }
  setGoogleAuthInstance(instance: any) {
    this.authInstance = instance;
  }
  private googleSignOut() {
    if (this.authInstance) {
      this.authInstance.signOut().then(() => {
        console.log('User signed out.');
        this.ngZone.run(() => this.router.navigate(['/login']));
      });
    } else {
      this.ngZone.run(() => this.router.navigate(['/login']));
    }
  }
  routeToCorrectPath(childRoute = '') {
    this.router.navigate(['/' + childRoute]);
  }
  private tokenAvailable(): boolean {
    return !!localStorage.getItem('User-Session-Token');
  }
  private setUserDataInLocalStorage(user: User) {
    localStorage.setItem('User-Session-Token', user.user_session_token || '');
    localStorage.setItem('User-Id', user.user_id);
    localStorage.setItem('Name', user.name || '');
    localStorage.setItem('Email', user.email_id || '');
  }
  private deleteUserLocalStoageData() {
    localStorage.removeItem('User-Session-Token');
    localStorage.removeItem('User-Id');
    localStorage.removeItem('Name');
    localStorage.removeItem('Email');
  }

  getUserId() {
    return localStorage.getItem('User-Id');
  }
}
