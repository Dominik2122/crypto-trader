import {Observable, ReplaySubject} from "rxjs";

export class Storage<T> {
  value: T;

  value$: ReplaySubject<T> = new ReplaySubject<T>(1);

  set(value: T): void {
    this.value = value;
    this.value$.next(value)
  }

  get(): T {
    return this.value
  }

  observe(): Observable<T> {
    return this.value$.asObservable()
  }

}
