import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private _data$: BehaviorSubject<any> = new BehaviorSubject(null);
  data$ : Observable<any> = this._data$.asObservable();
  
  constructor(
      private http: HttpClient
  ) { }

  async load(){
    const data =  await this.http.get('https://jsonplaceholder.typicode.com/posts').toPromise();    
    this._data$.next(data);    
  }
}
