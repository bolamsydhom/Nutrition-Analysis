import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable } from 'rxjs';
import { apiKeys } from 'src/environments/environment';
import { finalize } from "rxjs/operators";

@Injectable({
  providedIn: 'root',
})
export class InterceptorService implements HttpInterceptor {
  constructor(private spinner: NgxSpinnerService) {}
  intercept(req: HttpRequest<any>, next: HttpHandler): any {
    let reqClone: any;
    const params = req.params.appendAll(apiKeys);
    reqClone = req.clone({ params });

    this.spinner.show();
    return next.handle(reqClone).pipe(
      finalize(() =>  this.spinner.hide())
    );
  }
}
