import { Component, Input, OnInit } from '@angular/core';

import { Project } from '../../app.model';

@Component({
  selector: 'cc-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  @Input()
  public project: Project;

  public constructor() { }

  public ngOnInit(): void { }

}
