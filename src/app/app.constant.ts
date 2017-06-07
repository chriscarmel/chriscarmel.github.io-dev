import { Post, Project } from './app.model';

export enum Language {
  ANGULAR,
  CSS,
  D3JS,
  HTML,
  JAVASCRIPT,
  NODE,
  PYTHON,
  SVG,
  TYPESCRIPT,
  XML,
  YAML
}
export namespace Language {
  export function strings(): Array<string> {
    return [
      'ANGULAR',
      'CSS',
      'D3JS',
      'HTML',
      'JAVASCRIPT',
      'NODE',
      'PYTHON',
      'SVG',
      'TYPESCRIPT',
      'XML',
      'YAML'
    ];
  }
}


export const POST_COMPARE_FUNCTION: (a: Post, b: Post) => number =
  (a: Post, b: Post) => {
    if (a.dateCreated < b.dateCreated) {
      return 1;
    } else if (a.dateCreated > b.dateCreated) {
      return -1;
    } else {
      return 0;
    }
  };

export const PROJECT_COMPARE_FUNCTION: (a: Project, b: Project) => number =
  (a: Project, b: Project) => {
    if (a.name < b.name) {
      return -1;
    } else if (a.name > b.name) {
      return 1;
    } else {
      return 0;
    }
  };
