import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogPageComponent } from './components/blog-page/blog-page.component';
import { ItemPageComponent } from './components/item-page/item-page.component';
import { EditPageComponent } from './components/edit-page/edit-page.component';


const routes: Routes = [
  {path:'blog', 
      children:[
        {path:'', component: BlogPageComponent},
        {path:':id', component: ItemPageComponent},
        {path:':id/edit', component: EditPageComponent}
      ]
  },
  {
    path: '',
    redirectTo: 'blog',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
