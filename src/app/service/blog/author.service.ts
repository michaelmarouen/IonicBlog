import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(
      private http: HttpClient
  ) { }

  async getAuthorById(id:string){
    const url = 'https://jsonplaceholder.typicode.com/users?id='+id
    return await this.http.get(url).pipe(first()).toPromise();    
  }
}
