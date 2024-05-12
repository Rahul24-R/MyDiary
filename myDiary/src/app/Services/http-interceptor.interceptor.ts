import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpInterceptorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    debugger
    console.log(`Interceptor for request  ${request.method}`);
    const modifiedRequest = request.clone({
      setHeaders: {
        KeyHeader: 'CE0D2386D5B1411FA411427D9EBB40D3'
      }
    });
    return next.handle(modifiedRequest);
  }
}
