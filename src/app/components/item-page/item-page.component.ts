import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BlogService } from 'src/app/service/blog/blog.service';
import { concat, merge } from 'rxjs';
import { concatAll } from 'rxjs/operators';

@Component({
  selector: 'app-item-page',
  templateUrl: './item-page.component.html',
  styleUrls: ['./item-page.component.scss']
})
export class ItemPageComponent {
  
    auteur:any;
    comments:any;
    post:any;

  constructor(
      private _apiBlogService: BlogService,
      private _route: ActivatedRoute,    
      private _router: Router
    ) { }

    async ionViewWillEnter(){
      const {id = null} = this._route.snapshot.params;
      if(!id)return;
      const item = await this._apiBlogService.getItemById(id);
      if(!item) return this._router.navigate([`../blog/`])
      const author = await this._apiBlogService.getAuthorById(id);
      if(!author) return this._router.navigate([`../blog/`])
      const commentaires = await this._apiBlogService.getCommentById(id);
      if(!commentaires) return this._router.navigate([`../blog/`])
      this.post = item
      this.auteur = author
      this.comments = commentaires
    }

}
