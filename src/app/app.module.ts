import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { ApiService } from './api.service';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { PostComponent } from './home/post/post.component';

import { ProjectsComponent } from './projects/projects.component';
import { ProjectComponent } from './projects/project/project.component';

import { LanguagesComponent } from './languages/languages.component';
import { LanguageComponent } from './languages/language/language.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    PostComponent,
    ProjectsComponent,
    ProjectComponent,
    LanguagesComponent,
    LanguageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    ApiService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
