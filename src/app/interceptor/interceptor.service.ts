import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, finalize, Observable, throwError } from 'rxjs';
import { LoaderService } from '../loader/loader.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(private loaderService: LoaderService, private _snackBar: MatSnackBar) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.loaderService.isLoading.next(true);
    const apiReq = req.clone({
      url: environment.api_baseUrl.baseUrl + req.url, headers: req.headers.set('Content-Type', 'application/json')
    });
    return next.handle(apiReq).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
          errorMessage = `Error: ${error.error.message}`;
        } else {
          errorMessage = `Error Status: ${error.status}\nMessage: ${error.message}`;
        }
        if (error.status !== 404) {
          const snackBarRef = this._snackBar.open('Something went wrong. Kindly try after some time', 'Close', {
            duration: 3000
          });
        }

        return throwError(() => {
          return errorMessage
        });
      }),
      finalize(
        () => {
          this.loaderService.isLoading.next(false);
        }
      )
    );
  }
}
