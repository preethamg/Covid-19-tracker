import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class httpService {
    constructor(private http: HttpClient) {

    }

    get(url: string): Observable<any> {
        if (url) {
            return this.http.get<Observable<any>>(url);
            // .pipe(
            //     catchError((error): any => {
            //         console.log(error);
            //     })
            // );
        }
    }
}