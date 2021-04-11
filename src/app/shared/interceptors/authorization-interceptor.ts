import { HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

export class AuthorizationInterceptor {
    constructor() {}  

    intercept(request: HttpRequest<any>, next: HttpHandler) : Observable<HttpEvent<any>> {
    
        request = request.clone({
          setHeaders: {
            Authorization: `Basic c3RhZ2luZzpkaXNjb3Zlcnk=`
          }
        });    
        return next.handle(request);
      }
}
