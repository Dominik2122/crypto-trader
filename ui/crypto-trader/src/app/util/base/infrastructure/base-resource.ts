import {HttpClient, HttpHeaders} from "@angular/common/http";

import {Observable, of} from "rxjs";
import {Injectable} from '@angular/core';
import {PermissionService} from "src/app/authentication/domain/PermissionService";
import {User} from "src/app/authentication/domain/User";


@Injectable()
export class BaseResource {


  constructor(private readonly http: HttpClient,
              private readonly permissionService: PermissionService) {
  }

  get<T>(url: string, params?: { [key: string]: string }): Observable<T> {
    const user: User = this.permissionService.getUser()
    const token: string = user && user.getToken()
    return this.http.get<T>(url, {
      headers: {'Authorization': 'Token '+ token }
    })
  }

  put(url: string, params?: { [key: string]: string }): Observable<any> {
    return of(true)
  }

  post<T>(url: string, data, params?: { [key: string]: string }): Observable<T> {
    return this.http.post<T>(url, data)
  }

}
