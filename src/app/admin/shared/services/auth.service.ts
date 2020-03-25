import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {FirebaseAuthResponse, User} from '../../../shared/interfaces';
import {Observable, Subject, throwError} from 'rxjs';
import {environment} from '../../../../environments/environment';
import {catchError, tap} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class AuthService {

  /* '$' means stream */
  public error$: Subject<string> = new Subject<string>();

  constructor(private http: HttpClient) {}

  /* token comes from server */
  get token(): string {
    const expiresDate = new Date(localStorage.getItem('firebase-token-expires'));
    if (new Date() > expiresDate) {
      this.logout();
      return null;
    }
    return localStorage.getItem('firebase-token');
  }

  /* https://firebase.google.com/docs/reference/rest/auth#section-sign-in-email-password */
  login(user: User): Observable<any> {
    user.returnSecureToken = true; /* for getting 'expiresIn: "3600"' in Response (time of token life) */
    /* RxJS stream: */
    return this.http.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.apiKey}`, user)
      .pipe(
        tap(this.setToken),
        catchError(this.handleError.bind(this))
      );
  }

  logout() {
    this.setToken(null);
  }

  isAuthenticated(): boolean {
    return !!this.token;
  }

  private handleError(error: HttpErrorResponse) {
    const {message} = error.error.error;
    switch (message) {
      case 'INVALID_EMAIL':
        this.error$.next('wrong email');
        break;
      case 'INVALID_PASSWORD':
        this.error$.next('wrong password');
        break;
      case 'EMAIL_NOT_FOUND':
        this.error$.next('this email is not registered');
        break;
    }
    return throwError(error);
  }

  private setToken(response: FirebaseAuthResponse | null) {
    if (response) {
      /* ... .getTime() -> ms ; expiresIn -> seconds */
      const expiresDate = new Date(new Date().getTime() + +response.expiresIn * 1000);

      /* localStorage saves strings only */
      localStorage.setItem('firebase-token', response.idToken);
      localStorage.setItem('firebase-token-expires', expiresDate.toString());
    } else {
      localStorage.clear();
    }
  }
}
