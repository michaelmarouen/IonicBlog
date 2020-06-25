import { Component, OnInit } from '@angular/core';
import { BlogService} from 'src/app/service/blog/blog.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.scss']
})
export class BlogPageComponent implements OnInit {

  allPosts$ : Observable<any>;  
  constructor(
    private _apiBlogService : BlogService
  ) { }

  ngOnInit(): void {
    this._apiBlogService.load()
    this.allPosts$ = this._apiBlogService.data$;
  }

}
