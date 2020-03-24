import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FirebaseAuthResponse, User} from '../../../shared/interfaces';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';
import {tap} from 'rxjs/operators';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  /* prototypes for future methods */

  /* token will come from server */
  get token(): string {
    return '';
  }

  /* https://firebase.google.com/docs/reference/rest/auth#section-sign-in-email-password */
  login(user: User): Observable<any> {
    /* RxJS stream: */
    return this.http.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.apiKey}`, user)
      .pipe(
        tap(this.setToken)
      );
  }

  logout() {

  }

  isAuthenticated(): boolean {
    return !!this.token;
  }

  private setToken(response: FirebaseAuthResponse) {
    console.log(response);
    /* here will be logic for token changes */
  }
}
