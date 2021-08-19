import {HttpClient} from "@angular/common/http";
import {Observable, of} from "rxjs";
import { Injectable } from '@angular/core';


@Injectable()
export class BaseResource {


  constructor(private readonly http: HttpClient) {}

  get(url: string, params?:{[key:string] : string}): Observable<any> {
    return of(null)
  }

  put(url: string, params?:{[key:string] : string}): Observable<any> {
    return of(true)
  }

}
