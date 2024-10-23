import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const start = performance.now();

    const clonedRequest = request.clone({
      setHeaders: {
        Authorization: `Bearer ${environment.TMDB_API_BEARER_TOKEN}`
      },
      setParams: {
        api_key: environment.TMDB_API_KEY || ''
      }
    });

    return next.handle(clonedRequest).pipe(
      tap(response => {
        if (response instanceof HttpResponse) {
          const timeInMs = Math.floor(performance.now() - start);
          console.groupCollapsed(
            `%c[RESPONSE] ${response.status} %c${clonedRequest.url}`,
            'background-color: #27b376; padding: 8px; font-weight: normal',
            ''
          );
          console.log(`HTTP call took ${timeInMs}ms`);
          console.log('Response Body:', JSON.stringify(response.body, null, 2));
          console.groupEnd();
        }
      })
    );
  }
}
