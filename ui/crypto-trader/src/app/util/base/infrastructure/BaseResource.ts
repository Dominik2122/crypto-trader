import {HttpClient, HttpParams} from '@angular/common/http';

import {Observable, of} from 'rxjs';
import {Injectable} from '@angular/core';
import {PermissionService} from 'src/app/authentication/domain/PermissionService';
import {User} from 'src/app/authentication/domain/User';
import {environment} from "src/environments/environment";


function getCookie(name) {
  let cookieValue = null;
  if (document.cookie && document.cookie !== '') {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      // Does this cookie string begin with the name we want?
      if (cookie.substring(0, name.length + 1) === (name + '=')) {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
}

const csrftoken = getCookie('csrftoken');


@Injectable()
export class BaseResource {
  API_URL: string = environment.apiUrl;

  constructor(private readonly http: HttpClient,
              private readonly permissionService: PermissionService) {
  }

  protected get<T>(url: string, params?: HttpParams): Observable<T> {
    return this.http.get<T>(`${this.API_URL}/${url}`, this.getParams(params));
  }

  protected put(url: string, params?: { [key: string]: string }): Observable<any> {
    return of(true);
  }

  protected post<T>(url: string, data, params?: HttpParams): Observable<T> {
    return this.http.post<T>(`${this.API_URL}/${url}`, data, this.getParams(params));
  }

  private getParams(params?: HttpParams) {
    const user: User = this.permissionService.getUser();
    const token: string = user && user.getToken();
    return {
      headers: {
        Authorization: 'Token ' + token,
        'X-CSRFToken': csrftoken
      },
      params
    };
  }

}

