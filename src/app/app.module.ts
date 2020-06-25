import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import { BlogPageComponent } from './components/blog-page/blog-page.component';
import { ItemPageComponent } from './components/item-page/item-page.component';
import { EditPageComponent } from './components/edit-page/edit-page.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogPageComponent,
    ItemPageComponent,
    EditPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IonicModule.forRoot(),
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
