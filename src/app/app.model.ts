export class Project {
  public name: string;
  public address: string;
  public description: string;
}

export class Language {
  public name: string;
  public projectArray: Array<Project>;
}

export class Post {
  public title: string;
  public dateCreated: Date;

  public project: Project;
  public body: string;
}
