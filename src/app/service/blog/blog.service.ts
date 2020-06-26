import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, concat, pipe, merge } from 'rxjs';
import { AuthorService } from 'src/app/service/blog/author.service';
import { CommentaireService } from 'src/app/service/blog/commentaire.service';
import { first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private _data$: BehaviorSubject<any> = new BehaviorSubject(null);
  data$ : Observable<any> = this._data$.asObservable();  

  constructor(
      private http: HttpClient,
      private _apiAuteurService : AuthorService,
      private _apiCommentaireService : CommentaireService
  ) { }

  async load(){
    const data =  await this.http.get('https://jsonplaceholder.typicode.com/posts').pipe(first()).toPromise();    
    this._data$.next(data);    
  }

  async getItemById(id: string){
    const data = this._data$.value; 
    if(!data) await this.load();
    const post = this._data$.value.find(el=>el.id === parseInt(id))
    if(!post)return alert("No DATA");
    return [post]
  }

  async getAuthorById(id: string){
    const data = this._data$.value; 
    if(!data) await this.load();
    const post = this._data$.value.find(el=>el.id === parseInt(id))
    if(!post)return alert("No DATA");
    const author = await this._apiAuteurService.getAuthorById(post.userId);
    return author
  }

  async getCommentById(id: string){
    const data = this._data$.value; 
    if(!data) await this.load();
    const post = this._data$.value.find(el=>el.id === parseInt(id))
    if(!post)return alert("No DATA");
    const commentaires = await this._apiCommentaireService.getCommentById(post.userId);     
    return commentaires
  }
}
