import { Component, OnInit } from '@angular/core';
import { BlogService} from 'src/app/service/blog/blog.service';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.scss']
})
export class BlogPageComponent implements OnInit {
  reponse;
  constructor(
    private _apiBlogService : BlogService
  ) { }

  ngOnInit(): void {
    this.reponse = this._apiBlogService.load()
  }

  detailArticle(){
    console.log(`Détails article`)
  }

}
