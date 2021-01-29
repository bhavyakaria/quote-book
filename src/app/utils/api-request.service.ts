import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServerRequestConfigService } from './server-request-config.service';
import { appConstants, apiConstants } from '../shared/constants';
import { User } from '../models/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ApiRequestService {

  constructor(private reqConfig: ServerRequestConfigService,
    private http: HttpClient) { }

    userLogin(googleToken: string, email: string, name: string, profilePic: string) {
      let postData = {
        googleToken,
        email,
        name,
        profilePic
      };
      return this.reqConfig.post(apiConstants.socialLogin.url, postData);
    }
}
