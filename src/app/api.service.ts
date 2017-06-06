import { Injectable } from '@angular/core';

import { Language, Post, Project } from './app.model';

@Injectable()
export class ApiService {

  constructor() { }

  public getPostArray(): Array<Post> {
    return [];
  }

  public getProjectArray(): Array<Project> {
    return [];
  }

  public getLanguageArray(): Array<Language> {
    return [];
  }

}
