import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const id = localStorage.getItem('id');
    if (id) {
      const newReq = req.clone({
        headers: req.headers.append('Authorization', `JWT ${id}`)
      });
      return next.handle(newReq);
    }

    return next.handle(req);
  }
}
