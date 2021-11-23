import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiKeys } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class InterceptorService implements HttpInterceptor {
  constructor() {}
  intercept(req: HttpRequest<any>, next: HttpHandler): any {
    let reqClone;
    const params = req.params.appendAll(apiKeys);
    reqClone = req.clone({ params });

    return next.handle(reqClone);
  }
}
