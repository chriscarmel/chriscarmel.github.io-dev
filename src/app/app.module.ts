import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LanguagesComponent } from './languages/languages.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ProjectsComponent } from './projects/projects.component';
import { FrameworksComponent } from './frameworks/frameworks.component';
import { AboutComponent } from './about/about.component';
import { ConceptsComponent } from './concepts/concepts.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    ProjectsComponent,
    LanguagesComponent,
    FrameworksComponent,
    AboutComponent,
    ConceptsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
