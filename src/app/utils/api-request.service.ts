import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServerRequestConfigService } from './server-request-config.service';
import { appConstants, apiConstants } from '../shared/constants';
import { BookResponse, User } from '../models/interfaces';
import { LocalStorageService } from './local-storage.service';
import { AuthService } from './auth-service.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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

    fetchBooks(): Observable<BookResponse> {
      const postData = {
        userId: this.authService.getUserId()
      }
      return this.reqConfig.get(apiConstants.fetchBooks.url, postData).pipe(map((res: BookResponse) => res));
    }

    uploadKindleNotes(bookList) {
      const postData = {
        userId: this.authService.getUserId(),
        bookList: bookList
      };
      return this.reqConfig.post(apiConstants.saveNotes.url, postData);
    }
}
