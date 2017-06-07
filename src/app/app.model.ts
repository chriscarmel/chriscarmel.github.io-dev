import { Language } from './app.constant';

export class Project {
  public name: string;
  public address: string;
  public languageArray: Array<Language>;
  public description: string;

  public constructor(
    name: string,
    address: string,
    languageArray: Array<Language>,
    description: string
  ) {
    this.name = name;
    this.address = address;
    this.languageArray = languageArray;
    this.description = description;
  }
}

export class Post {
  public title: string;
  public dateCreated: Date;

  public project: Project;
  public body: string;

  public constructor(
    title: string,
    dateCreated: Date,
    project: Project,
    body: string
  ) {
    this.title = title;
    this.dateCreated = dateCreated;
    this.project = project;
    this.body = body;
  }
}
