import { Injectable } from '@angular/core';

import { Language } from './app.constant';
import { Post, Project } from './app.model';

const PROJECT_ARRAY: Array<Project> = [
  {
    name: 'Notes Converter',
    address: '#',
    languageArray: [
      Language.YAML,
      Language.PYTHON,
      Language.HTML,
      Language.CSS,
      Language.JAVASCRIPT
    ],
    description: 'Takes YAML input and outputs formatted and interactive HTML page with syntax highlighting and collapsable accordions'
  },
  {
    name: 'Jenkins Maven Ecosystem Graph',
    address: '#',
    languageArray: [
      Language.XML,
      Language.PYTHON,
      Language.HTML,
      Language.CSS,
      Language.TYPESCRIPT,
      Language.D3JS,
      Language.SVG,
      Language.NODE,
      Language.ANGULAR
    ],
    description: `Scrapes a Maven controlled Java project ecosystem hosted in a Jenkins build
      management system and converts to a relational graph via D3.js that reports on build statuses in Jenkins`
  },
  {
    name: 'Angular Spike App',
    address: '#',
    languageArray: [
      Language.ANGULAR,
      Language.TYPESCRIPT,
      Language.HTML,
      Language.CSS,
      Language.NODE
    ],
    description: 'Used as a sandbox area for exploring and creating demonstrations of Angular concepts and features'
  }
];

const POST_ARRAY: Array<Post> = [
  {
    title: 'Reading YAML with Python',
    dateCreated: new Date('2-4-17'),
    project: PROJECT_ARRAY[0],
    body: 'Using the YAML library, Python can be made to interpret YAML input and perform further operations'
  },
  {
    title: 'Writing HTML with Genshi',
    dateCreated: new Date('3-9-17'),
    project: PROJECT_ARRAY[0],
    body: 'Using the Genshi library, Python can be made to generate HTML programmatically for converting data to browser legible content'
  },
  {
    title: 'Syntax Highlighting with Pyhon and CSS',
    dateCreated: new Date('4-16-17'),
    project: PROJECT_ARRAY[0],
    body: 'Using Regular Expressions, Python can parse text and apply CSS classes to the output HTML to color code snippets'
  },
  {
    title: 'Scraping directories with Python',
    dateCreated: new Date('3-16-17'),
    project: PROJECT_ARRAY[1],
    body: `Using the included OS library and BeautifulSoup, Python can search for and
      parse XML files representing Maven projects to create a dependency dictionary`
  },
  {
    title: 'Creating Dependency Diagram with D3.js',
    dateCreated: new Date('4-14-17'),
    project: PROJECT_ARRAY[1],
    body: 'Using D3.js, Angular canbe used to create a dependency diagram application as a visualization of a dictionary object'
  },
  {
    title: 'Report build status with Jenkins REST API',
    dateCreated: new Date('5-1-17'),
    project: PROJECT_ARRAY[1],
    body: `Using the Jenkins REST API, Angular can display the status of the
      projects' build processes in the dependency diagram visualization`
  },
  {
    title: 'Creating an application with Angular-CLI',
    dateCreated: new Date('4-24-17'),
    project: PROJECT_ARRAY[2],
    body: 'Using Angular-CLI, creating an Angular application for learning concepts is easy'
  },
  {
    title: 'Routing to Feature Modules in Angular',
    dateCreated: new Date('4-30-17'),
    project: PROJECT_ARRAY[2],
    body: `By taking advantage of Angular's Feature Module concept, encapsulating
      functionality and leveraging the Router becomes incredibly useful`
  },
  {
    title: 'Input, Output, and Two-Way Binding in Angular',
    dateCreated: new Date('5-5-17'),
    project: PROJECT_ARRAY[2],
    body: `There can exist a binding from Parent to Child, from Child to Parent, or
      in both directions in Angular, and using both dynamically and statically are important`
  }
]
@Injectable()
export class ApiService {

  private languageNameArray: Array<string>;
  private postArray: Array<Post>;
  private projectArray: Array<Project>;

  constructor() {
    this.languageNameArray = Language.strings();
    this.projectArray = PROJECT_ARRAY;
    this.postArray = POST_ARRAY;
  }

  public getPostArray(): Array<Post> {
    return this.postArray;
  }

  public getProjectArray(): Array<Project> {
    return this.projectArray;
  }

  public getLanguageNameArray(): Array<string> {
    return this.languageNameArray;
  }

}
