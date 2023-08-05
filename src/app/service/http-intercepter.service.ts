import { HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { StoreServiceService } from './store-service.service';

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterService implements HttpIntercepterService{

  
  // constructor(private injector:Injector) { }

  // intercept(req:HttpRequest<any>,next:HttpHandler):Observable<HttpEvent<any>>
  // {
  //   let authService=this.injector.get(StoreServiceService)
  //   let tokenizedReq=req.clone({
  //     setHeaders:{
  //       'x-access-token':`${authService.getToken()}`
  //     }
  //   })
  //   return next.handle(tokenizedReq);
  // }
}
