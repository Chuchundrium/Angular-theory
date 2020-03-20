// by the fact, interceptor is a service

import {HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';

export class AuthInterceptor implements HttpInterceptor{
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    // we cannot modify req directly! Only clone!
    const clonedReq = req.clone({
      headers: req.headers.append('Auth', 'SOME-TOKEN')
    });

    // this is a stream:
    return next.handle(clonedReq).pipe(
      tap(event => {
        if (event.type === HttpEventType.Response) {
          console.log('Interseptor response', event);
        }
      })
    );
  }
}
