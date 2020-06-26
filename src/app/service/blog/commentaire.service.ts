import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommentaireService {
  
  constructor(
      private http: HttpClient
  ) { }

  async getCommentById(id:string){
    const url = 'https://jsonplaceholder.typicode.com/comments?postId='+id
    return await this.http.get(url).pipe().toPromise();    
  }
}
