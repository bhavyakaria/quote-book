import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServerRequestConfigService } from './server-request-config.service';
import { appConstants, apiConstants } from '../shared/constants';
import { User } from '../models/interfaces';
import { LocalStorageService } from './local-storage.service';
import { AuthService } from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class ApiRequestService {

  constructor(private reqConfig: ServerRequestConfigService,
    private http: HttpClient,
    private authService: AuthService) { }

    userLogin(googleToken: string, email: string, name: string, profilePic: string) {
      let postData = {
        googleToken,
        email,
        name,
        profilePic
      };
      return this.reqConfig.post(apiConstants.socialLogin.url, postData);
    }

    fetchBooks() {
      const postData = {
        userId: this.authService.getUserId()
      }
      return this.reqConfig.get(apiConstants.fetchBooks.url, postData);
    }
}
