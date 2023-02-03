import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, finalize } from 'rxjs';
import { LoadingService } from '../../shared/services/loading.service';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
    constructor(private loadingService:LoadingService) { }
countRequest = 0;
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      if(!this.countRequest) {
        this.loadingService.show();
      }
      this.countRequest ++;
        return next.handle(request).pipe(
          finalize(() => {
            this.countRequest --;
            if (!this.countRequest) {
              this.loadingService.hide();
            }
        }));
    }
}
