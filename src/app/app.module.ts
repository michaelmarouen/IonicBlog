import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {  ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import { BlogPageComponent } from './components/blog-page/blog-page.component';
import { ItemPageComponent } from './components/item-page/item-page.component';
import { EditPageComponent } from './components/edit-page/edit-page.component';
import { HeaderComponent } from './components/header/header.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { UpdateNotificationComponent } from './components/update-notification/update-notification.component';

@NgModule({
  declarations: [
    AppComponent,
    BlogPageComponent,
    ItemPageComponent,
    EditPageComponent,
    HeaderComponent,
    UpdateNotificationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,    
    IonicModule.forRoot(),
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
