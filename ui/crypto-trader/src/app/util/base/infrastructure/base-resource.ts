import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import { Injectable } from '@angular/core';


@Injectable()
export class BaseResource {


  constructor(private readonly http: HttpClient) {}

  get<T>(url: string, params?:{[key:string] : string}): Observable<T> {
    return this.http.get<T>(url)
  }

  put(url: string, params?:{[key:string] : string}): Observable<any> {
    return of(true)
  }

}
