import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { appConstants, apiConstants } from '../shared/constants';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

interface ResponseInterface {
  meta: object;
  data: object;
};

@Injectable({
  providedIn: 'root'
})
export class ServerRequestConfigService {
  requestHeaders: HttpHeaders;
  noHeadersRequiredUrls = [apiConstants.socialLogin.url];
  isAffiliate = false;

  constructor(private http: HttpClient,
    private router: Router) {
  }
  ngAfterViewInit() {
  }

  setHeaders() {
    if (localStorage.getItem('User-Session-Token')) {
      this.requestHeaders = new HttpHeaders({
        'Content-Type': 'application/json',
        'User-Session-Token': localStorage.getItem('User-Session-Token'),
        'User-Id': localStorage.getItem('User-Id'),
      });
    } else {
      this.router.navigate(['login']);
    }
  }
  get(apiUrl: string, requestParams?: HttpParams | {}) {
    if (this.noHeadersRequiredUrls.includes(apiUrl)) {
      return this.http.get(appConstants.prodApiBaseUrl + apiUrl, { params: requestParams });
    }
    this.setHeaders();
    return this.http.get(appConstants.prodApiBaseUrl + apiUrl, { headers: this.requestHeaders, params: requestParams });
  }
  post(apiUrl: string, payLoad: object): Observable<any> {
    if (this.noHeadersRequiredUrls.includes(apiUrl)) {
      return this.http.post(appConstants.prodApiBaseUrl + apiUrl, payLoad);
    }
    this.setHeaders();
    return this.http.post(appConstants.prodApiBaseUrl + apiUrl, payLoad, { headers: this.requestHeaders });
  }
  put(apiUrl: string, payLoad: object, uniqueId?: any) {
    this.setHeaders();
    return this.http.put(appConstants.prodApiBaseUrl + apiUrl + (uniqueId ? uniqueId + '/' : ''), payLoad, { headers: this.requestHeaders })
  }
}
