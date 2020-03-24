import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../../../shared/interfaces';
import {Observable} from 'rxjs';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  /* prototypes for future methods */

  /* token will come from server */
  get token(): string {
    return '';
  }

  private setToken() {
    /* here will be logic for token changes */
  }

  login(user: User): Observable<any> {
    return this.http.post('', user); /* RxJS stream */
  }

  logout() {

  }

  isAuthenticated(): boolean {
    return !!this.token;
  }
}
